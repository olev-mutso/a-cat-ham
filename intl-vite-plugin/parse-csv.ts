import csv from 'csv-parser';
import { createReadStream } from 'node:fs'
import { ExamApi } from '../src/exam-context';

type RowType = 'SUBJECT' | 'QUESTION' | 'ANSWER' | 'INFO';

type LocaleCode = string;
type TranslatedText = string;

interface AnyRow {
  rowNumber: number;
  rowType: RowType;
  id: string;
}

interface RowSubject extends AnyRow {
  id: string;
  rowType: 'SUBJECT';
  title: Record<LocaleCode, TranslatedText>;

  questions: RowQuestion[];
}

interface RowQuestion extends AnyRow {
  id: string;
  subjectId: string;
  rowType: 'QUESTION';
  question: Record<LocaleCode, TranslatedText>;

  answers: RowAnswer[];
  info: RowInfo[];
}

interface RowAnswer extends AnyRow {
  rowType: 'ANSWER';
  correct: boolean;
  questionId: string;
  subjectId: string;
  id: string;
  answer: Record<LocaleCode, TranslatedText>;
}

interface RowInfo extends AnyRow {
  rowType: 'INFO';
  questionId: string;
  subjectId: string;
  info: Record<LocaleCode, TranslatedText>;
}


class CsvReadVisitor {

  private _index = 1;
  private _questionIndex = 1;
  private _answerIndex = 1;
  private _infoIndex = 1;
  private _lastSubject: RowSubject = {} as any;
  private _lastQuestion: RowQuestion = {} as any;
  private _all_subjects: RowSubject[] = [];

  constructor() {
  }

  close(): IntlFile[] {
    function toAnswers(row: RowAnswer): ExamApi.ErauAnswer {
      return {
        correct: row.correct,
        text: row.answer
      }
    }
    function toQuestion(row: RowQuestion): ExamApi.ErauQuestion {
      return {
        id: row.id,
        text: row.question,
        answers: row.answers.map(toAnswers),
        info: row.info.map(info => info.info),
      }
    }

    function toSubject(row: RowSubject): ExamApi.ErauSubject {
      return {
        id: row.id,
        title: row.title,
        questions: row.questions.map(toQuestion)
      }
    }
    const subjects = this._all_subjects
      .map(toSubject)
      .map(sub => ({
        id: sub.id.trim().toUpperCase(),
        fileName: sub.id.trim().toUpperCase() + '.ts',
        content: `export default ${JSON.stringify(sub, null, 2)}`
      }));

    const imports = subjects.map(e => `import ${e.id} from './${e.id}'`).join('\r\n')
      + '\r\nimport { withTk } from \'./id-gen\'\r\n'
      + '\r\nimport { ExamApi } from \'../exam-context\'\r\n';

    return [...subjects, {
      fileName: 'index.ts',
      content: imports + `export const defs: ExamApi.ErauSubject[] = withTk([${subjects.map(e => e.id).join(', ')}])`
    }];
  }

  visitAnyRow(oneRow: Record<string, string>) {
    this._index++;
    const rowType: RowType | undefined = this.visitRowType(oneRow);
    switch (rowType) {
      case undefined: return;
      case 'SUBJECT': {
        const sub = this.visitSubject(oneRow);
        this._all_subjects.push(sub);
        return sub;
      }
      case 'QUESTION': return this.visitQuestion(oneRow);
      case 'ANSWER': return this.visitAnswer(oneRow);
      case 'INFO': return this.visitInfo(oneRow);
    }
  }

  visitRowType(oneRow: Record<string, string>): RowType | undefined {
    if (oneRow.subject_id.trim().length >= 3) {
      return 'SUBJECT';
    }

    if (oneRow.type?.trim().includes('question')) {
      return 'QUESTION';
    }

    if (
      oneRow.subject_id?.trim().length === 0 &&
      oneRow.type?.trim().length === 0 &&
      Object.keys(this.visitIntl(oneRow)).length > 0
    ) {
      return 'INFO';
    }

    if (oneRow.type?.trim().toLowerCase().includes('true') ||
      oneRow.type?.trim().toLowerCase().includes('false')) {
      return 'ANSWER';
    }

    return undefined;
  }

  visitIntl(oneRow: Record<string, string>): Record<LocaleCode, TranslatedText> {
    return Object.keys(oneRow)
      .filter((_value, index) => index > 1)
      .reduce((collector, twoLetterLocaleCode) => {
        const translation = oneRow[twoLetterLocaleCode];
        if (translation) {
          collector[twoLetterLocaleCode] = translation;
        }
        return collector;
      }, {});
  }

  visitSubject(oneRow: Record<string, string>): RowSubject {
    const { subject_id } = oneRow;
    const title = this.visitIntl(oneRow);

    const result: RowSubject = {
      rowType: 'SUBJECT',
      rowNumber: this._index,
      id: subject_id.trim(),
      title,
      questions: []
    };
    this._lastSubject = result;
    this._questionIndex = 1;
    return result;
  }

  visitQuestion(oneRow: Record<string, string>): RowQuestion {    
    const question = this.visitIntl(oneRow);
    const result: RowQuestion = {
      rowType: 'QUESTION',
      rowNumber: this._index,
      subjectId: this._lastSubject.id,
      id: `${this._lastSubject.id}-Q${this._questionIndex}`,
      question,
      answers: [],
      info: []
    };

    this._lastSubject.questions.push(result);
    this._lastQuestion = result;
    this._questionIndex++;
    this._answerIndex = 1;
    this._infoIndex = 1;
    return result;
  }

  visitAnswer(oneRow: Record<string, string>): RowAnswer {
    const correct = oneRow.type.toLowerCase().includes('true');
    const answer = this.visitIntl(oneRow);

    const result: RowAnswer = {
      rowType: 'ANSWER',
      rowNumber: this._index,
      subjectId: this._lastQuestion.subjectId,
      questionId: this._lastQuestion.id,
      id: `${this._lastQuestion.id}-A${this._answerIndex}`,
      correct,
      answer
    }

    this._lastQuestion.answers.push(result);
    this._answerIndex++;
    return result;
  }

  visitInfo(oneRow: Record<string, string>): RowInfo {
    const info = this.visitIntl(oneRow);
    const result: RowInfo = {
      rowType: 'INFO',
      rowNumber: this._index,
      subjectId: this._lastQuestion.subjectId,
      questionId: this._lastQuestion.id,
      id: `${this._lastQuestion.id}-I${this._infoIndex}`,
      info
    }
    this._lastQuestion.info.push(result);
    this._infoIndex++;
    return result;
  }
}


export type IntlFile = {
  fileName: string;
  content: string;
}


export function parseCsv(path: string): Promise<IntlFile[]> {


  const csvRead = new CsvReadVisitor();
  const promise = new Promise<IntlFile[]>((resolve, reject) => {
    createReadStream(path).pipe(csv())
      .on('data', (data) => {
        csvRead.visitAnyRow(data);
      })
      .on('error', (err) => {
        reject(err);
      })
      .on('end', () => {
        resolve(csvRead.close());
      })
  })




  return promise;
}
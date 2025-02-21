import csv from 'csv-parser';
import { createReadStream } from 'node:fs'


type RowType = 'SUBJECT' | 'QUESTION' | 'ANSWER' | 'INFO';

type LocaleCode = string;
type TranslatedText = string;

interface AnyRow {
  rowNumber: number;
  rowType: RowType;
  subjectId: string;
}

interface RowSubject extends AnyRow {
  rowType: 'SUBJECT';
  title: Record<LocaleCode, TranslatedText>;
}

interface RowQuestion extends AnyRow {
  rowType: 'QUESTION';
  question: Record<LocaleCode, TranslatedText>;
}

interface RowAnswer extends AnyRow {
  rowType: 'ANSWER';
  correct: boolean;
  answer: Record<LocaleCode, TranslatedText>;
}

interface RowInfo extends AnyRow {
  rowType: 'INFO';
  info: Record<LocaleCode, TranslatedText>;
}


class CsvReadVisitor {

  private _index = 1;
  private _lastSubject: RowSubject = {} as any;
  private _lastQuestion: RowQuestion = {} as any;


  constructor() {
  }

  visitAnyRow(oneRow: Record<string, string>) {
    this._index++;

    const rowType: RowType | undefined = this.visitRowType(oneRow);
    switch (rowType) {
      case undefined: return;
      case 'SUBJECT': return this.visitSubject(oneRow);
      case 'QUESTION': return this.visitQuestion(oneRow);
      case 'ANSWER': return this.visitAnswer(oneRow);
      case 'INFO': return this.visitInfo(oneRow);
    }
  }

  visitRowType(oneRow: Record<string, string>): RowType | undefined {
    if (oneRow.subject_id.trim().length === 3) {
      return 'SUBJECT';
    }

    if (oneRow.type?.trim().includes('question')) {
      return 'QUESTION';
    }

    if (oneRow.type?.trim().includes('info')) {
      return 'INFO';
    }

    if (oneRow.type?.trim().includes('answer')) {
      return 'ANSWER';
    }

    return undefined;
  }

  visitSubject(oneRow: Record<string, string>): RowSubject {
    const { subject_id } = oneRow;

    const title = Object.keys(oneRow)
      .filter((_value, index) => index > 1)
      .reduce((collector, twoLetterLocaleCode) => {
        const translation = oneRow[twoLetterLocaleCode];
        collector[twoLetterLocaleCode] = translation;
        return collector;
      }, {});

    const result: RowSubject = {
      rowType: 'SUBJECT',
      rowNumber: this._index,
      subjectId: subject_id.trim(),
      title
    };
    this._lastSubject = result;
    return result;
  }

  visitQuestion(oneRow: Record<string, string>): RowQuestion {

    const question = Object.keys(oneRow)
      .filter((_value, index) => index > 1)
      .reduce((collector, twoLetterLocaleCode) => {
        const translation = oneRow[twoLetterLocaleCode];
        collector[twoLetterLocaleCode] = translation;
        return collector;
      }, {})


    return {
      rowType: 'QUESTION',
      rowNumber: this._index,
      subjectId: this._lastSubject.subjectId,
      question
    }
  }

  visitAnswer(oneRow: Record<string, string>): RowAnswer {

    const correct = oneRow.type.includes('true'); 

    const answer = Object.keys(oneRow)
      .filter((_value, index) => index > 1)
      .reduce((collector, twoLetterLocaleCode) => {
        const translation = oneRow[twoLetterLocaleCode];
        collector[twoLetterLocaleCode] = translation;
        return collector;
      }, {})

    return {
      rowType: 'ANSWER',
      rowNumber: this._index,
      subjectId: this._lastSubject.subjectId,
      correct,
      answer,
    }
  }

  visitInfo(oneRow: Record<string, string>): RowInfo {

    const info = Object.keys(oneRow)
      .filter((_value, index) => index > 1)
      .reduce((collector, twoLetterLanguageCode) => {
        const translation = oneRow[twoLetterLanguageCode];
        collector[twoLetterLanguageCode] = translation;
        return collector;
      }, {});


    return {
      rowType: 'INFO',
      rowNumber: this._index,
      subjectId: this._lastSubject.subjectId,
      info
    };
  }

}


export type IntlFile = {
  fileName: string;
  content: string;
}

export function parseCsv(path: string): Promise<IntlFile[]> {
  const visitor = new CsvReadVisitor();


  const promise = new Promise<IntlFile[]>((resolve, reject) => {
    createReadStream(path).pipe(csv())
      .on('data', (data) => {
        const visited = visitor.visitAnyRow(data);
        console.log('Row', visited);

      })
      .on('error', (err) => {
        reject(err);
      })
      .on('end', () => {
        console.log("VISITOR END")
      })
  })




  return promise;
}
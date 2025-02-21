
import { ExamApi } from '../src/exam-context';
import { defs } from '../src/exam-subjects'

/*

class CsvGeneratorVisitor {
  private _lines: string[][] = [['subject_id','type','ee','en']];
  constructor() {
  }

  visitSubject(oneRow: ExamApi.ErauSubject) {
    const content: string[] = [
      oneRow.id, '', this.visitLocaleContent(oneRow.title), ''
    ];
    this._lines.push(content);
    oneRow.questions.forEach(q => this.visitQuestion(q))
    this.visitEmptyLine();
  }


  visitQuestion(oneRow: ExamApi.ErauQuestion) {
    const content: string[] = [
      '', 'question', oneRow.text, oneRow.enText ?? ''
    ];
    this._lines.push(content);
    
    const info: string[] = [
      '', '', oneRow.info, ''
    ];
    this._lines.push(info);
    oneRow.answers.forEach(q => this.visitAnswer(q))
    this.visitEmptyLine();
  }

  visitAnswer(oneRow: ExamApi.ErauAnswer) {
    const answer: string[] = [
      '', oneRow.correct + '', oneRow.text, ''
    ];
    this._lines.push(answer);
  }

  visitEmptyLine() {
    this._lines.push(['', '', '', '']);
  }

  visitLocaleContent(value: string | undefined): string {
    if(!value) {
      return ''
    }
    if (value.replace(/ /g, '').match(/[\s,"]/)) {
      return '"' + value.replace(/"/g, '""') + '"';
    }
    return value;
  }

  close(): string {
    return this._lines.map(values => values.map(v => this.visitLocaleContent(v)).join(',')).join('\r\n');
  }
}


export type IntlFile = {
  fileName: string;
  content: string;
}


export function generateCsv() {
  const visitor = new CsvGeneratorVisitor();



  defs.forEach(def => visitor.visitSubject(def));
  console.log(visitor.close());


  return;
}
  */
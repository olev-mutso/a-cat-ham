import { ExamApi } from '../exam-context';

class IdGen {
  private _source: ExamApi.ErauSubject[];
  private _running_seq = 0;

  constructor(source: ExamApi.ErauSubject[]) {
    this._source = source;
  }
  accept(): ExamApi.ErauSubject[] {
    const source = this._source
    return source.map(e => this.visitSubject(e));
  }
  private visitSubject(def: ExamApi.ErauSubject): ExamApi.ErauSubject {
    const subject: ExamApi.ErauSubject = { ...def };
    subject.tk = this.nextId();
    subject.questions = def.questions.map(q => this.visitQuestion(q));
    return Object.freeze(subject);
  }
  private visitQuestion(def: ExamApi.ErauQuestion): ExamApi.ErauQuestion {
    const question: ExamApi.ErauQuestion = { ...def };
    question.tk = this.nextId();
    question.answers = def.answers.map(q => this.visitAnswer(q));
    return Object.freeze(question);
  }
  private visitAnswer(def: ExamApi.ErauAnswer): ExamApi.ErauAnswer {
    const answer: ExamApi.ErauAnswer = { ...def };
    answer.tk = this.nextId();
    return Object.freeze(answer);
  }
  private nextId() {
    return this._running_seq++ + '';
  }
}

export const withTk = (subjects: ExamApi.ErauSubject[]) => {
  return new IdGen(subjects).accept();
}
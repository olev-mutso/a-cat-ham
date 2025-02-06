import { ExamApi } from '../exam-context';

import { M1A } from './subject.M1A';
import { M2A } from './subject.M2A';
import { M3A } from './subject.M3A';
import { M4A } from './subject.M4A';
import { M5A } from './subject.M5A';
import { M6A } from './subject.M6A';
import { M7A } from './subject.M7A';

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

export const defs: ExamApi.ErauSubject[] = new IdGen([
  M1A, M2A, M3A, M4A, M5A, M6A, M7A
]).accept();



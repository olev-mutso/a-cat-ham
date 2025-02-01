import { ExamApi } from './exam-types';


class QuestionnaireReducer {
  private _source: ExamApi.ErauSubject[];
  private _subjects: Record<string, ExamApi.Subject> = {};
  private _questions: Record<string, ExamApi.Question> = {};
  private _answers: Record<string, ExamApi.Answer> = {};
  private _selectedAnswers: string[];
  private _running_seq = 0;

  constructor(source: ExamApi.ErauSubject[], selectedAnswers: string[]) {
    this._source = source;
    this._selectedAnswers = selectedAnswers;
  }
  accept(): ExamApi.Questionnaire {
    this._source.forEach(view => this.visitDef(view))
    return {
      subjects: this._subjects,
      questions: this._questions,
      answers: this._answers
    };
  }
  private visitDef(def: ExamApi.ErauSubject) {
    const subjectId = this.nextId();
    const subject: ExamApi.Subject = {
      tk: subjectId,
      id: def.id,
      title: def.title,
      questions: def.questions.map(q => this.visitQuestion(subjectId, q)),
    };

    this._subjects[subjectId] = subject;
  }
  private visitQuestion(subjectId: string, src: ExamApi.ErauQuestion): ExamApi.Question {
    const questionId = this.nextId();
    const answers: ExamApi.Answer[] = src.answers.map(a => this.visitAnswer(subjectId, questionId, a));
    const [correctAnswer] = answers.filter(e => e.correct).map(({tk}) => tk);
    
    const isAnsweredCorrectly = this._selectedAnswers.includes(correctAnswer);
    const isAnswered = answers.filter(({isAnswered}) => isAnswered).length > 0;

    const question: ExamApi.Question = {
      tk: questionId,
      id: src.id,
      text: src.text,
      info: src.info,
      subjectId,
      answers,
      isAnsweredCorrectly,
      correctAnswer: correctAnswer,
      userAnswer: undefined,
      isAnswered: isAnswered,
    };
    this._questions[questionId] = question;
    return question;
  }
  private visitAnswer(subjectId: string, questionId: string, src: ExamApi.ErauAnswer): ExamApi.Answer {
    const tk = this.nextId();
    const isAnswered = this._selectedAnswers.includes(tk);
    
    const answer: ExamApi.Answer = {
      questionId, 
      subjectId,
      correct: src.correct,
      text: src.text,
      tk,
      isAnswered
    };
    this._answers[tk] = answer;
    return answer;
  }
  private nextId() {
    return this._running_seq++ +'';
  }
}


export class ExamStateImpl implements ExamApi.ExamState {
  private _source: ExamApi.ErauSubject[];
  private _questionnaire: ExamApi.Questionnaire;
  private _selectedAnswers: string[];

  constructor(props: {
    source: ExamApi.ErauSubject[],
    selectedAnswers?: string[]
  }) {
    this._source = props.source;
    this._selectedAnswers = props.selectedAnswers ?? [];
    this._questionnaire = new QuestionnaireReducer(props.source, this._selectedAnswers).accept();    
  }
  selectAnswer(answerTk: string): ExamApi.ExamState {
    const source = this._source;

    const selectedAnswer = this._questionnaire.answers[answerTk];
    const selectedQuestion = this._questionnaire.questions[selectedAnswer.questionId];
    const selectedQuestionAnswers = selectedQuestion.answers.map(({tk}) => tk);
    const selectedAnswers = this._selectedAnswers.filter(tk => !selectedQuestionAnswers.includes(tk));    
    selectedAnswers.push(answerTk);

    return new ExamStateImpl({ source, selectedAnswers });
  }

  get source() { return this._source }
  get questionnaire() { return this._questionnaire }
}
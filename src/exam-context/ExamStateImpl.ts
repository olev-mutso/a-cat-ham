import { ExamApi } from './exam-types';
import { QuestionnaireReducer } from './QuestionnaireReducer';
import { Shuffle } from './Shuffle';


export class ExamStateImpl implements ExamApi.ExamState {
  private _source: ExamApi.ErauSubject[];
  private _questionnaire: ExamApi.Questionnaire;
  private _selectedAnswers: string[];

  constructor(props: {
    source: ExamApi.ErauSubject[],
    selectedAnswers?: { values: string[], questionnaire: ExamApi.Questionnaire },
    nextNQuestions?: number
  }) {
    this._source = props.source;    
    if(props.selectedAnswers) {
      this._selectedAnswers = [...props.selectedAnswers.values];
      const subjects = Object.values(props.selectedAnswers.questionnaire.subjects);
      this._questionnaire = new QuestionnaireReducer(subjects, this._selectedAnswers).accept(); 
    } else {
      this._selectedAnswers = [];
      const nextQuesions = props.nextNQuestions ? new Shuffle(props.source, props.nextNQuestions).accept() : props.source;
      this._questionnaire = new QuestionnaireReducer(nextQuesions, this._selectedAnswers).accept();    
    }
  }
  selectAnswer(answerTk: string): ExamApi.ExamState {
    const source = this._source;
    const questionnaire = this._questionnaire;
    const selectedAnswer = questionnaire.answers[answerTk];
    const selectedQuestion = questionnaire.questions[selectedAnswer.questionId];
    if(selectedQuestion.isAnswered) {
      // block corrections
      return this;
    }

    const selectedQuestionAnswers = selectedQuestion.answers.map(({tk}) => tk);
    const values = this._selectedAnswers.filter(tk => !selectedQuestionAnswers.includes(tk));    
    values.push(answerTk);
    return new ExamStateImpl({ source, selectedAnswers: { values, questionnaire } });
  }

  suffle(nextNQuestions: number): ExamApi.ExamState {
    const source = this._source;
    return new ExamStateImpl({ source, nextNQuestions });
  }

  reset(): ExamApi.ExamState {
    const source = this._source;
    const questionnaire = this._questionnaire;
    return new ExamStateImpl({ source, selectedAnswers: { values: [], questionnaire }  });
  }

  all(): ExamApi.ExamState {
    const source = this._source;
    return new ExamStateImpl({ source });
  }

  get source() { return this._source }
  get questionnaire() { return this._questionnaire }
  get stats() {
    const total: number = Object.values(this._questionnaire.questions).length;
    const correct: number = Object.values(this._questionnaire.answers)
      .filter(({correct, isAnswered}) => isAnswered && correct)
      .length;
    const perc: string = correct === 0 ? '0' : (100 / total * correct).toFixed(0);
    return { perc, total, correct }
  }
}
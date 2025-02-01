import * as ctx from "./ExamContext";
import { ExamStateImpl } from "./ExamStateImpl";


export declare namespace ExamApi {
  
  export interface ErauSubject {
    id: string;
    title: string;
    questions: ErauQuestion[]
  }
  
  export interface ErauQuestion {
    id: string; 
    text: string;
    info: string;
    answers: ErauAnswer[];
  }
  export interface ErauAnswer {
    text: string; 
    correct: boolean
  }


  export interface Subject {
    tk: string;
    id: string;
    title: string;
    questions: Question[]
  }
  export interface Question {
    tk: string;
    id: string;
    subjectId: string;
    text: string;
    info: string;
    answers: Answer[];
    correctAnswer: string | undefined;
    userAnswer: string | undefined;
    isAnsweredCorrectly: boolean | undefined;
    isAnswered: boolean;
  }
  export interface Answer {
    tk: string;
    questionId: string;
    subjectId: string;
    text: string;
    correct: boolean;
    isAnswered: boolean;
  }

  export interface Questionnaire {
    subjects: Record<string, Subject>; 
    questions: Record<string, Question>;
    answers: Record<string, Answer>;
  }

  export interface ExamState {
    questionnaire: Questionnaire;
    selectAnswer(answerTk: string): ExamState;
  }

  export interface ExamContextType {
    value: ExamState;
    selectAnswer(answerTk: string): void;
  }
}

export namespace ExamApi {
  export const ExamProvider = ctx.ExamProvider;
  export const useExam = ctx.useExam;
  export const getInstance = (source: ErauSubject[]): ExamState => new ExamStateImpl({ source });
}
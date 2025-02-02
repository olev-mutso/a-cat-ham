import React from 'react';
import { ExamApi } from './exam-types';

export const ExamContext = React.createContext<ExamApi.ExamContextType>({} as any);

export const ExamProvider: React.FC<{ children: React.ReactNode, defs: ExamApi.ErauSubject[] }> = ({ children, defs }) => {
  const [state, setState] = React.useState(ExamApi.getInstance(defs));
  

  const contextValue: ExamApi.ExamContextType = React.useMemo(() => {
    function selectAnswer(answerTk: string) {
      setState(prev => prev.selectAnswer(answerTk));
    }
    function shuffle(nextNQuestions: number) {
      setState(prev => prev.suffle(nextNQuestions));
    }
    function reset() {
      setState(prev => prev.reset());
    }
    function all() {
      setState(prev => prev.all());
    }
    return { value: state, selectAnswer, shuffle, reset, all };
  }, [state]);
  return (<ExamContext.Provider value={contextValue}>{children}</ExamContext.Provider>);
}

export function useExam() {
  const result: ExamApi.ExamContextType = React.useContext(ExamContext);
  return result;
}
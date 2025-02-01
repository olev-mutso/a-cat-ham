import React from 'react';
import { ExamApi } from './exam-types';

export const ExamContext = React.createContext<ExamApi.ExamContextType>({} as any);

export const ExamProvider: React.FC<{ children: React.ReactNode, defs: ExamApi.ErauSubject[] }> = (props) => {
  const [state, setState] = React.useState(ExamApi.getInstance(props.defs));
  const selectAnswer: (answerTk: string) => void = React.useCallback((answer) => (
    setState(prev => prev.selectAnswer(answer))
  ), [state]);


  const contextValue: ExamApi.ExamContextType = React.useMemo(() => ({ value: state, selectAnswer }),
    [state, selectAnswer]);
  return (<ExamContext.Provider value={contextValue}>{props.children}</ExamContext.Provider>);
}

export function useExam() {
  const result: ExamApi.ExamContextType = React.useContext(ExamContext);
  return result;
}
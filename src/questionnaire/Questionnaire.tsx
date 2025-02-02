import React from 'react';
import { Container } from '@mui/material';
import { Subject } from '../subject';
import { useExam } from '../exam-context';




export const Questionnaire: React.FC<{}> = ({ }) => {
  const { value } = useExam();
  const subjects = Object.values(value.questionnaire.subjects);
  return (
    <Container className='questionnaire'>
      {subjects.map(s => (<Subject key={s.tk} subject={s} />))}
    </Container>
  );
}
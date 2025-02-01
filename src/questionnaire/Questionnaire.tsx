import React from 'react';
import { Box, Divider } from '@mui/material';
import { Subject } from '../subject';
import { Question } from '../question';
import { useExam } from '../exam-context';




export const Questionnaire: React.FC<{}> = ({ }) => {
  const { value } = useExam();
  const subjects = Object.values(value.questionnaire.subjects);
  return (
    <Box display='flex' alignItems='center' flexDirection='column'>
      {subjects.map(s => (
        <div key={s.tk}>
          <Subject key={s.tk} subject={s} />
          <Divider sx={{border: '2px solid', my: 2}}/>
          {s.questions.map(q => <Question key={q.id} question={q}/>)}
        </div>))}
    </Box>
  );
}
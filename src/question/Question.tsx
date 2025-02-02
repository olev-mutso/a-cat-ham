import { Typography, List, ListSubheader, ListItemButton, ListItemText, ListItemIcon, Paper, useTheme } from '@mui/material';
import { useExam, ExamApi } from '../exam-context';


function getSuccess(answer: ExamApi.Answer): string | undefined {
  if(!answer.isQuestionAnswered) {
    return;
  }
  
  if(answer.correct) {
    return 'success';
  }
}

function getError(answer: ExamApi.Answer): string | undefined {
  if(!answer.isQuestionAnswered || answer.isQuestionAnsweredCorrectly) {
    return;
  }
  if(!answer.correct) {
    return 'error';
  }
}

const Answer: React.FC<{ answer: ExamApi.Answer, index: number }> = ({ answer, index }) => {
  const { selectAnswer } = useExam();
  const success = getSuccess(answer);
  const fail = getError(answer);
  
  return (
    <ListItemButton key={answer.tk} onClick={() => selectAnswer(answer.tk)} className={success ?? fail}>
      <ListItemIcon>{index+1}.</ListItemIcon>
      <ListItemText primary={answer.text} />
    </ListItemButton>
  );
}

export const Question: React.FC<{ question: ExamApi.Question }> = ({ question }) => {
  const theme = useTheme();
  
  return (
    <Paper className='question'>
      <List component='nav' subheader={
        <ListSubheader>
          <Typography>{question.text}</Typography>
        </ListSubheader>
      }>
      {question.answers.map((answer, index) => (<Answer key={answer.tk} index={index} answer={answer}/>))}
      </List>
    </Paper>
  );
}
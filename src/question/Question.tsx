import { Typography, List, ListSubheader, ListItemButton, ListItemText, ListItemIcon, Paper, useTheme } from '@mui/material';
import { useExam, ExamApi } from '../exam-context';



const Answer: React.FC<{ answer: ExamApi.Answer, index: number }> = ({ answer, index }) => {
  const theme = useTheme();
  const { palette } = theme;
  const { value, selectAnswer } = useExam();
  
  const success = answer.correct && answer.isAnswered ? 'success' : undefined;
  const fail = !answer.correct && answer.isAnswered ? 'error' : undefined;
  
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
    <Paper>
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
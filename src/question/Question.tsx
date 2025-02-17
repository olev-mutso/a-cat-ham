import { Typography, List, ListSubheader, ListItemButton, ListItemText, ListItemIcon, Paper, Box } from '@mui/material';
import { useExam, ExamApi } from '../exam-context';
import { QuestionPopover } from './QuestionPopover';

function getSuccess(answer: ExamApi.Answer): string | undefined {
  if (!answer.isQuestionAnswered) {
    return;
  }

  if (answer.correct) {
    return 'success';
  }
}

function getError(answer: ExamApi.Answer): string | undefined {
  if (!answer.isQuestionAnswered || answer.isQuestionAnsweredCorrectly) {
    return;
  }
  if (!answer.correct) {
    return 'error';
  }
}

const Answer: React.FC<{ answer: ExamApi.Answer, index: number }> = ({ answer, index }) => {
  const { selectAnswer } = useExam();
  const success = getSuccess(answer);
  const fail = getError(answer);

  return (
    <ListItemButton key={answer.tk} onClick={() => selectAnswer(answer.tk)} className={success ?? fail} sx={{ userSelect: 'text' }}>
      <ListItemIcon>{index + 1}.</ListItemIcon>
      <ListItemText primary={answer.text} />
    </ListItemButton>
  );
}

export const Question: React.FC<{ question: ExamApi.Question }> = ({ question }) => {

  return (
    <Paper className='question'>
      <List component='nav' subheader={
        <ListSubheader>
          <Box display='flex' alignItems='center'>
            <Typography>{question.text}</Typography>
            <Box flexGrow={1} />
            {question.enText && <QuestionPopover text={question.enText} />}
          </Box>
        </ListSubheader>
      }>
        {question.answers.map((answer, index) => (<Answer key={answer.tk} index={index} answer={answer} />))}
      </List>
    </Paper>
  );
}
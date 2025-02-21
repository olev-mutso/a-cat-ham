import { Typography, Divider, Container } from '@mui/material';
import { ExamApi } from '../exam-context';
import { Question } from '../question';
import { useLocaleCode } from '../locale';

export const Subject: React.FC<{ subject: ExamApi.Subject }> = ({ subject }) => {
  const locale = useLocaleCode();
  return (
    <Container className='subject' maxWidth='md'>
      <Typography>{subject.title[locale]}</Typography>
      <Divider />
      {subject.questions.map(q => <Question key={q.id} question={q}/>)}
    </Container>
  );
}
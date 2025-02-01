import { Typography } from '@mui/material';

import { useExam, ExamApi } from '../exam-context';



export const Subject: React.FC<{ subject: ExamApi.Subject }> = ({ subject }) => {
  const { value } = useExam();

  return (
    <Typography variant='h5'>
      {subject.title}
    </Typography>
  );
}
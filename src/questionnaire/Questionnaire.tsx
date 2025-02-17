import React from 'react';
import { Container, Paper, Typography, ButtonGroup, Button, Box } from '@mui/material';
import { Subject } from '../subject';
import { useExam } from '../exam-context';
import Sticky from 'react-sticky-el';
import { FormattedMessage } from 'react-intl';



export const Questionnaire: React.FC<{}> = ({ }) => {
  const { value, shuffle, reset, all } = useExam();
  const subjects = Object.values(value.questionnaire.subjects);
  const { correct, perc, total } = value.stats;

  const topRef = React.useRef<HTMLDivElement>(null);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Container maxWidth='md' className='questionnaire-header'>
        <div ref={topRef} />
        <ButtonGroup variant='contained' fullWidth>
          <Button onClick={() => all()}><FormattedMessage id='questionnaire-header.all'/></Button>
          <Button onClick={() => reset()}><FormattedMessage id='questionnaire-header.reset'/></Button>
          <Button onClick={() => shuffle(3)}><FormattedMessage id='questionnaire-header.shuffle'/></Button>
          <Button onClick={() => shuffle(25)}><FormattedMessage id='questionnaire-header.shuffle.big' /></Button>
        </ButtonGroup>
      </Container>

      <Container className='questionnaire'>
        {subjects.map(s => (<Subject key={s.tk} subject={s} />))}
        <Box display='flex' justifyContent='center'>
          <Button className='scroll-top-button' variant='contained' onClick={scrollToTop}><FormattedMessage id='button.scroll-to-top' /></Button>
        </Box>
      </Container>
      <Sticky mode='bottom' boundaryElement={''}>
        <Paper className='questionnaire-results'>
          <Container className='questionnaire-results' maxWidth='md'>
            <Typography><FormattedMessage id='questionnaire-results.title' values={{ correct, perc, total }}/></Typography>
          </Container>
        </Paper>
      </Sticky>
    </>
  );
}
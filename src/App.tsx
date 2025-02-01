import React from 'react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { IntlProvider } from 'react-intl';
import { intlMessages } from './locale';

import { ThemeProvider, CssBaseline } from '@mui/material';
import { darkTheme } from './theme';
import { ExamProvider } from './exam-context';
import { defs } from './exam-subjects';
import { Questionnaire } from './questionnaire';

  
export const App: React.FC<{}> = ({ }) => {
  const queryClient = new QueryClient()
  const locale = 'en';
  const messages = intlMessages[locale];

  return (
    <QueryClientProvider client={queryClient}>
      <IntlProvider locale={'en'} messages={messages}>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <ExamProvider defs={defs}>
            <main>
              <Questionnaire />
            </main>
          </ExamProvider>
        </ThemeProvider>
      </IntlProvider>
    </QueryClientProvider>);
}




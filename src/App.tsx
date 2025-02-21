import React from 'react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { IntlProvider, useIntl } from 'react-intl';
import { getIntlMessages } from './locale';

import { ThemeProvider, CssBaseline } from '@mui/material';
import { darkTheme } from './theme';
import { ExamProvider } from './exam-context';
import { defs } from './intl';
import { Questionnaire } from './questionnaire';

  
export const App: React.FC<{}> = ({ }) => {
  const queryClient = new QueryClient()
  const [locale, setLocale] = React.useState<string>('ee');
  const messages = getIntlMessages(locale);

  return (
    <QueryClientProvider client={queryClient}>
      <IntlProvider locale={locale} messages={messages}>
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




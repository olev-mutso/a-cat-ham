import { useIntl } from "react-intl";

const intlMessages = {
  'en': {
    'questionnaire-results.title': 'Correctly answered: {correct}/{total} ({perc}%)',
    'questionnaire-header.shuffle': 'Shuffle (3)',
    'questionnaire-header.shuffle.big': 'Shuffle (25)',
    'questionnaire-header.all': 'All questions',
    'questionnaire-header.reset': 'Reset current questions',

    'questionnaire-enText.label': 'EN',
    'button.scroll-to-top': 'Scroll to top'
  },
  'ee': {
    'questionnaire-results.title': 'Correctly answered: {correct}/{total} ({perc}%)',
    'questionnaire-header.shuffle': 'Shuffle (3)',
    'questionnaire-header.shuffle.big': 'Shuffle (25)',
    'questionnaire-header.all': 'All questions',
    'questionnaire-header.reset': 'Reset current questions',

    'questionnaire-enText.label': 'EN',
    'button.scroll-to-top': 'Scroll to top'
  }
};


export const getIntlMessages = (code: string): Record<string, string> => {
  // @ts-ignore
  const selected = intlMessages[code];
  return selected ?? intlMessages.en;
}

export const useLocaleCode = () => {
  const intl = useIntl();

  return intl.locale;
}
import i18n from 'i18next';
import { reactI18nextModule } from 'react-i18next';

import languageDetector from './languageDetector';
import en from './locales/en';
import es from './locales/es';

const translations = {
  en,
  es
};

i18n
  .use(languageDetector)
  .use(reactI18nextModule)
  .init({
    debug: true,
    fallbackLng: 'en',
    resources: translations,
    // have a common namespace used around the full app
    ns: ['common'],
    defaultNS: 'common',
    react: {
      wait: true
    }
  });

/**
 * The library is instantiated as soon as this file is imported.
 * However that doesn't look nice and the linter complains.
 * A custom solution is to at least return a fake method and run it.
 */
const i18nWrapped = {
  start: () => i18n
};

export default i18nWrapped;

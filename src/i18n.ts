import { createI18n } from 'vue-i18n';
import zh from './locale/zh-TW';
import en from './locale/en';

const i18n = createI18n({
  legacy: false,
  locale: 'zh-TW',
  fallbackLocale: 'en',
  messages: {
    'zh-TW': zh,
    en,
  },
});

export default i18n;

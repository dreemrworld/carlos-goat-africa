import { getRequestConfig } from 'next-intl/server';

import en from '../messages/en.json';
import pt from '../messages/pt.json';

const messages = {
  pt,
  en,
};

export default getRequestConfig(({ locale }) => ({
  locale: locale || 'pt',
  messages: messages[(locale || 'pt') as keyof typeof messages],
}));

import { useRouter } from 'next/router';

import en from '../../locales/en.js';

export default function useLocale() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : en;
  return t;
}

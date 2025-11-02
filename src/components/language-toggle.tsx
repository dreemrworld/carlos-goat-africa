'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';

import { Button } from '@/components/button';

export const LanguageToggle = () => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggleLocale = () => {
    const newLocale = locale === 'pt' ? 'en' : 'pt';
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPath);
  };

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleLocale}
      className="bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100 backdrop-blur-sm transition-colors"
      aria-label="toggle language"
    >
      <span className="text-xs font-semibold">
        {locale === 'pt' ? 'PT' : 'EN'}
      </span>
    </Button>
  );
};

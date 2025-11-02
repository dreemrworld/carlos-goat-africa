import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import en from '../../messages/en.json';
import pt from '../../messages/pt.json';

import { siteConfig } from '@/lib/site-config';

const messages = { pt, en };

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  // Fallback metadata in case translations fail
  const defaultTitle = locale === 'pt'
    ? "Portfólio do Carlos Araújo"
    : "Carlos Araújo's Portfolio";

  const defaultDescription = locale === 'pt'
    ? "Fundador da Gestão Otimização e Aceleração Tecnológica (GOAT), especialista em inteligência artificial, ex-Técnico Superior do Tribunal de Contas de Angola."
    : "Founder of Gestão Otimização e Aceleração Tecnológica (GOAT), artificial intelligence specialist, former Senior Technician at the Court of Auditors of Angola.";

  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: defaultTitle,
      template: `%s | ${defaultTitle}`,
    },
    description: defaultDescription,
    keywords: siteConfig.keywords,
    robots: { index: true, follow: true },
    icons: {
      icon: '/favicon/favicon.ico',
      shortcut: '/favicon/favicon-16x16.png',
      apple: '/favicon/apple-touch-icon.png',
    },
    verification: {
      google: siteConfig.googleSiteVerificationId,
    },
    openGraph: {
      title: defaultTitle,
      description: defaultDescription,
      url: siteConfig.url,
      siteName: defaultTitle,
      images: [
        {
          url: `${siteConfig.url}/images/og-image.png`,
          width: 1200,
          height: 630,
          alt: defaultTitle,
        },
      ],
      locale: locale === 'pt' ? 'pt_BR' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: defaultTitle,
      description: defaultDescription,
      images: [`${siteConfig.url}/images/og-image.png`],
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  const localeMessages = messages[locale as keyof typeof messages];

  return (
    <NextIntlClientProvider locale={locale} messages={localeMessages}>
      {children}
    </NextIntlClientProvider>
  );
}

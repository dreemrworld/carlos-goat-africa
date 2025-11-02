import '@/styles/globals.css';

import { PropsWithChildren } from 'react';
import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

import { ActiveSectionProvider } from '@/components/active-section-provider';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/toaster';
import { fonts } from '@/lib/fonts';
import { siteConfig } from '@/lib/site-config';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
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
};

const RootLayout = async ({ children }: PropsWithChildren) => {
  const messages = await getMessages();

  return (
    <html lang="pt" suppressHydrationWarning>
      <body className={cn('min-h-screen font-sans', fonts)}>
        <NextIntlClientProvider messages={messages}>
          <div className="fixed left-0 top-0 z-[-2] size-full bg-white dark:bg-gray-950">
            <div className="absolute size-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_30%,transparent_100%)] dark:bg-[radial-gradient(#374151_1px,transparent_1px)]" />
          </div>
          <ThemeProvider attribute="class">
            <ActiveSectionProvider>
              {children}
              <Toaster position="bottom-left" />
            </ActiveSectionProvider>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;

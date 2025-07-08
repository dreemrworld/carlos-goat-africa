import '@/styles/globals.css';

import { PropsWithChildren } from 'react';
import type { Metadata } from 'next';

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
 // --- ADD THESE OPEN GRAPH AND TWITTER PROPERTIES ---
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url, // Use the URL from your siteConfig
    siteName: siteConfig.title, // Often the same as the main title
    images: [
      {
        url: '/images/og-image.jpg', // Path to your OG image in the public folder
        width: 1200, // Recommended width
        height: 630, // Recommended height
        alt: siteConfig.title, // Alt text for accessibility and SEO
      },
      // You can add more images here if you have variations
    ],
    locale: 'en_US', // Optional: specify locale
    type: 'website', // Most common type for a portfolio site
  },
  twitter: {
    card: 'summary_large_image', // Use 'summary_large_image' for a prominent image
    title: siteConfig.title,
    description: siteConfig.description,
    images: ['/og-image.jpg'], // Path to your OG image
    // creator: '@yourtwitterhandle', // Optional: if you have a Twitter handle
    // site: '@yoursitehandle', // Optional: if your site has a dedicated Twitter handle
  },
  // --- END ADDITION ---
};
const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn('min-h-screen font-sans', fonts)}>
        <ThemeProvider attribute="class">
          <ActiveSectionProvider>
            {children}
            <Toaster position="bottom-left" />
          </ActiveSectionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;

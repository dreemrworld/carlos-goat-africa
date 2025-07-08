import { env } from '@/env.mjs';

export const siteConfig = {
  title: 'Carlos Araújo | Full stack developer',
  description:
    "Hello, I am Carlos Araújo, a technology entrepreneur in Angola. Welcome to my developer profile. Let's connect.",
  keywords: [
    'Carlos Araújo',
    'Full stack developer',
    'Angola',
    'React',
    'Next.js',
    'Web development',
    'Front-end',
    'UI/UX',
    'Responsive design',
    'JavaScript',
    'HTML',
    'CSS',
    'Portfolio',
    'Projects',
    'Website',
    'Web applications',
    'Developer',
    'Code',
    'Programming',
    'Tech enthusiast',
  ],
  url: env.SITE_URL || 'https://dev.goat.africa',
  googleSiteVerificationId: env.GOOGLE_SITE_VERIFICATION_ID || '',
};

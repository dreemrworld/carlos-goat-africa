import { env } from '@/env.mjs';

export const siteConfig = {
  title: 'Carlos Araújo | Full stack developer',
  description:
    "Hello, I'm Carlos Araújo. I am full stack developer from Angola. I enjoy building sites and apps. My focus is React (Next.js).",
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
  url: env.SITE_URL || 'https://example.com',
  googleSiteVerificationId: env.GOOGLE_SITE_VERIFICATION_ID || '',
};

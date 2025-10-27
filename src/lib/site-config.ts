import { env } from '@/env.mjs';

export const siteConfig = {
  title: 'Carlos Araújo | Programador Full Stack',
  description:
    'Olá, sou o Carlos Araújo, um empreendedor tecnológico em Angola. Bem-vindo ao meu perfil de programador. Vamos conectar.',
  keywords: [
    'Carlos Araújo',
    'Programador Full Stack',
    'Angola',
    'React',
    'Next.js',
    'Desenvolvimento Web',
    'Front-end',
    'UI/UX',
    'Design Responsivo',
    'JavaScript',
    'HTML',
    'CSS',
    'Portfólio',
    'Projectos',
    'Website',
    'Aplicações Web',
    'Programador',
    'Código',
    'Programação',
    'Entusiasta da Tecnologia',
  ],
  url: env.SITE_URL || 'https://carlos.goat.africa',
  googleSiteVerificationId: env.GOOGLE_SITE_VERIFICATION_ID || '',
};

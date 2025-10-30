import { env } from '@/env.mjs';

export const siteConfig = {
  title: 'Carlos Araújo | Portfólio',
  description:
    'Fundador da startup angolana Gestão Otimização e Aceleração Tecnológica (GOAT). Disponível para consultoria técnica, transformação digital e desenvolvimento de software.',
  keywords: [
    'Carlos Araújo',
    'Programador ',
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
    'Projetos',
    'Website',
    'Aplicações Web',
    'Consultoria empresarial',
    'Código',
    'Programação',
    'Entusiasta da Tecnologia',
    'Inteligência Artificial',
    'Auditoria Pública',
  ],
  url: env.SITE_URL || 'https://carlos.goat.africa',
  googleSiteVerificationId: env.GOOGLE_SITE_VERIFICATION_ID || '',
};

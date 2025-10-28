import { Icons } from '@/components/icons';

export const links = [
  {
    name: 'Início',
    hash: '#home',
  },
  {
    name: 'Sobre',
    hash: '#about',
  },
  {
    name: 'Experiência',
    hash: '#experience',
  },
  {
    name: 'Projectos',
    hash: '#projects',
  },
  {
    name: 'Contacto',
    hash: '#contacto',
  },
] as const;

export const projectsData = [
  {
    image: 'https://opengraph.githubassets.com/1/dreemrworld/chat.bull.africa',
    title: 'Chat Bull - chat.bull.africa',
    description:
      'Chatbot de IA de ponta desenvolvido com Next.js 15 e AI SDK 5. Implemente globalmente em Cloudflare Workers em segundos. Gratuito, de código aberto e a impulsionar a revolução da IA em África! ',
    technologies: ['Next.js 15', 'AI-SDK 5', 'Código Aberto', 'Chat IA'],
    links: {
      preview: 'https://github.com/dreemrworld/chat.bull.africa',
    },
  },
  {
    image: 'https://opengraph.githubassets.com/1/dreemrworld/nota-bene',
    title: 'Nota Bene – nb.bull.africa',
    description:
      'É uma aplicação web de código aberto e 100 % privada para tomar notas, que podes instalar no teu telemóvel e funcionará como uma aplicação móvel.',
    technologies: ['React', 'Vite', 'TipTap', 'Cloudflare'],
    links: {
      preview: 'https://nb.bull.africa',
    },
  },
  {
    image: 'https://opengraph.githubassets.com/1/dreemrworld/html-wysiwyg',
    title: 'Editor de HTML - html.bull.africa',
    description:
      'O que vê é o que obtém - edite e visualize HTML diretamente no seu navegador. Dê estrela, faça fork e contribua para este repositório de Código Aberto.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Cloudflare'],
    links: {
      preview: 'https://github.com/dreemrworld/html-wysiwyg',
    },
  },
  {
    image: '',
    title: 'Chat GOAT- chat.goat.africa',
    description:
      'Democratizando o acesso aos melhores modelos de IA. Capacitando estudantes, educadores, profissionais de saúde e empreendedores.',
    technologies: ['Next.js', 'AI-SDK', 'Vercel'],
    links: {
      preview: 'https://chat.goat.africa',
    },
  },
  {
    image: '/images/project-4.webp',
    title:
      'Auditoria do Sector Público: ferramentas digitais para aumentar a eficiência e eficácia',
    description:
      'Financiado pela UE/PNUD e publicado em revistas de referência. Apresentado no ECOBATE 2024 e na Blockchain Conf. 2023',
    technologies: ['Blockchain', 'IoT', 'IA'],
    links: {
      preview:
        'https://www.agora-parl.org/sites/default/files/palop-publications/PALOP-TL%202022%20Volume%20II.pdf',
    },
  },
  {
    image: '',
    title: 'Autor ',
    description:
      'Autor de três artigos de opinião com 4600 leitores no Centro de Investigação Economica da Universidade Lusiada de Angola (CINVESTEC)',
    technologies: ['Finanças Públicas', 'Empreendedorismo', 'Banca'],
    links: {
      preview: 'https://www.cinvestec.com/author/carlos-araujo/',
    },
  },
  {
    image: '',
    title: 'Emerging Tech 2035',
    description: '',
    technologies: ['Robotica', 'IA', 'Futurismo'],
    links: {
      preview: '',
    },
  },
  {
    image: '',
    title: 'ECOBATE 2024',
    description: '',
    technologies: ['Blockchain', 'IoT', 'IA'],
    links: {
      preview: '',
    },
  },
  {
    image: '',
    title: 'ISC 2023',
    description: '',
    technologies: ['Blockchain', 'IoT', 'IA'],
    links: {
      preview: '',
    },
  },
  {
    image: '',
    title: 'Infogáfico sobre a História das finanças',
    description: 'De Medici a BTC',
    technologies: ['Blockchain', 'IoT', 'IA'],
    links: {
      preview: '',
    },
  },
  {
    image: '',
    title: 'Ex-Aluno do Mês Março 2024',
    description: 'Anglia Ruskin University',
    technologies: ['Blockchain', 'IoT', 'IA'],
    links: {
      preview: '',
    },
  },
] as const;

export const experiencesData = [
  {
    title: 'Fundador',
    company: 'Gestão Otimização e Aceleração Tecnológica',
    description:
      'GOAT é uma Startup em Angola fundada por Carlos Araújo. Oferecemos expertise em consultoria de contratação pública, elaboração de planos de negócios, e estudos de viabilidade. Também desenvolvemos aplicativos web como goat.africa e bull.africa, com mais de 5mil visitantes por mês. ',
    period: 'Dez 2021 - Presente',
    technologies: ['Consultoria', 'Apps', 'I.A.'],
  },
  {
    title: 'Técnico Superior',
    company: 'Tribunal de Contas de Angola',
    description: `Auditor público na fiscalização preventiva e na fiscalização sucessiva do TCA.  Bolseiro e delegado de turma para o curso em Finanças Públicas co-financiado pela UE e a PNUD (PRO-PALOP). Ajudou introduzir Auditorias de Desempenho (ISSAI 300) em colaboração com a Organização Internacional de Instituições Superiores de Controle (INTOSAI). `,
    period: 'Jan 2020 - Nov 2021',
    technologies: [
      'Auditoria do Sector Público',
      'Finanças Públicas',
      'Blockchain',
    ],
  },
] as const;

export const skillsData = [
  { icon: <Icons.html className="size-12" /> },
  { icon: <Icons.javascript className="size-12" /> },
  { icon: <Icons.tailwind className="size-12" /> },
  { icon: <Icons.react className="size-12" /> },
  { icon: <Icons.nextjs className="size-12" /> },
  { icon: <Icons.github className="size-12" /> },
] as const;

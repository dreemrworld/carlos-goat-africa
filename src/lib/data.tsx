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
    title: 'Otimista sobre IA e África',
    description:
      'Bateria moderna de chatbot de IA equipada com funcionalidades de ponta. Dê estrela, faça fork e partilhe para que mais pessoas o encontrem e poupem tempo.',
    technologies: ['Next.js 15', 'AI-SDK 5', 'Código Aberto', 'Chat IA'],
    links: {
      preview: 'https://github.com/dreemrworld/chat.bull.africa',
    },
  },
  {
    image: 'https://opengraph.githubassets.com/1/dreemrworld/html-wysiwyg',
    title: 'HTML WYSIWYG',
    description:
      'O que vê é o que obtém - edite e visualize HTML diretamente no seu navegador. Dê estrela, faça fork e contribua para este repositório de Código Aberto.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'CF Workers'],
    links: {
      preview: 'https://github.com/dreemrworld/html-wysiwyg',
    },
  },
  {
    image: '/images/project-3.webp',
    title: 'Assistente IA Multimodal',
    description:
      'Democratizando o acesso aos melhores modelos de IA. Capacitando estudantes, educadores, profissionais de saúde e empreendedores.',
    technologies: ['Next.js', 'Vercel', 'Better Auth'],
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
] as const;

export const experiencesData = [
  {
    title: 'Fundador',
    company: 'Gestão Otimização e Aceleração Tecnológica',
    description:
      'Startup de Inteligência Artificial (I.A.) em Angola. Freelancer em contratação pública, elaboração de planos de negócios, e estudos de viabilidade. Também desenvolve aplicativos web como goat.africa e bull.africa, com mais de 5mil visitantes por mês. ',
    period: 'Dez 2021 - Presente',
    technologies: ['Consultoria', 'Apps', 'I.A.'],
  },
  {
    title: 'Técnico Superior',
    company: 'Tribunal de Contas de Angola',
    description: `Candidato para o melhor trabalho de pesquisa sobre Finanças Públicas pelo Tribunal de Contas da Europa. Bolseiro e delegado de turma para o curso em Finanças Públicas co-financiado pela UE e a PNUD (PRO-PALOP). Apresentou em conferências internacionais sobre governação, tecnologia e finanças públicas remotamente de Angola. Ajudou introduzir Auditorias de Desempenho (ISSAI 300) em colaboração com a AFROSAI. `,
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

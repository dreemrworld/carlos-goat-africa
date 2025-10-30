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
    image: '/images/chat-bull.png',
    title: 'Chat Bull - chat.bull.africa',
    description:
      'Falta de ferramentas acessíveis para jovens empreendedores de IA em África. Criei uma aplicação social, gratuita e open source, que qualquer pessoa pode auditar, copiar ou melhorar. Já impactou positivamente milhares de estudantes e empreendedores.',

    technologies: ['Next.js 15', 'AI-SDK 5', 'Código Aberto', 'Chat IA'],
    links: {
      preview: 'https://github.com/dreemrworld/chat.bull.africa',
    },
  },
  {
    image: '/images/nota-bene.png',
    title: 'Nota Bene – nb.bull.africa',
    description:
      'As soluções em nuvem comprometem a privacidade dos meus apontamentos de investigação. Desenvolvi uma app que guarda tudo localmente, no dispositivo do utilizador, sem usar a nuvem. Os dados ficam mais seguros, privados — e o código é aberto.',
    technologies: ['React', 'Vite', 'TipTap', 'Cloudflare'],
    links: {
      preview: 'https://nb.bull.africa',
    },
  },
  {
    image: '/images/editor-html.png',
    title: 'Editor de HTML - html.bull.africa',
    description:
      'Dependia de um editor online cheio de publicidade. Criei a minha própria versão: limpa, funcional e de código abertom, sem anúncios e com total transparência.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Cloudflare'],
    links: {
      preview: 'https://github.com/dreemrworld/html-wysiwyg',
    },
  },
  {
    image: '/images/chat-goat.png',
    title: 'Chat GOAT- chat.goat.africa',
    description:
      'Queria construir um assistente de IA verdadeiramente útil. Criei o Pingo AI: uma aplicação completa, com autenticação e base de dados própria, capaz de responder, raciocinar, traduzir, gerar documentos e programar. É usada por 3 mil pessoas por mês.',
    technologies: ['Next.js', 'AI-SDK', 'Vercel'],
    links: {
      preview: 'https://chat.goat.africa',
    },
  },
  {
    image: '/images/auditoria-publica.png',
    title:
      'Auditoria do Sector Público: ferramentas digitais para aumentar a eficiência e eficácia',
    description:
      'A auditoria pública carece de inovação metodológica. Desenvolvi uma investigação pioneira sobre auditorias de desempenho com tecnologias emergentes. Foi nomeada para o prémio de melhor pesquisa pelo Tribunal de Contas Europeu e orientada pelo ex-presidente da instituição.',
    technologies: ['Blockchain', 'IoT', 'IA'],
    links: {
      preview:
        'https://www.agora-parl.org/sites/default/files/palop-publications/PALOP-TL%202022%20Volume%20II.pdf',
    },
  },
  {
    image: '/images/cinvestec.png',
    title: 'Autor',
    description:
      'Há poucas vozes angolanas em debates técnicos sobre economia. Escrevi três artigos de opinião para o CINVESTEC. Foram lidos por cerca de 4 600 pessoas.',
    technologies: ['Finanças Públicas', 'Empreendedorismo', 'Banca'],
    links: {
      preview: 'https://www.cinvestec.com/author/carlos-araujo/',
    },
  },
  {
    image: '/images/emerging-tech.png',
    title: 'Emerging Tech 2035',
    description:
      'Poucos em África discutem o futuro tecnológico com clareza. Criei um infográfico com a minha visão das tecnologias que serão comuns daqui a 10 anos, e partilhei com todos.',
    technologies: ['Robotica', 'IA', 'Futurismo'],
    links: {
      preview: '',
    },
  },
  {
    image: '/images/ecobate.png',
    title: 'ECOBATE 2024',
    description:
      'Precisamos de mais diálogo entre África e a Europa sobre finanças e tecnologia. Participei como palestrante convidado na European Conference on Banking and the Economy 2024, em Winchester.',
    technologies: ['Blockchain', 'IoT', 'IA'],
    links: {
      preview: '',
    },
  },
  {
    image: '/images/isc-2023.png',
    title: 'ISC 2023',
    description:
      'O potencial do blockchain em governança pública merece mais atenção. Apresentei as minhas ideias na International Scientific Conference on Blockchain em Manchester.',
    technologies: ['Blockchain', 'IoT', 'IA'],
    links: {
      preview: '',
    },
  },
  {
    image: '/images/history-finance.png',
    title: 'History of Finance - Medici to BTC',
    description:
      'Prever crises exige entender os ciclos históricos. Criei um infográfico que mapeia bolhas financeiras ao longo dos séculos — para facilitar previsões mais informadas.',
    technologies: ['História', 'Finanças', 'Bolhas'],
    links: {
      preview: '',
    },
  },
  {
    image: '/images/aru.png',
    title: 'Reconhecimentos da Anglia Ruskin University',
    description:
      'Entre 133 mil alumni, a universidade distingue mensalmente quem se destaca globalmente. Fui nomeado Alumni do Mês de março de 2024 e estou nomeado para Alumni do Ano.',
    technologies: ['Alumni do Mês', 'Anglia Ruskin University', 'Mestrado'],
    links: {
      preview: '',
    },
  },
  {
    image: '/images/currency.png',
    title: 'Currency Converter Pro',
    description:
      'Em Angola, acompanhar as flutuações cambiais é essencial — mas muitas ferramentas são lentas ou pagas. Criei uma app leve e gratuita que mostra mais de 100 moedas em tempo real, com gráficos históricos para análise rápida e informada.',
    technologies: ['Vibe Coding', 'APIs de Câmbio', 'Gráficos Interativos'],
    links: {
      preview: 'https://currency-converter-pro.pages.dev/',
    },
  },
  {
    image: '/images/dictionary.png',
    title: 'Dicionário Inteligente',
    description:
      'Precisava de um dicionário rápido que fosse além das definições. Desenvolvi uma app onde qualquer pessoa pode procurar palavras, ver sinónimos, antónimos e ouvir a pronúncia correta — tudo num só lugar.',
    technologies: ['Vibe Coding', 'Lexicografia', 'Áudio Web'],
    links: {
      preview: 'https://dict-5qo.pages.dev/',
    },
  },
  {
    image: '/images/isc-genero.png',
    title: 'ISC: Guardiãs da Igualdade de Género',
    description:
      'Faltava documentação prática sobre auditoria de género nas Instituições Superiores de Controlo dos PALOP. Elaborei um relatório de investigação adoptado numa reunião internacional entre Angola e outros países lusófonos, promovendo o empoderamento feminino na governança pública.',
    technologies: [
      'Auditoria de Género',
      'Cooperação Internacional',
      'Políticas Públicas',
    ],
    links: {
      preview: 'https://tca-es5.pages.dev/',
    },
  },
] as const;

export const experiencesData = [
  {
    title: 'Fundador',
    company: 'Gestão Otimização e Aceleração Tecnológica',
    description:
      'Startup angolana que combina consultoria em contratação pública com desenvolvimento de aplicações digitais (goat.africa, bull.africa). Mais de 6000 utilizadores mensais.',
    period: 'Dez 2021 - Presente',
    technologies: ['Consultoria', 'Apps', 'I.A.'],
  },
  {
    title: 'Técnico Superior',
    company: 'Tribunal de Contas de Angola',
    description:
      'Auditoria preventiva e sucessiva. Introduzi Auditorias de Desempenho (ISSAI 300) em colaboração com a INTOSAI. Bolseiro e delegado de turma da pós-graduação em Finanças Públicas, PRO-PALOP (UE/PNUD).',
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

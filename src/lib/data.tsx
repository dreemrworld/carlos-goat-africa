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
    name: 'Projetos',
    hash: '#projects',
  },
  {
    name: 'Contacto',
    hash: '#contacto',
  },
] as const;

export const projectsData = [
  {
    image: '/images/auditoria-publica.png',
    title:
      'Auditoria do Sector Público: ferramentas digitais para aumentar a eficiência e eficácia',
    description:
      'A auditoria pública carece de inovação metodológica. Desenvolveu uma investigação pioneira sobre auditorias de desempenho com tecnologias emergentes. Foi nomeada para o prémio de melhor pesquisa pelo Tribunal de Contas Europeu.',
    technologies: ['Blockchain', 'Auditoria', 'IA'],
    links: {
      preview:
        'https://www.agora-parl.org/sites/default/files/palop-publications/PALOP-TL%202022%20Volume%20II.pdf',
    },
  },
  {
    image: '/images/ecobate.png',
    title: 'European Conference on Banking and Economy 2024',
    description:
      'É necessário mais diálogo sobre as fintechs emergentes. Participou como palestrante convidado na ECOBATE 2024, realizada na University of Winchester e organizada pela Association for Research on Banking and the Economy (ARBE) e pelo Centre for Banking, Finance and Sustainable Development (CBFSD) da University of Southampton.',
    technologies: ['Fintech', 'Banca', 'Economia'],
    links: {
      preview: '',
    },
  },
  {
    image: '/images/isc-2023.png',
    title: 'International Scientific Conference on Blockchain 2023',
    description:
      'O potencial do blockchain em governança pública merece mais atenção. Apresentou as suas ideias na International Scientific Conference on Blockchain em Manchester organizado pela British Blockchain Association (BBA).',
    technologies: ['Blockchain', 'Auditoria', 'IA'],
    links: {
      preview: '',
    },
  },
  {
    image: '/images/aru.png',
    title: 'Reconhecimentos da Anglia Ruskin University',
    description:
      'Entre 133 mil alumni, a universidade distingue mensalmente quem se destaca globalmente. Foi nomeado Alumni do Mês de março de 2024 e está nomeado para Alumni do Ano.',
    technologies: ['Alumni do Mês', 'ARU', 'Mestrado'],
    links: {
      preview: '',
    },
  },
  {
    image: '/images/cinvestec.png',
    title: 'Autor',
    description:
      'Há poucas vozes angolanas em debates técnicos sobre economia. Escreveu três artigos de opinião para o CINVESTEC. Foram lidos por cerca de 4 600 pessoas.',
    technologies: ['Finanças Públicas', 'Empreendedorismo', 'Banca'],
    links: {
      preview: 'https://www.cinvestec.com/author/carlos-araujo/',
    },
  },
  {
    image: '/images/emerging-tech.png',
    title: 'Emerging Tech 2035',
    description:
      'Poucos em África discutem o futuro tecnológico com clareza. Criou um infográfico com a sua visão das tecnologias que serão comuns daqui a 10 anos, e partilhou com todos.',
    technologies: ['Robótica', 'IA', 'Futurismo'],
    links: {
      preview: '',
    },
  },
  {
    image: '/images/chat-bull.png',
    title: 'Chat Bull - chat.bull.africa',
    description:
      'Devido à falta de ferramentas acessíveis para startups de IA em África, criou um chatbot moderno, gratuito e de código aberto, com armazenamento local, pesquisa na internet e capacidade de ler respostas em voz alta. Já impactou milhares de pessoas.',

    technologies: ['Next.js', 'IA', 'Cloudflare'],
    links: {
      preview: 'https://github.com/dreemrworld/chat.bull.africa',
    },
  },
  {
    image: '/images/chat-goat.png',
    title: 'Chat GOAT- chat.goat.africa',
    description:
      'Para construir um assistente de IA verdadeiramente útil, criou o Pingo AI: uma aplicação completa, com autenticação e base de dados própria, capaz de responder, raciocinar, traduzir, gerar documentos e programar. É usada por 3 mil pessoas por mês.',
    technologies: ['Next.js', 'IA', 'Vercel'],
    links: {
      preview: 'https://chat.goat.africa',
    },
  },
  {
    image: '/images/nota-bene.png',
    title: 'Nota Bene – nb.bull.africa',
    description:
      'As soluções em nuvem comprometem a privacidade dos seus apontamentos de investigação. Desenvolveu uma app que guarda tudo localmente, no dispositivo do utilizador, sem usar a nuvem. Os dados ficam mais seguros, privados — e o código é aberto.',
    technologies: ['React', 'Vite', 'TipTap', 'Cloudflare'],
    links: {
      preview: 'https://nb.bull.africa',
    },
  },
  {
    image: '/images/editor-html.png',
    title: 'Editor de HTML - html.bull.africa',
    description:
      'Dependia de um editor online cheio de publicidade. Criou a sua própria versão: limpa, funcional e de código aberto, sem anúncios e com total transparência.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Cloudflare'],
    links: {
      preview: 'https://github.com/dreemrworld/html-wysiwyg',
    },
  },
  {
    image: '/images/history-finance.png',
    title: 'History of Finance: from Medici to BTC',
    description:
      'Prever crises exige entender os ciclos históricos. Criou um infográfico que mapeia bolhas financeiras ao longo dos séculos — para facilitar previsões mais informadas.',
    technologies: ['História', 'Finanças', 'Bolhas'],
    links: {
      preview: '',
    },
  },
  {
    image: '/images/currency.png',
    title: 'Conversor de moeda',
    description:
      'Em Angola, acompanhar as flutuações cambiais é essencial mas muitas ferramentas são lentas ou pagas. Criou uma app leve e gratuita que mostra mais de 100 moedas em tempo real, com gráficos históricos para análise rápida e informada.',
    technologies: ['Vibe Coding', 'APIs de Câmbio', 'Gráficos Interativos'],
    links: {
      preview: 'https://currency-converter-pro.pages.dev/',
    },
  },
  {
    image: '/images/dictionary.png',
    title: 'Dicionário Inteligente',
    description:
      'Precisava de um dicionário rápido que fosse além das definições. Desenvolveu uma app onde qualquer pessoa pode procurar palavras, ver sinónimos, antónimos e ouvir a pronúncia correta — tudo num só lugar.',
    technologies: ['Vibe Coding', 'Lexicografia', 'Áudio Web'],
    links: {
      preview: 'https://dict-5qo.pages.dev/',
    },
  },
  {
    image: '/images/isc-genero.png',
    title: 'ISC: Guardiãs da Igualdade de Género',
    description:
      'Faltava documentação prática sobre auditoria de género nas Instituições Superiores de Controlo dos PALOP. Elaborou um relatório de investigação adoptado numa reunião internacional entre Angola e outros países lusófonos, promovendo o empoderamento feminino na governança pública.',
    technologies: [
      'Auditoria de Género',
      'Cooperação Internacional',
      'Políticas Públicas',
    ],
    links: {
      preview: 'https://tca-es5.pages.dev/',
    },
  },
  {
    image: '/images/loja.png',
    title: 'Loja online de tecnologia',
    description:
      'Devido à falta de templates de e‑commerce simples, completos e gratuitos para mercados emergentes, criou uma loja demo funcional com HTML, CSS, JavaScript e API integrada — incluindo página de checkout realista. É um modelo pronto a usar por qualquer empreendedor que queira vender produtos online sem depender de plataformas pagas.',
    technologies: ['HTML', 'CSS', 'Javascript'],
    links: {
      preview: 'https://shopgoat.pages.dev',
    },
  },
  {
    image: '/images/catalogo.png',
    title: 'Catálogo digital - shop.goat.africa',
    description:
      'Gerir um catálogo de produtos em Angola é desafiante sem soluções acessíveis. Desenvolveu um website de catálogo que se atualiza automaticamente a partir de uma folha do Google Sheets. Basta editar a tabela para que o site reflita as mudanças em tempo real, tornando-o ideal para pequenos negócios em contextos de recursos limitados.',
    technologies: ['HTML', 'CSS', 'Javascript'],
    links: {
      preview: 'https://shop.goat.africa',
    },
  },
] as const;

export const experiencesData = [
  {
    title: 'Fundador',
    company: 'Gestão Otimização e Aceleração Tecnológica (GOAT)',
    description:
      'Anteriormente conhecido como Dreemrworld FZCO, Consulting Carlos Araújo (CCA) e Angowebsites, GOAT é uma Startup angolana que combina consultoria com desenvolvimento de aplicações-web populares como goat.africa e bull.africa - 6 mil visitantes novos no mês de Outubro de 2025.',
    period: 'Dez 2021 - Presente',
    technologies: ['Consultoria', 'Aplicações', 'IA'],
  },
  {
    title: 'Técnico Superior',
    company: 'Tribunal de Contas de Angola',
    description:
      'Auditor de contratos públicos, financiamentos externos e de órgãos públicos. Trabalhou na introdução em Angola de auditorias de desempenho em colaboração com a Organização Internacional de Instituições Superiores de Controle (INTOSAI). Bolseiro e delegado de turma da pós-graduação em Finanças Públicas do Programa PALOP-TL co-financiado pela UE/PNUD, destinada aos técnicos e juízes do Tribunal de Contas, Ministérios das Finanças e da Assembleia Nacional.',
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

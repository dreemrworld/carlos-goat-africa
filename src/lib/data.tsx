import { Icons } from '@/components/icons';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const projectsData = [
  {
    image: 'https://opengraph.githubassets.com/1/dreemrworld/chat.bull.africa',
    title: 'Bullish on AI and Africa',
    description:
      'Modern AI chatbot battery packed for you with state of the art features. Star, fork and share so more people can find it and save time.',
    technologies: ['Next.js 15', 'AI-SDK 5', 'Open Source', 'AI Chat'],
    links: {
      preview: 'https://github.com/dreemrworld/chat.bull.africa',
    },
  },
  {
    image: 'https://opengraph.githubassets.com/1/dreemrworld/html-wysiwyg',
    title: 'HTML WYSIWYG',
    description:
      'What You See Is What You Get - edit and preview HTML directly in your browser. Star, fork and contribute to this Open Source repository.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'CF Workers'],
    links: {
      preview: 'https://github.com/dreemrworld/html-wysiwyg',
    },
  },
  {
    image: '/images/project-3.webp',
    title: 'Multimodal AI Assistant',
    description:
      'Democratizing access to the top AI models. Empowering students, educators, health workers & entrepreneurs.',
    technologies: ['Next.js', 'Vercel', 'Better Auth'],
    links: {
      preview: 'https://chat.goat.africa',
    },
  },
  {
    image: '/images/project-4.webp',
    title:
      'Public Sector Auditing: digital tools to increase effiency and effectiveness',
    description:
      'EU/UNDP-funded and published in leading journals. Presented at ECOBATE 2024 & Blockchain Conf. 2023',
    technologies: ['Blockchain', 'IoT', 'AI'],
    links: {
      preview:
        'https://www.agora-parl.org/sites/default/files/palop-publications/PALOP-TL%202022%20Volume%20II.pdf',
    },
  },
] as const;

export const experiencesData = [
  {
    title: 'Technology Entrepreneur',
    company: 'Freelancing, Remote',
    description:
      'Developing the technology and business models to help grow the AI-powered entrepreneurship movement in Africa.',
    period: 'Dec 2021 - Present',
    technologies: ['Cloud', 'MCP', 'AI'],
  },
  {
    title: 'Public Sector Auditor',
    company: 'Court of Auditors of Angola',
    description:
      'International thought leader in digital tools to increase effiency and effectiveness of public sector auditing.',
    period: 'Jan 2020 - Nov 2021',
    technologies: ['Public Sector Auditing', 'Public Finance', 'Blockchain'],
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

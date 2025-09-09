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
    image: '/images/project-3.webp',
    title: 'Multimodal AI Assistant',
    description:
      'Democratizing access to the top AI models. Empowering students, educators, health workers & entrepreneurs.',
    technologies: ['Next.js', 'Cloudflare', 'API'],
    links: {
      preview: 'https://chat.goat.africa',
    },
  },
  {
    image: '/images/project-4.webp',
    title:
      'Public Sector Auditing: digital tools to increase effiency and effectieveness',
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

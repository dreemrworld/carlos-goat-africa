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
    image: '/images/project-2.webp',
    title: 'Currency Converter',
    description:
      'See the live fx rates between +180 countries. Essential tool for anyone working in import/exports.',
    technologies: ['React', 'Vite', 'TailwindCSS', 'API'],
    links: {
      preview: 'https://www.goat.africa/webapps/live-fx-rates',
      github: 'https://www.goat.africa/webapps/live-fx-rates',
      githubApi: 'https://api.github.com/repos/dreemrworld/',
    },
  },
  {
    image: '/images/project-1.webp',
    title: 'Word Explorer',
    description:
      'A fun way to learn new words. See the spelling,definition,synonyms,antonyms,and hear the correct pronounciation.',
    technologies: ['React', 'Vite', 'TailwindCSS', 'API'],
    links: {
      preview: 'https://www.goat.africa/webapps/dictionary',
      github: 'https://www.goat.africa/webapps/dictionary',
      githubApi: 'https://api.github.com/repos/dreemrworld',
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
    technologies: ['Cloudflare', 'Supabase', 'Android OS'],
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

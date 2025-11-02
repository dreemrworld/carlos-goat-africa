'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { Project } from '@/components/project';
import { SectionHeading } from '@/components/section-heading';
import { useSectionInView } from '@/hooks/use-section-in-view';
import { projectsData } from '@/lib/data';

export const Projects = () => {
  const t = useTranslations('projects');
  const { ref } = useSectionInView('Projects');

  const translatedProjects = t.raw('items');

  // Merge translated data with original data (images, links, technologies)
  const projects = translatedProjects.map((translatedProject: any, index: number) => ({
    ...projectsData[index], // Start with original data
    ...translatedProject, // Override with translated data
    technologies: translatedProject.technologies || projectsData[index].technologies, // Use translated technologies if available, otherwise original
  }));

  return (
    <section ref={ref} id="projects" className="my-10 scroll-mt-28 md:mb-20">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.175,
        }}
        viewport={{
          once: true,
        }}
      >
        <SectionHeading heading={t('title')} content="2023-2025" />
      </motion.div>
      <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
        {projects.map((project: any, index: number) => (
          <Project key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

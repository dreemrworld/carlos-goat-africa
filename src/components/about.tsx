'use client';

import { motion } from 'framer-motion';

import { SectionHeading } from '@/components/section-heading';
import { Skills } from '@/components/skills';
import { useSectionInView } from '@/hooks/use-section-in-view';

export const About = () => {
  const { ref } = useSectionInView('Sobre');

  return (
    <motion.section
      ref={ref}
      id="about"
      className="my-10 flex w-full scroll-mt-28 flex-col items-center md:mb-20"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading heading="Sobre Mim" />
      <div className="-mt-5 max-w-2xl text-center leading-7">
        <p className="mb-4">
          O Carlos Araújo nasceu em Luanda, Angola em 1992. É o terceiro filho
          do Raul Araújo e da Arlete da Conceição. Morou 20 anos na Cidade do
          Cabo e 2 anos na Holanda. Tem esposa e uma filha.
        </p>
      </div>
      <Skills />
    </motion.section>
  );
};

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
      <SectionHeading heading="Sobre mim" />
      <div className="-mt-5 max-w-2xl text-center leading-7">
        <p className="mb-4">
          O Carlos Araújo é Mestre em Gestão Empresarial, Pós-Graduado em
          Finanças Públicas e Licenciado em Empreendedorismo. Mora em Angola
          onde presta serviço de consultoria empresarial e faz pesquisa e
          desenvolvimento de aplicações de inteligência artificial. Sua
          investigação em auditoria pública foi distinguida pelo Tribunal de
          Contas Europeu e apresentou em conferências internacionais em
          Manchester, Winchester e além, sobre blockchain, finanças públicas e o
          futuro da tecnologia.
        </p>
      </div>
      <Skills />
    </motion.section>
  );
};

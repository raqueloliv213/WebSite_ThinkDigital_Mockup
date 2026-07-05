import { motion } from "motion/react";
import { MultiSlideCarousel } from "./multi-slide-carousel";

const sedePhotos = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900",
    title: "Fachada do edifício",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900",
    title: "Open space",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900",
    title: "Sala de reuniões",
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900",
    title: "Receção",
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900",
    title: "Zona de pausa",
  },
];

export function SedeSection() {
  return (
    <section className="bg-white">
      <motion.h2
        className="font-['Roboto',sans-serif] font-bold text-[28px] sm:text-[34px] lg:text-[40px] text-[#0d1a38] mb-4 leading-tight"
        initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.6, ease: "easeOut" }}
      >
          Uma casa feita à medida para a nossa equipa
      </motion.h2>
      <motion.p
        className="font-['Roboto',sans-serif] text-[15px] sm:text-[17px] text-[#6b7a99] leading-relaxed max-w-[700px] mb-8"
        initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
      >
        Em Ílhavo, construímos um espaço amplo, verde e pensado para diluir a fronteira entre trabalho e conforto. É aqui que recebemos a equipa, os clientes e os parceiros todos os dias.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.65, ease: "easeOut", delay: 0.15 }}
      >
        <MultiSlideCarousel items={sedePhotos} />
      </motion.div>

      <motion.div
        className="mt-6"
        initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
      >
        <h3 className="font-['Roboto',sans-serif] font-semibold text-[16px] text-[#0d1a38] mb-2">
          Os nossos novos escritórios ficam na zona industrial das Ervosas, em Ílhavo.
        </h3>
        <a
          href="https://www.google.com/maps/search/?api=1&query=Zona+Industrial+das+Ervosas%2C+%C3%8Dlhavo"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-[13px] font-semibold text-[#177aff] hover:text-[#0f6ae0] transition-colors"
        >
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 2C8 2 5 5 5 9c0 5 7 13 7 13s7-8 7-13c0-4-3-7-7-7z" />
            <circle cx="12" cy="9" r="2.3" />
          </svg>
          Ver localização
        </a>
      </motion.div>
    </section>
  );
}

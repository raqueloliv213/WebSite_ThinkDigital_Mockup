import { motion } from "motion/react";
import estagiosImg from "../../imports/Raquel/pexels-delot-16420458.jpg";
import { BentoGrid, BentoGridItem } from "../components/ui/bento-grid";
import {
  IconBriefcase,
  IconBulb,
  IconUsers,
  IconSchool,
  IconDeviceLaptop,
  IconTrophy,
  IconHeartHandshake,
} from "@tabler/icons-react";

const bentoItems = [
  {
    title: "Projetos com impacto real",
    description: "Trabalhas em projetos ativos para clientes reais — não em simulações. O teu contributo tem peso.",
    header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-[#e8f4ff] to-[#d0eaff]" />,
    icon: <IconBriefcase className="h-4 w-4 text-[#0085ca]" />,
  },
  {
    title: "Mentoria próxima",
    description: "Cada estagiário tem acompanhamento direto de um sénior da área, desde o primeiro dia.",
    header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-[#eef0ff] to-[#dde1ff]" />,
    icon: <IconUsers className="h-4 w-4 text-[#0085ca]" />,
  },
  {
    title: "Autonomia e aprendizagem",
    description: "Acesso a plataformas de formação online e liberdade para explorar tecnologias ao teu ritmo.",
    header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-[#e8fff4] to-[#c8f5e0]" />,
    icon: <IconDeviceLaptop className="h-4 w-4 text-[#0085ca]" />,
  },
  {
    title: "Ambiente sem formalidades",
    description: "Sem dress code, sem burocracia. Um ambiente onde te sentes à vontade para crescer e para errar.",
    header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-[#fff8e8] to-[#ffefc0]" />,
    icon: <IconHeartHandshake className="h-4 w-4 text-[#0085ca]" />,
    className: "md:col-span-2",
  },
  {
    title: "Bolsa de estágio",
    description: "Valorizamos o teu tempo e esforço. Os estágios curriculares têm apoio financeiro definido caso a caso.",
    header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-[#fff0f5] to-[#ffd6e8]" />,
    icon: <IconTrophy className="h-4 w-4 text-[#0085ca]" />,
  },
  {
    title: "Potencial de contratação",
    description: "Os melhores estagiários ficam. Muitos dos nossos colaboradores hoje começaram como estagiários.",
    header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-[#f0f8ff] to-[#cce5ff]" />,
    icon: <IconSchool className="h-4 w-4 text-[#0085ca]" />,
  },
  {
    title: "Cultura de inovação",
    description: "Nascemos da universidade e acreditamos em mentes jovens. As tuas ideias são bem-vindas desde o dia um.",
    header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-[#f5f0ff] to-[#e0d0ff]" />,
    icon: <IconBulb className="h-4 w-4 text-[#0085ca]" />,
    className: "md:col-span-2",
  },
];

export default function Estagios() {
  return (
    <div className="bg-white min-h-screen">
      <div className="relative h-[340px] sm:h-[380px] lg:h-[420px] flex items-end px-4 sm:px-6 lg:px-[80px] pb-10 sm:pb-16 overflow-hidden">
        <img src={estagiosImg} alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #041b53e6 0%, #177affb3 100%)" }} />
        <div className="relative z-10 max-w-[700px]">
          <motion.span
            className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 text-white/80 text-[13px] font-semibold mb-4"
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
          >Carreira</motion.span>
          <motion.h1
            className="font-['Roboto',sans-serif] font-bold text-[32px] sm:text-[44px] lg:text-[56px] text-white leading-[1.1] tracking-[-1px] mb-4"
            initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.22 }}
          >Estágios</motion.h1>
          <motion.p
            className="font-['Roboto',sans-serif] text-[15px] sm:text-[18px] text-white/80 leading-relaxed max-w-[560px]"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.36 }}
          >
            Programas de estágio curricular. O teu primeiro passo numa carreira com impacto real.
          </motion.p>
        </div>
      </div>

      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-[80px] py-12 sm:py-20">

        {/* De onde vem o futuro */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.65, ease: "easeOut" }}
        >
          <h2 className="font-['Roboto',sans-serif] font-bold text-[24px] sm:text-[30px] text-[#0d1a38] mb-8">
            De onde vem o futuro
          </h2>
          <div className="relative max-w-[860px] mx-auto px-4 sm:px-8">
            <span className="hidden sm:block absolute top-0 left-0 text-[72px] text-[#0085ca]/20 font-serif leading-none select-none">"</span>
            <p className="font-['Roboto',sans-serif] font-bold text-[22px] sm:text-[36px] lg:text-[46px] text-[#002855] leading-[1.2] tracking-tight">
              Nascido de uma visão de dois estudantes da Universidade de Aveiro, conhecemos o verdadeiro potencial das mentes jovens.
            </p>
            <span className="hidden sm:block absolute bottom-0 right-0 text-[72px] text-[#0085ca]/20 font-serif leading-none select-none">"</span>
          </div>
        </motion.div>

        {/* O que esperar */}
        <div className="mb-16">
          <motion.h2
            className="font-['Roboto',sans-serif] font-bold text-[24px] sm:text-[30px] text-[#0d1a38] mb-10 text-center"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.55, ease: "easeOut" }}
          >
            O que esperar como estagiário
          </motion.h2>
          <BentoGrid className="max-w-full">
            {bentoItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.07 }}
                className={item.className}
              >
                <BentoGridItem
                  title={item.title}
                  description={item.description}
                  header={item.header}
                  icon={item.icon}
                />
              </motion.div>
            ))}
          </BentoGrid>
        </div>

        <motion.div
          className="bg-[#041b53] rounded-3xl p-6 sm:p-12 text-center"
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="font-['Roboto',sans-serif] font-bold text-[22px] sm:text-[28px] text-white mb-3">Candidatura espontânea</h2>
          <p className="text-white/70 text-[16px] mb-8 max-w-[500px] mx-auto">Não encontraste o que procuras? Envia-nos o teu CV e entraremos em contacto.</p>
          <a href="mailto:rh@thinkdigital.pt" className="inline-flex items-center gap-3 bg-[#0085ca] text-white px-8 py-4 rounded-xl font-semibold text-[15px] hover:bg-[#006fa8] transition-colors">
            Enviar candidatura
          </a>
        </motion.div>
      </div>
    </div>
  );
}

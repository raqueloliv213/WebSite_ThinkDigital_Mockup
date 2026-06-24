import { motion } from "motion/react";
import { SedeSection } from "../components/sede-section";
import { ValoresSection } from "../components/valores-section";
import { TimelineSection } from "../components/timeline-section";
import { CounterSection } from "../components/counter-section";
import fachadaImg from "../../imports/Raquel/fachada_thinkdigital.jpeg";

export default function Empresa() {
  return (
    <div className="bg-white min-h-screen">
      <div className="relative h-[340px] sm:h-[380px] lg:h-[420px] flex items-end px-4 sm:px-6 lg:px-[80px] pb-10 sm:pb-16 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          aria-hidden
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #041b53e6 0%, #177affb3 100%)" }} />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 70% 50%, #177aff 0%, transparent 60%)" }} />
        <div className="relative z-10 max-w-[700px]">
          <motion.span
            className="inline-flex items-center px-3 py-1 rounded-full bg-[#177aff]/20 text-[#7eb8ff] text-[13px] font-semibold mb-4"
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
          >Sobre nós</motion.span>
          <motion.h1
            className="font-['Roboto',sans-serif] font-bold text-[32px] sm:text-[44px] lg:text-[56px] text-white leading-[1.1] tracking-[-1px] mb-4"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.22 }}
          >Empresa</motion.h1>
          <motion.p
            className="font-['Roboto',sans-serif] text-[15px] sm:text-[18px] text-white/80 leading-relaxed max-w-[560px]"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.36 }}
          >
            Quem somos e como começámos. Há 18 anos a transformar a indústria com tecnologia de ponta.
          </motion.p>
        </div>
      </div>

      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-[80px] py-12 sm:py-20">
        <div className="mb-16 sm:mb-20">
          <CounterSection />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 mb-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.65, ease: "easeOut" }}
          >
            <h2 className="font-['Roboto',sans-serif] font-bold text-[28px] sm:text-[34px] lg:text-[40px] text-[#0d1a38] mb-6 leading-tight">A ThinkDigital desde 2007</h2>
            <p className="font-['Roboto',sans-serif] text-[16px] text-[#6b7a99] leading-relaxed mb-4">
              Nascemos com a missão de aproximar a tecnologia das empresas que mais precisam dela, a indústria, a energia e a logística.
            </p>
            <p className="font-['Roboto',sans-serif] text-[16px] text-[#6b7a99] leading-relaxed">
              Hoje somos uma equipa de especialistas que desenvolve e implementa soluções digitais à medida, com foco em resultados reais e mensuráveis.
            </p>
          </motion.div>
          <motion.div
            className="rounded-3xl overflow-hidden h-[260px] sm:h-[320px] lg:h-[360px]"
            initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.65, ease: "easeOut", delay: 0.1 }}
          >
            <img src={fachadaImg} alt="Fachada ThinkDigital" className="w-full h-full object-cover" />
          </motion.div>
        </div>

        <div className="mb-20">
          <SedeSection />
        </div>

        <div className="mb-20">
          <ValoresSection />
        </div>

        <TimelineSection />
      </div>

      <motion.div
        className="py-12 sm:py-16"
        initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-[80px] flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="font-['Roboto',sans-serif] font-medium text-[18px] sm:text-[22px] lg:text-[26px] text-[#0d1a38] leading-snug max-w-[680px]">
            A história continua a escrever-se em cada sensor instalado, em cada frota monitorizada, em cada fábrica mais eficiente.
          </p>
          <a
            href="/contactos"
            className="shrink-0 flex items-center px-6 py-3 rounded-lg bg-[#0085ca] hover:bg-[#0073ad] transition-colors whitespace-nowrap"
          >
            <span className="font-['Roboto',sans-serif] font-semibold text-[14px] sm:text-[15px] text-white">Falar com um especialista</span>
          </a>
        </div>
      </motion.div>
    </div>
  );
}

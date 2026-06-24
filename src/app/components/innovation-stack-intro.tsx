import { motion } from "motion/react";
import innovationLab from "../../imports/Raquel/innovation_lab.jpg";

export function InnovationStackIntro() {
  return (
    <div className="relative">
      <section className="relative text-white h-screen w-full bg-[#041b53] grid place-content-center overflow-hidden sticky top-0">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="https://www.thinkdigital.pt/images/video_pulse.mp4"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden
        />
        <div className="absolute inset-0 bg-[#041b53]/50" />
        <div className="relative px-6 sm:px-10 max-w-[1000px] mx-auto text-center">
          <motion.h1
            className="font-['Roboto',sans-serif] font-bold text-[32px] sm:text-[48px] lg:text-[58px] leading-[1.2]"
            initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            A inovação não é o que fazemos.
            <br />É o que nos faz.
          </motion.h1>
        </div>
      </section>

      <section className="relative text-[#0d1a38] h-screen w-full bg-white overflow-hidden sticky top-0 rounded-t-2xl">
        <div className="h-full max-w-[1100px] mx-auto px-6 sm:px-10 grid grid-cols-1 md:grid-cols-2 items-center content-center md:content-normal gap-6 md:gap-10 py-10 md:py-0">
          <div>
            <h2 className="font-['Roboto',sans-serif] font-bold text-[#0d1a38] text-[28px] sm:text-[38px] md:text-[44px] lg:text-[54px] leading-[1.15] mb-4 md:mb-6">
              Innovation Lab
            </h2>
            <p className="font-['Roboto',sans-serif] text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] text-[#6b7a99] leading-relaxed">
              O Innovation Lab é o espaço da ThinkDigital dedicado à criação e experimentação de novos projetos e soluções. É aqui que as ideias tomam forma antes de chegarem aos clientes.
            </p>
          </div>
          <div className="h-[200px] sm:h-[280px] md:h-[380px] lg:h-[420px] rounded-2xl overflow-hidden">
            <img
              src={innovationLab}
              alt="ThinkDigital Innovation Lab"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

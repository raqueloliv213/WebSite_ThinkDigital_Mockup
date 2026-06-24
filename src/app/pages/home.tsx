import { LayoutGroup, motion, useMotionValue, useSpring } from "motion/react";
import { useRef } from "react";
import { TextRotate } from "../components/ui/text-rotate";
import { StackingCards } from "../components/stacking-cards";
import { TrustedBy } from "../components/trusted-by";
import { AnimatedGradientText } from "../components/ui/animated-gradient-text";
import trackingDiaryImg from "../../imports/Raquel/mockup_phone_trackingdiary1.png";
import heroVideo from "../../imports/Raquel/Hero (1).mp4";
import simuladorVideo from "../../imports/Raquel/Simulador_energia.mp4";

const ROTATING_WORDS = [
  "aproxima", "inova", "simplifica", "conecta", "otimiza",
  "antecipa", "protege", "sustenta", "transforma", "evolui",
  "acelera", "inspira", "marca",
];

function TabletTilt({ video }: { video: string }) {
  const ref = useRef<HTMLDivElement>(null);

  const rawX = useMotionValue(-12);
  const rawY = useMotionValue(4);
  const rotateY = useSpring(rawX, { stiffness: 120, damping: 20 });
  const rotateX = useSpring(rawY, { stiffness: 120, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
    rawX.set(-12 + x * 10);
    rawY.set(4 - y * 8);
  };

  const handleMouseLeave = () => {
    rawX.set(-12);
    rawY.set(4);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 48 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, amount: 0.2 }}
      style={{ perspective: 1200 }}
      className="relative"
    >
      <motion.div
        ref={ref}
        style={{ rotateY, rotateX }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="rounded-[20px] overflow-hidden border-2 border-[#e5e5ed] shadow-[0_30px_80px_rgba(0,40,85,0.18)] w-full cursor-pointer"
      >
        <video
          src={video}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover pointer-events-none"
        />
      </motion.div>
      <div className="absolute inset-x-4 -bottom-6 h-12 rounded-[20px] bg-[#002855]/10 blur-xl" />
    </motion.div>
  );
}

function Hero() {
  return (
    <div className="relative w-full h-screen overflow-hidden flex items-center justify-center px-4 sm:px-6 lg:px-[80px]">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={heroVideo}
        autoPlay
        muted
        loop
        playsInline
        aria-hidden
      />
      <div className="absolute inset-0 bg-[#041b53]/60" />

      <div className="relative z-10 flex flex-col items-center gap-6 max-w-[900px] text-center">
        <div className="font-['Roboto',sans-serif] font-bold leading-[1.1] text-[36px] sm:text-[48px] lg:text-[64px] text-white tracking-[-1.28px] flex flex-wrap items-baseline justify-center gap-x-4">
          <LayoutGroup>
            <motion.span layout className="whitespace-nowrap">Tecnologia que</motion.span>
            <TextRotate
              texts={ROTATING_WORDS}
              mainClassName="inline-flex overflow-hidden text-[#0085ca] items-center justify-center"
              staggerFrom="last"
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
            />
          </LayoutGroup>
        </div>

        <p className="font-['Roboto',sans-serif] font-normal leading-[1.65] text-[15px] sm:text-[17px] text-white max-w-[560px]">
          É assim que a ThinkDigital trabalha, há 18 anos, com visão para o futuro.
        </p>

        <a href="/contactos" className="mt-2 w-fit flex items-center gap-3 bg-white text-[#041b53] px-5 sm:px-6 py-3 rounded-lg hover:bg-[#e8f0ff] transition-colors">
          <span className="font-['Roboto',sans-serif] font-semibold text-[14px] sm:text-[15px] whitespace-nowrap">Falar com um especialista</span>
        </a>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="bg-white w-full min-h-screen flex flex-col">
      <Hero />
      <TrustedBy />
      <StackingCards />
      {/* Simulador — texto esquerda, tablet direita inclinado */}
      <section className="bg-white px-4 sm:px-6 lg:px-[80px] py-10 sm:py-14 overflow-hidden">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-center">

          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col gap-6"
          >
            <span className="inline-flex w-fit items-center gap-2 px-4 py-1.5 rounded-full bg-[#f0fdf4] text-[#16a34a] text-[13px] font-semibold tracking-wide uppercase">
              Novidade
            </span>
            <h2 className="font-['Roboto',sans-serif] font-bold text-[30px] sm:text-[40px] lg:text-[50px] text-[#002855] leading-[1.1] tracking-tight">
              Já temos disponível um<br />Simulador de Energia!
            </h2>
            <p className="font-['Roboto',sans-serif] text-[16px] text-[#6b7a99] leading-relaxed max-w-[420px]">
              Descubra o consumo estimado, o custo mensal e o índice de eficiência energética da sua instalação — em tempo real.
            </p>
            <a
              href="/solucoes/energia#simulador"
              className="inline-flex w-fit items-center gap-3 bg-[#4ade80] text-white font-['Roboto',sans-serif] font-semibold text-[15px] px-8 py-4 rounded-xl hover:bg-[#22c55e] transition-colors"
            >
              Simular agora
              <svg width="16" height="16" viewBox="0 0 22 12" fill="none">
                <path d="M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z" fill="white" />
              </svg>
            </a>
          </motion.div>

          {/* Tablet inclinado com mouse tracking */}
          <TabletTilt video={simuladorVideo} />

        </div>
      </section>

      {/* Tracking Diary */}
      <section className="bg-white px-4 sm:px-6 lg:px-[80px] py-10 sm:py-14 overflow-hidden">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -48 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, amount: 0.2 }}
            className="flex justify-center"
          >
            <img
              src={trackingDiaryImg}
              alt="Tracking Diary"
              className="w-[260px] sm:w-[300px] md:w-[340px] lg:w-[380px] object-contain drop-shadow-2xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col gap-6"
          >
            <span className="inline-flex w-fit items-center gap-2 px-4 py-1.5 rounded-full text-[13px] font-semibold tracking-wide uppercase" style={{ background: "linear-gradient(90deg, rgba(241,90,41,0.12) 0%, rgba(218,28,92,0.12) 100%)", color: "#da1c5c" }}>
              Plataforma
            </span>
            <AnimatedGradientText
              colorFrom="#f15a29"
              colorTo="#da1c5c"
              speed={3}
              className="font-['Roboto',sans-serif] font-bold text-[30px] sm:text-[40px] lg:text-[50px] leading-[1.1] tracking-tight"
            >
              Tracking Diary
            </AnimatedGradientText>
            <p className="font-['Roboto',sans-serif] text-[16px] text-[#6b7a99] leading-relaxed max-w-[420px]">
              Gestão completa de frotas com localização GPS em tempo real, análise de condução, manutenção programada e relatórios de desempenho detalhados.
            </p>
            <a
              href="https://www.trackingdiary.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center gap-3 text-white font-['Roboto',sans-serif] font-semibold text-[15px] px-8 py-4 rounded-xl hover:opacity-90 transition-opacity"
              style={{ background: "linear-gradient(90deg, rgba(241,90,41,1) 0%, rgba(218,28,92,1) 100%)" }}
            >
              Saber mais
              <svg width="16" height="16" viewBox="0 0 22 12" fill="none">
                <path d="M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z" fill="white" />
              </svg>
            </a>
          </motion.div>

        </div>
      </section>
    </div>
  );
}

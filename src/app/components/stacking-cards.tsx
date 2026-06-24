import { useRef, useState } from "react";
import { useTransform, motion, useScroll, useMotionValueEvent, MotionValue } from "motion/react";

const cards = [
  {
    title: "Energia",
    description:
      "Soluções inteligentes de gestão e monitorização energética para reduzir consumos, aumentar a eficiência e antecipar falhas antes que aconteçam.",
    color: "#4ade80",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    href: "/solucoes/energia",
  },
  {
    title: "Indústria",
    description:
      "Plataformas de supervisão e controlo industrial que unem dados de produção, manutenção preditiva e rastreabilidade de processos numa só visão.",
    color: "#fb923c",
    image: "https://images.unsplash.com/photo-1717386255773-1e3037c81788?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    href: "https://www.efficient-factory.com/",
  },
  {
    title: "Frotas",
    description:
      "Gestão completa de frotas com localização GPS em tempo real, análise de condução, manutenção programada e relatórios de desempenho detalhados.",
    color: "#dc2359",
    href: "https://www.trackingdiary.com/",
    image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
  {
    title: "Inovação",
    description:
      "Desenvolvemos soluções à medida com tecnologias emergentes com IoT de forma a transformar os desafios do seu negócio em vantagem competitiva real.",
    color: "#177aff",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    href: "/sobre/inovacao",
  },
];

interface CardProps {
  i: number;
  title: string;
  description: string;
  color: string;
  image: string;
  href?: string;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}

const Card = ({ i, title, description, color, image, href, progress, range, targetScale }: CardProps) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });
  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      style={{ position: "sticky", top: 100 }}
      className="h-screen flex items-center justify-center"
    >
      <motion.div
        style={{
          backgroundColor: color,
          scale,
          top: `calc(-2vh + ${i * 25}px)`,
        }}
        className="flex flex-col relative -top-[25%] h-[560px] sm:h-[480px] md:h-[420px] lg:h-[450px] w-[92%] sm:w-[85%] md:w-[80%] lg:w-[70%] rounded-md p-4 sm:p-6 lg:p-10 origin-top shadow-[0_35px_60px_-15px_rgba(0,0,0,0.45),0_15px_25px_-10px_rgba(0,0,0,0.3)]"
      >
        <div className="flex flex-col md:flex-row h-full gap-4 md:gap-8 lg:gap-10">
          <div className="w-full md:w-[40%] flex flex-col shrink-0">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl text-white font-semibold mb-3">{title}</h2>
            <p className="text-sm text-white/80">{description}</p>
            <span className="flex items-center gap-2 pt-2">
              <a
                href={href || "#"}
                target={href?.startsWith("http") ? "_blank" : undefined}
                rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
                className="underline cursor-pointer text-white text-sm"
              >
                Saber mais
              </a>
              <svg width="22" height="12" viewBox="0 0 22 12" fill="none">
                <path
                  d="M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z"
                  fill="white"
                />
              </svg>
            </span>
          </div>

          <div className="relative w-full md:w-[60%] flex-1 md:h-full rounded-lg overflow-hidden">
            <motion.div className="w-full h-full overflow-hidden" style={{ scale: imageScale }}>
              <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover" />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export function StackingCards() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });
  const [lastCardActive, setLastCardActive] = useState(false);
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    if (v > 0.76) setLastCardActive(true);
    else if (v < 0.72) setLastCardActive(false);
  });

  return (
    /* ref envolve tudo — título + cards — igual à referência */
    <main ref={container} style={{ position: "relative" }} className="bg-white pb-4 sm:pb-6">

      <div
        style={{ position: "sticky", top: 64, zIndex: 20 }}
        className={`bg-white text-center pt-3 pb-1 px-4 transition-opacity duration-300 ${lastCardActive ? "opacity-0" : "opacity-100"}`}
      >
        <h2 className="font-['Roboto',sans-serif] font-bold text-[32px] sm:text-[40px] lg:text-[48px] text-[#0d1a38]">
          Soluções
        </h2>
      </div>

      <section>
        {cards.map((card, i) => {
          const targetScale = 1 - (cards.length - 1 - i) * 0.05;
          return (
            <Card
              key={i}
              i={i}
              title={card.title}
              description={card.description}
              color={card.color}
              image={card.image}
              href={card.href}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </section>

    </main>
  );
}

import { animate, motion, useMotionValue } from "motion/react";
import { useEffect, useRef, useState } from "react";

export interface CarouselItem {
  id: number | string;
  url: string;
  title: string;
}

interface Breakpoint {
  slidesToShow: number;
}

interface MultiSlideCarouselProps {
  items: CarouselItem[];
  breakpoints?: Record<number, Breakpoint>;
}

export function MultiSlideCarousel({
  items,
  breakpoints = {
    0: { slidesToShow: 1 },
    640: { slidesToShow: 2 },
    1024: { slidesToShow: 3 },
  },
}: MultiSlideCarouselProps) {
  const [index, setIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);

  useEffect(() => {
    const updateSlidesToShow = () => {
      const width = window.innerWidth;
      const sortedBreakpoints = Object.keys(breakpoints)
        .map(Number)
        .sort((a, b) => b - a);
      for (const bp of sortedBreakpoints) {
        if (width >= bp) {
          setSlidesToShow(breakpoints[bp].slidesToShow);
          break;
        }
      }
    };
    updateSlidesToShow();
    window.addEventListener("resize", updateSlidesToShow);
    return () => window.removeEventListener("resize", updateSlidesToShow);
  }, [breakpoints]);

  useEffect(() => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth || 1;
      const gap = 16;
      const slideWidth = (containerWidth - (slidesToShow - 1) * gap) / slidesToShow + gap;
      const targetX = -index * slideWidth;
      animate(x, targetX, { type: "spring", stiffness: 300, damping: 30 });
    }
  }, [index, slidesToShow, x]);

  useEffect(() => {
    const maxIndex = Math.max(0, items.length - slidesToShow);
    if (index > maxIndex) setIndex(maxIndex);
  }, [slidesToShow, index, items.length]);

  const maxIndex = Math.max(0, items.length - slidesToShow);

  return (
    <div className="relative overflow-hidden rounded-2xl" ref={containerRef}>
      <motion.div className="flex gap-4" style={{ x }}>
        {items.map((item) => (
          <div
            key={item.id}
            className="shrink-0 h-[220px] sm:h-[260px] lg:h-[300px] rounded-2xl overflow-hidden relative"
            style={{ width: `calc((100% - ${(slidesToShow - 1) * 16}px) / ${slidesToShow})` }}
          >
            <img
              src={item.url}
              alt={item.title}
              className="w-full h-full object-cover select-none pointer-events-none"
              draggable={false}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3">
              <p className="text-white text-sm font-medium">{item.title}</p>
            </div>
          </div>
        ))}
      </motion.div>

      <motion.button
        type="button"
        aria-label="Foto anterior"
        disabled={index === 0}
        onClick={() => setIndex((i) => Math.max(0, i - 1))}
        className={`absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shadow-lg transition-transform z-10 ${
          index === 0
            ? "opacity-40 cursor-not-allowed bg-neutral-300"
            : "bg-white hover:scale-110 hover:opacity-100 opacity-80"
        }`}
      >
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="#0d1a38" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </motion.button>

      <motion.button
        type="button"
        aria-label="Foto seguinte"
        disabled={index === maxIndex}
        onClick={() => setIndex((i) => Math.min(maxIndex, i + 1))}
        className={`absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shadow-lg transition-transform z-10 ${
          index === maxIndex
            ? "opacity-40 cursor-not-allowed bg-neutral-300"
            : "bg-white hover:scale-110 hover:opacity-100 opacity-80"
        }`}
      >
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="#0d1a38" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </motion.button>
    </div>
  );
}

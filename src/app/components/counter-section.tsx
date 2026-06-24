import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "motion/react";

interface CounterProps {
  target: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  label: string;
}

function Counter({ target, decimals = 0, prefix = "", suffix = "", label }: CounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [display, setDisplay] = useState((0).toFixed(decimals).replace(".", ","));

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, target, {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(v.toFixed(decimals).replace(".", ",")),
    });
    return () => controls.stop();
  }, [isInView, target, decimals]);

  return (
    <div ref={ref} className="text-center">
      <div className="font-['Roboto',sans-serif] text-[36px] sm:text-[46px] lg:text-[52px] font-bold text-[#0085ca]">
        {prefix}
        {display}
        {suffix}
      </div>
      <div className="text-[12px] sm:text-[13px] tracking-[0.1em] uppercase text-[#6b7a99] mt-2">{label}</div>
    </div>
  );
}

export function CounterSection() {
  return (
    <section className="px-0 py-2 sm:py-4">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6">
        <Counter target={18} prefix="+" label="Anos de experiência" />
        <Counter target={1.2} decimals={1} prefix="+" suffix="M€" label="Investidos em I&D anualmente" />
        <Counter target={100} prefix="+" label="Clientes em Portugal e na Europa" />
      </div>
    </section>
  );
}

import { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, animate, useScroll, useInView } from "motion/react";
import useEmblaCarousel from "embla-carousel-react";
import transformerImg from "../../imports/Raquel/transformer.png";
import macbookTransformerImg from "../../imports/Raquel/mockup_macbook_transformer.png";
import ipadWaterMeterImg from "../../imports/Raquel/mockup_ipad_water_meter.png";

const pillars = [
  {
    num: "01",
    title: "Monitorização em Tempo Real",
    desc: "Sensorização de potência, tensão, corrente, fator de potência e energia ativa e reativa em circuitos até 5000A. Água, gás e eletricidade num só dashboard.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0085ca" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Controlo de Tarifários",
    desc: "Evite os períodos de tarifa mais cara. O sistema agenda automaticamente a utilização dos equipamentos e gera poupanças reais e mensuráveis desde o primeiro mês.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0085ca" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Hardware e Software In-house",
    desc: "Equipamentos desenvolvidos e fabricados internamente. A integração total entre hardware e software dá-nos autonomia para inovar sem limites.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0085ca" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="16" height="16" rx="2" /><rect x="9" y="9" width="6" height="6" /><line x1="9" y1="2" x2="9" y2="4" /><line x1="15" y1="2" x2="15" y2="4" /><line x1="9" y1="20" x2="9" y2="22" /><line x1="15" y1="20" x2="15" y2="22" /><line x1="20" y1="9" x2="22" y2="9" /><line x1="20" y1="14" x2="22" y2="14" /><line x1="2" y1="9" x2="4" y2="9" /><line x1="2" y1="14" x2="4" y2="14" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Plataforma e Análise de Dados",
    desc: "Interface limpa e intuitiva para visualizar tendências, definir regras automáticas e receber alertas em tempo real, em qualquer dispositivo.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0085ca" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
  {
    num: "05",
    title: "Alertas e Deteção de Anomalias",
    desc: "Deteção automática de consumos anómalos com notificações imediatas. Identifique avarias, fugas e desperdícios antes que se tornem problemas críticos.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0085ca" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" />
      </svg>
    ),
  },
  {
    num: "06",
    title: "Adaptado a Qualquer Setor",
    desc: "Indústria, comércio, edifícios e habitação. Soluções escaláveis e configuradas à medida das necessidades e da dimensão de cada organização.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0085ca" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
  },
];

function PillarGrid() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
    watchDrag: true,
  });
  const [progress, setProgress] = useState(0);

  /* scroll vertical da página → move o carousel */
  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    return scrollYProgress.on("change", (v) => {
      if (!emblaApi) return;
      const snaps = emblaApi.scrollSnapList();
      if (snaps.length <= 1) return;
      const idx = Math.round(v * (snaps.length - 1));
      emblaApi.scrollTo(idx, true);
      setProgress(v);
    });
  }, [emblaApi, scrollYProgress]);

  /* arrasto com o rato também atualiza a barra */
  useEffect(() => {
    if (!emblaApi) return;
    const onScroll = () => setProgress(emblaApi.scrollProgress());
    emblaApi.on("scroll", onScroll);
    return () => { emblaApi.off("scroll", onScroll); };
  }, [emblaApi]);

  return (
    <>
      {/* Mobile / tablet: simple animated grid */}
      <div className="block lg:hidden px-4 sm:px-6 py-10 sm:py-14">
        <div className="max-w-[1100px] mx-auto">
          <div className="mb-8 text-center">
            <h2 className="font-['Roboto',sans-serif] font-bold text-[28px] sm:text-[34px] text-[#002855] tracking-tight">
              O que incluímos
            </h2>
            <p className="font-['Roboto',sans-serif] text-[16px] text-[#6b7a99] mt-2">
              Seis pilares da nossa solução de energia.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {pillars.map((p, i) => (
              <motion.div
                key={p.num}
                className="bg-white border border-[#e7e9f0] rounded-[22px] p-7 flex flex-col gap-4 hover:shadow-lg hover:border-[#0085ca]/30 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.07 }}
              >
                <div className="w-14 h-14 rounded-[15px] bg-[#eef4ff] flex items-center justify-center shrink-0">
                  {p.icon}
                </div>
                <div className="flex flex-col gap-2">
                  <span className="font-['Roboto',sans-serif] text-[11px] font-semibold tracking-widest text-[#0085ca] uppercase">
                    {p.num}
                  </span>
                  <h3 className="font-['Roboto',sans-serif] font-bold text-[17px] text-[#002855] leading-snug">
                    {p.title}
                  </h3>
                  <p className="font-['Roboto',sans-serif] text-[14px] text-[#6b7a99] leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Desktop (lg+): sticky scroll carousel */}
      <div ref={wrapperRef} style={{ height: "500vh" }} className="hidden lg:block">
        <div
          style={{ position: "sticky", top: 0, height: "100vh" }}
          className="bg-white flex flex-col justify-center overflow-hidden px-[80px]"
        >
          <div className="max-w-[1100px] mx-auto w-full">

            {/* Título */}
            <div className="mb-10 text-center">
              <h2 className="font-['Roboto',sans-serif] font-bold text-[42px] text-[#002855] tracking-tight">
                O que incluímos
              </h2>
              <p className="font-['Roboto',sans-serif] text-[16px] text-[#6b7a99] mt-2">
                Seis pilares da nossa solução de energia.
              </p>
            </div>

            {/* Carousel — só arrasto, sem botões */}
            <div ref={emblaRef} className="overflow-hidden cursor-grab active:cursor-grabbing select-none">
              <div className="flex gap-5">
                {pillars.map((p) => (
                  <div
                    key={p.num}
                    className="shrink-0 w-[calc(33.333%-14px)] bg-white border border-[#e7e9f0] rounded-[22px] p-7 flex flex-col gap-4 hover:shadow-lg hover:border-[#0085ca]/30 transition-all duration-300"
                  >
                    <div className="w-14 h-14 rounded-[15px] bg-[#eef4ff] flex items-center justify-center shrink-0">
                      {p.icon}
                    </div>
                    <div className="flex flex-col gap-2">
                      <span className="font-['Roboto',sans-serif] text-[11px] font-semibold tracking-widest text-[#0085ca] uppercase">
                        {p.num}
                      </span>
                      <h3 className="font-['Roboto',sans-serif] font-bold text-[17px] text-[#002855] leading-snug">
                        {p.title}
                      </h3>
                      <p className="font-['Roboto',sans-serif] text-[14px] text-[#6b7a99] leading-relaxed">
                        {p.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Barra de progresso — segue o scroll em tempo real */}
            <div className="mt-8 h-[4px] rounded-full bg-[#eef0f5] overflow-hidden">
              <div
                className="h-full rounded-full bg-[#0085ca]"
                style={{ width: `${Math.max(3, progress * 100)}%`, transition: "none" }}
              />
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

function CountUp({ to, suffix = "%", duration = 1.8 }: { to: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const motionValue = useMotionValue(0);
  const [display, setDisplay] = useState(`0${suffix}`);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(motionValue, to, {
      duration,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Math.round(v) + suffix),
    });
    return controls.stop;
  }, [isInView, to, suffix, duration, motionValue]);

  return <span ref={ref}>{display}</span>;
}

const stats = [
  {
    value: 37,
    suffix: "%",
    label: "das emissões globais de CO₂ são geradas por edifícios.",
    source: "GlobalABC / UNEP, 2025",
  },
  {
    value: 30,
    suffix: "%",
    label: "da energia global é consumida por edifícios.",
    source: "IEA, Energy Efficiency 2025",
  },
  {
    value: 40,
    suffix: "%",
    label: "dos custos de produção são custos energéticos nas indústrias de uso intensivo.",
    source: "Comissão Europeia / Trinomics, 2024",
  },
];

function StatsSection() {
  return (
    <div className="bg-white px-4 sm:px-6 lg:px-[80px] py-10 sm:py-14 lg:py-16">
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6">
        {stats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.12, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.4 }}
            className="flex flex-col gap-3 sm:border-r sm:last:border-r-0 border-[#e5e5ed] sm:pr-6 sm:last:pr-0 border-b sm:border-b-0 pb-8 sm:pb-0 last:border-b-0 last:pb-0"
          >
            <div className="font-['Roboto',sans-serif] font-bold text-[44px] sm:text-[50px] lg:text-[60px] leading-none bg-gradient-to-r from-[#4ade80] to-[#fbbf24] bg-clip-text text-transparent">
              {s.value !== null && <CountUp to={s.value} suffix={s.suffix} />}
            </div>
            <p className="font-['Roboto',sans-serif] text-[15px] text-[#444] leading-snug">
              {s.label}
            </p>
            <span className="font-['Roboto',sans-serif] text-[12px] text-[#0085ca] font-medium tracking-wide">
              {s.source}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function EnergySimulator() {
  const [eq, setEq] = useState(10);
  const [pw, setPw] = useState(150);
  const [hr, setHr] = useState(8);
  const [tr, setTr] = useState(18);
  const [modalOpen, setModalOpen] = useState(false);
  const [sent, setSent] = useState(false);

  const tarifa = tr / 100;
  const kwhDay = (eq * pw * hr) / 1000;
  const kwhMonth = kwhDay * 30;
  const cost = kwhMonth * tarifa;
  const rawEff = 1 - ((pw - 10) / 490);
  const eff = Math.max(0, Math.min(1, rawEff));
  const effPct = Math.round(eff * 100);

  const status =
    effPct >= 65 ? "Instalação Eficiente" :
    effPct >= 35 ? "Margem de Melhoria" :
    "Consumo Elevado";

  const hint =
    effPct >= 65
      ? "Boa utilização dos recursos — potência por equipamento otimizada."
      : effPct >= 35
      ? "Considera substituir equipamentos por modelos de menor consumo."
      : "Auditoria energética recomendada — potencial de poupança significativo.";

  const barColor =
    effPct >= 65 ? "#4ade80" :
    effPct >= 35 ? "#fb923c" :
    "#ef4444";

  const statusTextColor =
    effPct >= 65 ? "#16a34a" :
    effPct >= 35 ? "#c2410c" :
    "#dc2626";

  const sliders = [
    { label: "Equipamentos ativos", value: eq, setter: setEq, min: 1, max: 50, step: 1, display: String(eq) },
    { label: "Potência por equipamento", value: pw, setter: setPw, min: 10, max: 500, step: 10, display: `${pw} W` },
    { label: "Horas de operação / dia", value: hr, setter: setHr, min: 1, max: 24, step: 1, display: `${hr} h` },
    { label: "Tarifa de energia (€/kWh)", value: tr, setter: setTr, min: 5, max: 40, step: 1, display: `${tarifa.toFixed(2)} €` },
  ];

  return (
    <div id="simulador" className="rounded-3xl border border-[#e5e5ed] bg-white overflow-hidden">
      {/* Cabeçalho verde — texto branco */}
      <div className="px-6 sm:px-12 py-8" style={{ backgroundColor: "#4ade80" }}>
        <h3 className="font-['Roboto',sans-serif] font-bold text-[22px] sm:text-[28px] text-white">
          Simulador de Energia
        </h3>
        <p className="font-['Roboto',sans-serif] text-[15px] text-white/90 mt-1">
          Ajuste os parâmetros e descubra o consumo estimado, o custo mensal e o índice de eficiência energética da sua instalação, em tempo real.
        </p>
      </div>

      <div className="p-6 sm:p-12">
        {/* Parâmetros — texto mantém-se */}
        <p className="font-['Roboto',sans-serif] font-semibold text-[16px] text-[#6b7a99] mb-6">Parâmetros da Instalação</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
          {sliders.map(({ label, value, setter, min, max, step, display }) => (
            <div key={label}>
              <div className="flex justify-between items-center mb-2">
                <label className="font-['Roboto',sans-serif] text-[14px] text-[#6b7a99]">{label}</label>
                <span className="font-['Roboto',sans-serif] font-bold text-[14px] text-[#6b7a99]">{display}</span>
              </div>
              <input
                type="range"
                min={min}
                max={max}
                step={step}
                value={value}
                onChange={e => setter(Number(e.target.value))}
                className="w-full h-2 rounded-full cursor-pointer"
                style={{ accentColor: "#002855" }}
              />
            </div>
          ))}
        </div>

        {/* Resultados — texto azul escuro */}
        <p className="font-['Roboto',sans-serif] font-semibold text-[16px] text-[#002855] mb-6">Resultados Estimados</p>
        <div className="grid grid-cols-3 divide-x divide-[#e5e5ed] mb-8">
          {[
            { label: "Consumo diário", value: kwhDay.toFixed(1), unit: "kWh / dia" },
            { label: "Consumo mensal", value: kwhMonth.toFixed(0), unit: "kWh / mês" },
            { label: "Custo estimado", value: `${Math.round(cost)} €`, unit: "€ / mês" },
          ].map(m => (
            <div key={m.label} className="text-center px-2 sm:px-4 py-2">
              <div className="font-['Roboto',sans-serif] text-[11px] sm:text-[12px] text-[#6b7a99] mb-1">{m.label}</div>
              <div className="font-['Roboto',sans-serif] font-bold text-[18px] sm:text-[24px] lg:text-[28px] text-[#002855]">{m.value}</div>
              <div className="font-['Roboto',sans-serif] text-[10px] sm:text-[11px] text-[#6b7a99] mt-1">{m.unit}</div>
            </div>
          ))}
        </div>

        {/* Barra de eficiência */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="font-['Roboto',sans-serif] text-[14px] text-[#6b7a99]">Índice de Eficiência Energética</span>
            <span className="font-['Roboto',sans-serif] font-bold text-[14px]" style={{ color: barColor }}>{effPct}%</span>
          </div>
          <div className="h-3 bg-[#f0f0f5] rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-300"
              style={{ width: `${effPct}%`, backgroundColor: barColor }}
            />
          </div>
          <p className="font-['Roboto',sans-serif] text-[13px] text-[#6b7a99] mt-2">{hint}</p>
        </div>

        {/* Badge de estado + botão enviar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-2">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border"
            style={{ borderColor: barColor + "55", backgroundColor: barColor + "18" }}
          >
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: barColor }} />
            <span className="font-['Roboto',sans-serif] font-semibold text-[13px]" style={{ color: statusTextColor }}>{status}</span>
          </div>

          <button
            onClick={() => { setModalOpen(true); setSent(false); }}
            className="inline-flex items-center gap-2 bg-[#002855] text-white font-['Roboto',sans-serif] font-semibold text-[14px] px-6 py-3 rounded-xl hover:bg-[#0085ca] transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2L11 13"/><path d="M22 2L15 22l-4-9-9-4 20-7z"/></svg>
            Enviar dados a um especialista
          </button>
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4" onClick={() => setModalOpen(false)}>
          <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden" onClick={e => e.stopPropagation()}>
            <div className="bg-[#002855] px-6 py-5 flex items-start justify-between gap-4">
              <div>
                <h3 className="font-['Roboto',sans-serif] font-bold text-[18px] text-white">Análise por especialista</h3>
                <p className="font-['Roboto',sans-serif] text-[13px] text-white/70 mt-1">Os seus dados de simulação serão enviados para análise.</p>
              </div>
              <button onClick={() => setModalOpen(false)} className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors shrink-0">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
              </button>
            </div>

            <div className="p-6">
              {sent ? (
                <div className="text-center py-6">
                  <div className="w-14 h-14 rounded-full bg-[#0085ca]/10 flex items-center justify-center mx-auto mb-4">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="#0085ca" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  <p className="font-['Roboto',sans-serif] font-bold text-[17px] text-[#002855] mb-1">Dados enviados!</p>
                  <p className="font-['Roboto',sans-serif] text-[14px] text-[#6b7a99]">Um especialista ThinkDigital entrará em contacto brevemente.</p>
                </div>
              ) : (
                <>
                  {/* Resumo dos dados */}
                  <div className="bg-[#f5f8ff] rounded-xl p-4 mb-5 grid grid-cols-2 gap-3 text-[13px]">
                    {[
                      { l: "Equipamentos", v: `${eq}` },
                      { l: "Potência / equipamento", v: `${pw} W` },
                      { l: "Horas / dia", v: `${hr} h` },
                      { l: "Tarifa", v: `${tarifa.toFixed(2)} €/kWh` },
                      { l: "Consumo mensal", v: `${kwhMonth.toFixed(0)} kWh` },
                      { l: "Custo estimado", v: `${Math.round(cost)} €/mês` },
                    ].map(({ l, v }) => (
                      <div key={l}>
                        <span className="font-['Roboto',sans-serif] text-[#6b7a99]">{l}: </span>
                        <span className="font-['Roboto',sans-serif] font-semibold text-[#002855]">{v}</span>
                      </div>
                    ))}
                  </div>

                  <form className="flex flex-col gap-4" onSubmit={e => { e.preventDefault(); setSent(true); }}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1.5">
                        <label className="font-['Roboto',sans-serif] font-medium text-[13px] text-[#384561]">Nome</label>
                        <input required type="text" placeholder="O seu nome" className="border border-[#e5e5ed] rounded-xl px-4 py-3 text-[14px] focus:outline-none focus:border-[#0085ca] transition-colors" />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="font-['Roboto',sans-serif] font-medium text-[13px] text-[#384561]">Email</label>
                        <input required type="email" placeholder="email@empresa.pt" className="border border-[#e5e5ed] rounded-xl px-4 py-3 text-[14px] focus:outline-none focus:border-[#0085ca] transition-colors" />
                      </div>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="font-['Roboto',sans-serif] font-medium text-[13px] text-[#384561]">Empresa</label>
                      <input type="text" placeholder="Nome da empresa" className="border border-[#e5e5ed] rounded-xl px-4 py-3 text-[14px] focus:outline-none focus:border-[#0085ca] transition-colors" />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="font-['Roboto',sans-serif] font-medium text-[13px] text-[#384561]">Notas adicionais</label>
                      <textarea rows={3} placeholder="Informações extra sobre a sua instalação..." className="border border-[#e5e5ed] rounded-xl px-4 py-3 text-[14px] focus:outline-none focus:border-[#0085ca] transition-colors resize-none" />
                    </div>
                    <button type="submit" className="bg-[#0085ca] text-white font-['Roboto',sans-serif] font-semibold text-[15px] px-8 py-3.5 rounded-xl hover:bg-[#006fa8] transition-colors w-full">
                      Enviar para análise
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ─── iPad 3-D tilt (mouse tracking) ─── */
function IpadTilt() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = containerRef.current;
    const img = imgRef.current;
    if (!el || !img) return;

    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left  - rect.width  / 2) / (rect.width  / 2);
    const y = (e.clientY - rect.top   - rect.height / 2) / (rect.height / 2);

    const rotateY =  x * 15;
    const rotateX = -y * 15;
    const tx = x * 1.5;
    const ty = y * 1.5;
    const tz = -(Math.abs(x) + Math.abs(y)) * 0.3;

    img.style.transform = `perspective(900px) translate3d(${tx}px,${ty}px,${tz}px) rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
  };

  const handleMouseLeave = () => {
    const img = imgRef.current;
    if (!img) return;
    img.style.transform = 'perspective(900px) rotateY(0deg) rotateX(0deg)';
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="flex items-center justify-center select-none"
    >
      <img
        ref={imgRef}
        src={ipadWaterMeterImg}
        alt="Dashboard de monitorização ThinkDigital"
        className="w-full max-w-[480px] lg:max-w-none object-contain drop-shadow-2xl"
        style={{
          transformOrigin: '50% 50%',
          transition: 'transform 0.12s ease-out',
          willChange: 'transform',
        }}
      />
    </div>
  );
}

export default function Energia() {
  useEffect(() => {
    if (window.location.hash === "#simulador") {
      setTimeout(() => {
        document.getElementById("simulador")?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, []);

  return (
    <div className="bg-white min-h-screen">

      {/* Hero — fundo verde, texto à esquerda, imagem à direita */}
      <div
        className="relative overflow-hidden px-4 sm:px-6 lg:px-[80px]"
        style={{ backgroundColor: "#4ade80" }}
      >
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center min-h-[420px] sm:min-h-[480px] lg:min-h-[640px] py-10 sm:py-12 lg:py-16">
          {/* Texto */}
          <div className="relative z-10">
            <motion.h1
              className="font-['Roboto',sans-serif] font-bold text-[34px] sm:text-[46px] lg:text-[54px] text-white leading-[1.05] tracking-[-1.2px] mb-5"
              initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            >
              Eficiência Energética
            </motion.h1>
            <motion.p
              className="font-['Roboto',sans-serif] text-[15px] sm:text-[18px] text-white/90 leading-relaxed max-w-[480px]"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            >
              Reduza até 25% dos seus custos energéticos, elimine desperdícios e tome decisões sustentadas em dados reais, em tempo real.
            </motion.p>
            <motion.div
              className="mt-8"
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.45, ease: "easeOut" }}
            >
              <a
                href="/contactos"
                className="inline-flex items-center gap-3 bg-white text-[#002855] px-5 sm:px-6 py-3 rounded-lg hover:bg-white/90 transition-colors font-['Roboto',sans-serif] font-semibold text-[14px] sm:text-[15px]"
              >
                Falar com um especialista
                <svg width="16" height="16" viewBox="0 0 22 12" fill="none">
                  <path d="M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z" fill="#002855" />
                </svg>
              </a>
            </motion.div>
          </div>

          {/* Imagem hero */}
          <motion.div
            className="relative flex items-end justify-center md:justify-end order-first md:order-last"
            initial={{ opacity: 0, x: 32 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
          >
            <img
              src={transformerImg}
              alt="Transformador elétrico ThinkDigital"
              className="relative z-10 w-[70%] sm:w-[55%] lg:w-[115%] max-w-[400px] lg:max-w-none object-contain drop-shadow-2xl"
            />
          </motion.div>
        </div>
      </div>

      {/* Stats — fundo branco, números azul escuro com count-up */}
      <StatsSection />

      {/* Eficiência com precisão real */}
      <div className="px-4 sm:px-6 lg:px-[80px] pt-8 sm:pt-10 pb-0 mb-0">
        <div className="max-w-[1100px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="font-['Roboto',sans-serif] font-bold text-[24px] sm:text-[30px] lg:text-[38px] text-[#002855] leading-tight mb-5">
              Eficiência Energética<br />com precisão real
            </h2>
            <p className="font-['Roboto',sans-serif] text-[15px] sm:text-[16px] text-[#6b7a99] leading-relaxed mb-4">
              A ThinkDigital instala equipamentos de monitorização nos quadros elétricos dos seus clientes, permitindo acompanhar o perfil de consumo e avaliar a eficiência energética de forma contínua e rigorosa.
            </p>
            <p className="font-['Roboto',sans-serif] text-[15px] sm:text-[16px] text-[#6b7a99] leading-relaxed">
              Com sensores precisos e dados em tempo real, a sua empresa passa a compreender exatamente onde consome, quando consome e quanto paga por isso. Controle remotamente os seus equipamentos e evite os períodos de tarifa mais elevada.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex items-center justify-center"
          >
            <img
              src={macbookTransformerImg}
              alt="Dashboard de consumo energético ThinkDigital"
              className="w-full max-w-[580px] lg:max-w-none object-contain drop-shadow-xl"
            />
          </motion.div>
        </div>
        </div>
      </div>

      {/* Simulador + CTA */}
      <div className="px-4 sm:px-6 lg:px-[80px] pt-6 sm:pt-8 pb-0">
        <div className="max-w-[1100px] mx-auto">
        <EnergySimulator />
        </div>
      </div>

      {/* Pilares */}
      <PillarGrid />

      <div className="px-4 sm:px-6 lg:px-[80px] py-8 sm:py-10 lg:py-12">
        <div className="max-w-[1100px] mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.65, ease: "easeOut" }}
          >
            <h2 className="font-['Roboto',sans-serif] font-bold text-[22px] sm:text-[28px] lg:text-[34px] text-[#002855] leading-tight mb-3">
              Pronto para reduzir os seus custos energéticos?
            </h2>
            <p className="font-['Roboto',sans-serif] text-[16px] text-[#6b7a99] mb-8">
              Fale connosco e receba uma análise personalizada para a sua empresa.
            </p>
            <a
              href="/contactos"
              className="inline-flex items-center gap-3 bg-[#4ade80] text-[#002855] px-8 py-4 rounded-xl font-['Roboto',sans-serif] font-semibold text-[15px] hover:bg-[#22c55e] transition-colors"
            >
              Falar com um especialista
              <svg width="16" height="16" viewBox="0 0 22 12" fill="none">
                <path d="M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z" fill="#002855" />
              </svg>
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.65, ease: "easeOut", delay: 0.15 }}
          >
          <IpadTilt />
          </motion.div>
        </div>
        </div>
      </div>
    </div>
  );
}

import { motion } from "motion/react";

const valores = [
  {
    title: "Equipa",
    desc: "O espírito de equipa, a amizade e o respeito são a base de qualquer organização que cresce e se mantém saudável. Na ThinkDigital, isso não é um valor escrito na parede. É a forma como trabalhamos.",
    color: "#2F6FED",
    soft: "rgba(47,111,237,0.10)",
    icon: (
      <>
        <circle cx="18" cy="16" r="6" />
        <path d="M6 38c0-8 6-13 12-13s12 5 12 13" />
        <circle cx="34" cy="18" r="5" />
        <path d="M26 38c1-7 5-11 10-11s9 4 10 11" />
      </>
    ),
  },
  {
    title: "Inovação",
    desc: "Manter a inovação no centro do nosso trabalho é o que nos permite continuar a liderar. Não seguimos tendências, criamo-las.",
    color: "#8B5CF6",
    soft: "rgba(139,92,246,0.10)",
    icon: (
      <>
        <path d="M24 6c5 4 7 10 7 15 0 5-2 9-7 9s-7-4-7-9c0-5 2-11 7-15z" />
        <circle cx="24" cy="20" r="3.5" />
        <path d="M18 30l-4 8 4-2 2 4 4-8" />
        <path d="M30 30l4 8-4-2-2 4-4-8" />
      </>
    ),
  },
  {
    title: "Em Primeiro",
    desc: "Não gostamos de perder. Queremos ser sempre os primeiros e os melhores, com o cliente como foco absoluto de tudo o que fazemos.",
    color: "#D99A2B",
    soft: "rgba(217,154,43,0.12)",
    icon: (
      <>
        <circle cx="24" cy="18" r="10" />
        <text x="24" y="22" fontSize="11" textAnchor="middle" style={{ fill: "currentColor", stroke: "none" }}>
          1
        </text>
        <path d="M18 27l-4 13 10-5 10 5-4-13" />
      </>
    ),
  },
  {
    title: "Honestidade",
    desc: "Tratamos clientes, parceiros e colegas com rigor, foco e honestidade. É essa combinação que nos torna especiais.",
    color: "#16A34A",
    soft: "rgba(22,163,74,0.10)",
    icon: (
      <>
        <circle cx="24" cy="24" r="17" />
        <circle cx="17" cy="20" r="1.8" style={{ fill: "currentColor", stroke: "none" }} />
        <circle cx="31" cy="20" r="1.8" style={{ fill: "currentColor", stroke: "none" }} />
        <path d="M16 29c2.5 4 6 6 8 6s5.5-2 8-6" />
      </>
    ),
  },
];

export function ValoresSection() {
  return (
    <section className="bg-white">
      <motion.h2
        className="font-['Roboto',sans-serif] font-bold text-[28px] sm:text-[34px] lg:text-[40px] text-[#0d1a38] mb-8 leading-tight"
        initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.6, ease: "easeOut" }}
      >
        O que nos faz entregar
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
        {valores.map((v, i) => (
          <motion.div
            key={v.title}
            className="rounded-2xl p-6 sm:p-7 border border-[#e5e5ed] transition-shadow hover:shadow-lg"
            style={{ backgroundColor: v.soft }}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.09 }}
          >
            <svg
              viewBox="0 0 48 48"
              width="36"
              height="36"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ color: v.color }}
              className="mb-4"
            >
              {v.icon}
            </svg>
            <h3 className="font-['Roboto',sans-serif] font-semibold text-[18px] text-[#0d1a38] mb-2">
              {v.title}
            </h3>
            <p className="font-['Roboto',sans-serif] text-[14px] text-[#6b7a99] leading-relaxed">{v.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

import { motion } from "motion/react";
import wireframeLogo from "../../imports/Raquel/logo_thinkdigital_wireframe.svg";
import logoColor from "../../imports/HomepageDesktop/logo_thinkdigital_png.png";
import logoBlack from "../../imports/Raquel/logo_thinkdigital_full_black.png";
import logoWhite from "../../imports/Raquel/logo_thinkdigital_full_white.png";


const valores = [
  { t: "Proximidade", d: "Construímos relações duradouras com base na confiança e no conhecimento profundo do negócio de cada cliente." },
  { t: "Inovação", d: "Desafiamos o status quo com soluções que antecipam as necessidades do futuro antes de serem óbvias." },
  { t: "Rigor", d: "Comprometemo-nos com a excelência em cada projeto, desde a conceção até à entrega final." },
];

export default function Marca() {
  return (
    <div className="bg-white min-h-screen">

      {/* Hero */}
      <div className="relative h-[340px] sm:h-[420px] lg:h-[520px] flex items-center justify-center px-6 overflow-hidden bg-white">
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 0.8, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          style={{
            backgroundImage: `url(${wireframeLogo})`,
            backgroundSize: "110%",
            backgroundPosition: "center 65%",
            backgroundRepeat: "no-repeat",
          }}
        />
        <div className="relative z-10 text-center">
          <motion.h1
            className="font-['Roboto',sans-serif] font-bold text-[36px] sm:text-[56px] lg:text-[72px] text-[#002855] leading-[1.1] tracking-[-1.5px]"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            A simplicidade é<br />a sofisticação máxima
          </motion.h1>
        </div>
      </div>

      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-[80px] py-16 sm:py-24 flex flex-col gap-20 sm:gap-28">

        {/* Logótipo */}
        <motion.section
          className="text-center"
          initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.65, ease: "easeOut" }}
        >
          <h2 className="font-['Roboto',sans-serif] font-bold text-[26px] sm:text-[32px] text-[#002855] mb-4">Identidade Visual</h2>
          <p className="font-['Roboto',sans-serif] text-[15px] text-[#6b7a99] leading-relaxed max-w-[640px] mx-auto mb-8">
            O <span className="font-semibold text-[#002855]">th<span className="text-[#0085ca]">!</span>nk</span> com o "i" invertido funciona como ponto de exclamação. Representa novas ideias e o ato de pensar fora da caixa. Uma marca que não passa despercebida, porque não foi feita para isso.
          </p>
          <div className="flex justify-center mb-10">
            <a
              href="/logo_thinkdigital_guidelines.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#002855] text-white font-['Roboto',sans-serif] font-semibold text-[13px] px-5 py-2.5 rounded-xl hover:bg-[#0085ca] transition-colors whitespace-nowrap"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M12 3v12m0 0l-4-4m4 4l4-4M3 17v2a2 2 0 002 2h14a2 2 0 002-2v-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              Download Brand Guidelines (PDF)
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { bg: "bg-white", img: logoColor, alt: "ThinkDigital logo cor", label: "Versão Principal", labelClass: "text-[#b2bacc]" },
              { bg: "bg-white", img: logoBlack, alt: "ThinkDigital logo preto", label: "Versão Preta", labelClass: "text-[#b2bacc]" },
              { bg: "bg-black", img: logoWhite, alt: "ThinkDigital logo branco", label: "Versão Branca", labelClass: "text-white/40" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                className={`${item.bg} flex flex-col items-center justify-center gap-4 py-16 px-10`}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.1 }}
              >
                <img src={item.img} alt={item.alt} className="max-h-14 w-auto object-contain" />
                <span className={`font-['Roboto',sans-serif] text-[11px] ${item.labelClass} uppercase tracking-widest`}>{item.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Pantone / Paleta */}
        <motion.section
          initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.65, ease: "easeOut" }}
        >
          <h2 className="font-['Roboto',sans-serif] font-bold text-[26px] sm:text-[32px] text-[#002855] mb-10">Paleta de Cores</h2>

          {/* Pantone cards */}
          <div className="flex flex-col sm:flex-row gap-6 mb-10">
            {[
              { color: "bg-[#0085CA]", name: "PANTONE®", sub: "Process Blue C" },
              { color: "bg-[#002855]", name: "PANTONE® 295C", sub: "" },
            ].map((chip, i) => (
              <motion.div
                key={chip.name}
                className="flex flex-col w-full sm:w-[200px]"
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.12 }}
              >
                <div className={`h-[200px] sm:h-[240px] ${chip.color}`} />
                <div className="bg-white pt-3 pb-4">
                  <p className="font-bold text-[12px] text-[#1a1a1a] leading-tight">{chip.name}</p>
                  {chip.sub && <p className="font-bold text-[14px] text-[#1a1a1a] leading-tight">{chip.sub}</p>}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Color values */}
          <div className="flex flex-col sm:flex-row gap-10">
            <div className="flex gap-8 font-['Roboto',sans-serif] text-[13px]">
              <div className="flex flex-col gap-1.5 text-[#6b7a99] font-semibold">
                <span>HEX</span><span>RGB</span><span>CMYK</span><span>RAL</span>
              </div>
              <div className="flex flex-col gap-1.5 text-[#0d1a38]">
                <span>0085CA</span><span>0 133 202</span><span>100 15 0 6</span><span>5012</span>
              </div>
            </div>
            <div className="flex gap-8 font-['Roboto',sans-serif] text-[13px]">
              <div className="flex flex-col gap-1.5 text-[#6b7a99] font-semibold">
                <span>HEX</span><span>RGB</span><span>CMYK</span><span>RAL</span>
              </div>
              <div className="flex flex-col gap-1.5 text-[#0d1a38]">
                <span>002855</span><span>0 40 85</span><span>100 63 0 67</span><span>5026</span>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Valores */}
        <section>
          <motion.h2
            className="font-['Roboto',sans-serif] font-bold text-[26px] sm:text-[32px] text-[#002855] mb-10"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.55, ease: "easeOut" }}
          >Valores</motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {valores.map((v, i) => (
              <motion.div
                key={v.t}
                className="bg-[#f5f8ff] rounded-2xl p-7 flex flex-col gap-3"
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.1 }}
              >
                <div className="w-8 h-1 rounded-full bg-[#0085ca]" />
                <p className="font-['Roboto',sans-serif] font-bold text-[17px] text-[#002855]">{v.t}</p>
                <p className="font-['Roboto',sans-serif] text-[14px] text-[#6b7a99] leading-relaxed">{v.d}</p>
              </motion.div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}

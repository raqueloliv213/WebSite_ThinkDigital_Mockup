import { motion } from "motion/react";

export default function Contactos() {
  return (
    <div className="bg-white min-h-screen">

      {/* Hero */}
      <div className="bg-[#041b53] px-4 sm:px-6 lg:px-[80px] py-12 sm:py-20">
        <div className="max-w-[1100px] mx-auto">
          <motion.span
            className="inline-flex items-center px-3 py-1 rounded-full bg-white/20 text-white text-[13px] font-semibold mb-5 tracking-wide uppercase"
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.08 }}
          >
            Contactos
          </motion.span>
          <motion.h1
            className="font-['Roboto',sans-serif] font-bold text-[32px] sm:text-[44px] lg:text-[56px] text-white leading-[1.05] tracking-[-1.2px] mb-4"
            initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
          >
            Fale connosco
          </motion.h1>
          <motion.p
            className="font-['Roboto',sans-serif] text-[15px] sm:text-[18px] text-white max-w-[520px] leading-relaxed"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.34 }}
          >
            Estamos disponíveis para responder às suas questões e ajudar a encontrar a solução certa para o seu negócio.
          </motion.p>
        </div>
      </div>

      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-[80px] py-12 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 lg:gap-16">

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.65, ease: "easeOut" }}
          >
            <h2 className="font-['Roboto',sans-serif] font-bold text-[24px] sm:text-[28px] text-[#0d1a38] mb-8">
              Envie-nos uma mensagem
            </h2>
            <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label className="font-['Roboto',sans-serif] font-medium text-[13px] text-[#384561]">Nome</label>
                  <input
                    type="text"
                    placeholder="O seu nome"
                    className="border border-[#e5e5ed] rounded-xl px-4 py-3 text-[14px] text-[#0d1a38] placeholder:text-[#b2bacc] focus:outline-none focus:border-[#0085ca] transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-['Roboto',sans-serif] font-medium text-[13px] text-[#384561]">Empresa</label>
                  <input
                    type="text"
                    placeholder="Nome da empresa"
                    className="border border-[#e5e5ed] rounded-xl px-4 py-3 text-[14px] text-[#0d1a38] placeholder:text-[#b2bacc] focus:outline-none focus:border-[#0085ca] transition-colors"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-['Roboto',sans-serif] font-medium text-[13px] text-[#384561]">Email</label>
                <input
                  type="email"
                  placeholder="email@empresa.pt"
                  className="border border-[#e5e5ed] rounded-xl px-4 py-3 text-[14px] text-[#0d1a38] placeholder:text-[#b2bacc] focus:outline-none focus:border-[#0085ca] transition-colors"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-['Roboto',sans-serif] font-medium text-[13px] text-[#384561]">Assunto</label>
                <select className="border border-[#e5e5ed] rounded-xl px-4 py-3 text-[14px] text-[#0d1a38] focus:outline-none focus:border-[#0085ca] transition-colors bg-white">
                  <option value="">Selecione um assunto</option>
                  <option>Eficiência Energética</option>
                  <option>Efficient Factory</option>
                  <option>trackingDIARY® — Frotas</option>
                  <option>Inovação & IoT</option>
                  <option>Carreiras</option>
                  <option>Outro</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-['Roboto',sans-serif] font-medium text-[13px] text-[#384561]">Mensagem</label>
                <textarea
                  rows={5}
                  placeholder="Descreva o que precisa..."
                  className="border border-[#e5e5ed] rounded-xl px-4 py-3 text-[14px] text-[#0d1a38] placeholder:text-[#b2bacc] focus:outline-none focus:border-[#0085ca] transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="bg-[#0085ca] text-white font-['Roboto',sans-serif] font-semibold text-[15px] px-8 py-4 rounded-xl hover:bg-[#006fa8] transition-colors w-full"
              >
                Enviar mensagem
              </button>
            </form>
          </motion.div>

          {/* Info */}
          <motion.div
            className="flex flex-col gap-8 pt-2"
            initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.65, ease: "easeOut", delay: 0.1 }}
          >
            <h2 className="font-['Roboto',sans-serif] font-bold text-[24px] sm:text-[28px] text-[#0d1a38]">
              Informações de contacto
            </h2>

            {[
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" stroke="#0085ca" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                ),
                label: "Email",
                value: "comercial@thinkdigital.pt",
                href: "mailto:comercial@thinkdigital.pt",
              },
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" stroke="#0085ca" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                ),
                label: "Telefone",
                value: "+351 707 455 554",
                href: "tel:+351707455554",
              },
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" stroke="#0085ca" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" stroke="#0085ca" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                ),
                label: "Morada",
                value: "Aveiro, Portugal",
                href: "#",
              },
            ].map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="flex items-start gap-4 group"
                initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.45, ease: "easeOut", delay: 0.2 + i * 0.08 }}
              >
                <div className="w-10 h-10 rounded-xl bg-[#f0f4ff] flex items-center justify-center shrink-0 group-hover:bg-[#0085ca]/10 transition-colors">
                  {item.icon}
                </div>
                <div>
                  <div className="font-['Roboto',sans-serif] font-medium text-[12px] text-[#6b7a99] uppercase tracking-wide mb-1">{item.label}</div>
                  <div className="font-['Roboto',sans-serif] font-semibold text-[16px] text-[#0d1a38] group-hover:text-[#0085ca] transition-colors">{item.value}</div>
                </div>
              </motion.a>
            ))}

            <div className="mt-4 bg-[#f5f8ff] rounded-2xl p-7">
              <div className="font-['Roboto',sans-serif] font-semibold text-[15px] text-[#0d1a38] mb-2">Horário de atendimento</div>
              <div className="font-['Roboto',sans-serif] text-[14px] text-[#6b7a99] leading-relaxed">
                Segunda a Sexta: 09h00 – 18h30<br />
                Sábado e Domingo: Encerrado
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}

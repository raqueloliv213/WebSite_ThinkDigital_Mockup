import { useState } from "react";
import { motion } from "motion/react";
import { X } from "lucide-react";

interface Job {
  role: string;
  area: string;
  type: string;
}

function CandidaturaModal({ job, onClose }: { job: Job; onClose: () => void }) {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white w-full max-w-xl rounded-2xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-[#041b53] px-6 py-5 flex items-start justify-between gap-4">
          <div>
            <p className="font-['Roboto',sans-serif] text-[12px] text-white/60 uppercase tracking-widest mb-1">{job.area} · {job.type}</p>
            <h2 className="font-['Roboto',sans-serif] font-bold text-[20px] text-white">{job.role}</h2>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors shrink-0 mt-0.5"
            aria-label="Fechar"
          >
            <X size={16} className="text-white" />
          </button>
        </div>

        <div className="p-6">
          {submitted ? (
            <div className="text-center py-8">
              <div className="w-14 h-14 rounded-full bg-[#0085ca]/10 flex items-center justify-center mx-auto mb-4">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="#0085ca" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <p className="font-['Roboto',sans-serif] font-bold text-[18px] text-[#0d1a38] mb-2">Candidatura enviada!</p>
              <p className="font-['Roboto',sans-serif] text-[14px] text-[#6b7a99]">Entraremos em contacto brevemente.</p>
            </div>
          ) : (
            <form
              className="flex flex-col gap-4"
              onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="font-['Roboto',sans-serif] font-medium text-[13px] text-[#384561]">Nome</label>
                  <input required type="text" placeholder="O teu nome" className="border border-[#e5e5ed] rounded-xl px-4 py-3 text-[14px] text-[#0d1a38] placeholder:text-[#b2bacc] focus:outline-none focus:border-[#0085ca] transition-colors" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="font-['Roboto',sans-serif] font-medium text-[13px] text-[#384561]">Email</label>
                  <input required type="email" placeholder="email@exemplo.pt" className="border border-[#e5e5ed] rounded-xl px-4 py-3 text-[14px] text-[#0d1a38] placeholder:text-[#b2bacc] focus:outline-none focus:border-[#0085ca] transition-colors" />
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="font-['Roboto',sans-serif] font-medium text-[13px] text-[#384561]">Telefone</label>
                <input type="tel" placeholder="+351 9XX XXX XXX" className="border border-[#e5e5ed] rounded-xl px-4 py-3 text-[14px] text-[#0d1a38] placeholder:text-[#b2bacc] focus:outline-none focus:border-[#0085ca] transition-colors" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="font-['Roboto',sans-serif] font-medium text-[13px] text-[#384561]">Mensagem</label>
                <textarea rows={4} placeholder="Apresenta-te brevemente..." className="border border-[#e5e5ed] rounded-xl px-4 py-3 text-[14px] text-[#0d1a38] placeholder:text-[#b2bacc] focus:outline-none focus:border-[#0085ca] transition-colors resize-none" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="font-['Roboto',sans-serif] font-medium text-[13px] text-[#384561]">CV (PDF)</label>
                <input type="file" accept=".pdf,.doc,.docx" className="border border-[#e5e5ed] rounded-xl px-4 py-3 text-[13px] text-[#6b7a99] focus:outline-none focus:border-[#0085ca] transition-colors file:mr-3 file:py-1 file:px-3 file:rounded-lg file:border-0 file:bg-[#f0f4ff] file:text-[#0085ca] file:font-semibold file:text-[12px]" />
              </div>
              <button
                type="submit"
                className="bg-[#0085ca] text-white font-['Roboto',sans-serif] font-semibold text-[15px] px-8 py-3.5 rounded-xl hover:bg-[#006fa8] transition-colors w-full mt-1"
              >
                Enviar candidatura
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

const jobs = [
  { role: "Técnico Comercial", area: "Comercial", type: "Full-time · Presencial" },
];

export default function Carreiras() {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  return (
    <div className="bg-white min-h-screen">
      <div className="relative h-[340px] sm:h-[380px] lg:h-[420px] flex items-center justify-center px-4 sm:px-6 lg:px-[80px] overflow-hidden">
        <img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920" alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "rgba(4, 27, 83, 0.55)" }} />
        <div className="relative z-10 text-center max-w-[700px]">
          <motion.h1
            className="font-['Roboto',sans-serif] font-bold text-[32px] sm:text-[44px] lg:text-[56px] text-white leading-[1.1] tracking-[-1px] mb-4"
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
          >Carreiras</motion.h1>
          <motion.p
            className="font-['Roboto',sans-serif] text-[15px] sm:text-[18px] text-white/80 leading-relaxed"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.26 }}
          >
            Oportunidades de emprego para quem quer fazer parte de uma equipa que está a moldar o futuro da indústria digital.
          </motion.p>
        </div>
      </div>

      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-[80px] py-12 sm:py-20">
        <motion.h2
          className="font-['Roboto',sans-serif] font-bold text-[26px] sm:text-[32px] text-[#0d1a38] mb-10"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.55, ease: "easeOut" }}
        >Posições em aberto</motion.h2>
        <div className="space-y-4">
          {jobs.map((job, i) => (
            <motion.div
              key={job.role}
              onClick={() => setSelectedJob(job)}
              className="flex items-center justify-between gap-4 p-4 sm:p-6 rounded-2xl border border-[#e5e5ed] hover:border-[#0085ca] hover:bg-[#f5f8ff] transition-all group cursor-pointer"
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.08 }}
            >
              <div>
                <div className="font-['Roboto',sans-serif] font-semibold text-[16px] sm:text-[17px] text-[#0d1a38] group-hover:text-[#0085ca] transition-colors">{job.role}</div>
                <div className="font-['Roboto',sans-serif] text-[14px] text-[#6b7a99] mt-1">{job.area} · {job.type}</div>
              </div>
              <svg width="20" height="20" viewBox="0 0 22 12" fill="none" className="shrink-0 opacity-40 group-hover:opacity-100 transition-opacity">
                <path d="M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z" fill="#0085ca" />
              </svg>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 bg-[#041b53] rounded-3xl p-6 sm:p-12 text-center"
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="font-['Roboto',sans-serif] font-bold text-[22px] sm:text-[28px] text-white mb-3">Candidatura espontânea</h2>
          <p className="text-white/70 text-[16px] mb-8 max-w-[500px] mx-auto">Não encontraste o que procuras? Envia-nos o teu CV e entraremos em contacto.</p>
          <a href="mailto:rh@thinkdigital.pt" className="inline-flex items-center gap-3 bg-[#0085ca] text-white px-8 py-4 rounded-xl font-semibold text-[15px] hover:bg-[#006fa8] transition-colors">
            Enviar candidatura
          </a>
        </motion.div>
      </div>

      {selectedJob && (
        <CandidaturaModal job={selectedJob} onClose={() => setSelectedJob(null)} />
      )}
    </div>
  );
}

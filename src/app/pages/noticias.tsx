import { useState } from "react";
import { motion } from "motion/react";
import { ChevronRight, ChevronsRight, X } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../components/ui/tabs";
import eventoMaquina from "../../imports/Raquel/eventos/7.jpg";
import eventoTech360 from "../../imports/Raquel/eventos/tech360.png";
import eventoNewSpace from "../../imports/Raquel/eventos/newspace.jpg";

/* ── Newsletter modal ── */
function NewsletterModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null;
  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl w-full max-w-3xl flex flex-col overflow-hidden shadow-2xl"
        style={{ height: "90vh" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#e5e5ed] shrink-0">
          <div>
            <span className="font-['Roboto',sans-serif] font-bold text-[16px] text-[#002855]">
              Newsletter #1
            </span>
            <span className="font-['Roboto',sans-serif] text-[13px] text-[#6b7a99] ml-3">
              25 de Março de 2025
            </span>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-[#f5f5f7] hover:bg-[#e5e5ed] flex items-center justify-center transition-colors"
            aria-label="Fechar"
          >
            <X size={18} className="text-[#002855]" />
          </button>
        </div>
        <iframe
          src="/newsletters/newsletter-1.html"
          title="Newsletter #1"
          className="flex-1 w-full border-0"
        />
      </div>
    </div>
  );
}

/* ── Newsletter card ── */
interface NewsletterCardProps {
  number: string;
  date: string;
  title: string;
  image: string;
  onRead: () => void;
}

function NewsletterCard({ number, date, title, image, onRead }: NewsletterCardProps) {
  return (
    <div className="w-full sm:w-[320px] relative group bg-white border border-[#e5e5ed] overflow-hidden rounded-xl">
      <figure className="w-full h-52 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full scale-105 group-hover:scale-100 object-cover transition-all duration-300"
        />
      </figure>
      <div className="p-5 space-y-2">
        <span className="font-['Roboto',sans-serif] text-[12px] text-[#6b7a99]">{date}</span>
        <p className="font-['Roboto',sans-serif] font-bold text-[15px] text-[#002855] leading-snug">
          {title}
        </p>
        <div className="flex items-center gap-2 pt-1">
          <span className="font-['Roboto',sans-serif] text-[11px] font-semibold text-[#6b7a99] bg-[#f5f5f7] px-2 py-0.5 rounded-md">
            #{number}
          </span>
        </div>
        <button
          onClick={onRead}
          className="mt-2 bg-transparent border border-[#002855] text-[#002855] rounded-lg font-['Roboto',sans-serif] font-semibold text-[13px] px-4 py-2 flex items-center gap-1 hover:bg-[#002855]/5 transition-colors w-fit group/btn"
        >
          Ler Newsletter
          <span className="relative w-5 h-5 overflow-hidden flex items-center justify-center">
            <ChevronRight
              size={16}
              className="absolute group-hover/btn:opacity-0 group-hover/btn:translate-y-2 opacity-100 translate-y-0 transition-all duration-300"
            />
            <ChevronsRight
              size={16}
              className="absolute group-hover/btn:opacity-100 group-hover/btn:translate-y-0 opacity-0 translate-y-2 transition-all duration-300"
            />
          </span>
        </button>
      </div>
    </div>
  );
}

const newsletters = [
  {
    number: "1",
    date: "25 mar 2025",
    title: "Por Dentro da Produção — ThinkDigital × NOS",
    image: eventoMaquina,
    src: "/newsletters/newsletter-1.html",
  },
];

/* ── Newsletter signup ── */
function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <section className="border border-[#e5e5ed] rounded-2xl px-6 sm:px-10 py-10 sm:py-14">
      <div className="max-w-[600px] mx-auto text-center">
        <h2 className="font-['Roboto',sans-serif] font-bold text-[24px] sm:text-[30px] text-[#002855] leading-tight">
          Newsletter
        </h2>
        <p className="font-['Roboto',sans-serif] text-[15px] sm:text-[16px] text-[#6b7a99] mt-3 leading-relaxed">
          Subscreve a nossa newsletter e recebe em primeira mão as novidades, projetos e eventos da ThinkDigital.
        </p>
        {submitted ? (
          <p className="font-['Roboto',sans-serif] font-semibold text-[15px] text-[#0085ca] mt-6">
            Obrigado! A tua inscrição foi recebida.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 mt-7">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="o-teu-email@empresa.pt"
              className="flex-1 border border-[#e5e5ed] rounded-xl px-4 py-3 text-[14px] text-[#002855] placeholder:text-[#b2bacc] bg-white focus:outline-none focus:border-[#0085ca] transition-colors"
            />
            <button
              type="submit"
              className="bg-[#0085ca] text-white font-['Roboto',sans-serif] font-semibold text-[14px] px-6 py-3 rounded-xl hover:bg-[#006fa8] transition-colors whitespace-nowrap"
            >
              Inscrever
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

interface EventoCardProps {
  tag: string;
  title: string;
  description: string;
  date: string;
  location: string;
  image: string;
  href?: string;
}

function EventoCard({ tag, title, description, date, location, image, href }: EventoCardProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-0 rounded-2xl overflow-hidden border border-[#e5e5ed]">
      <div className="sm:w-[260px] shrink-0 h-[180px] sm:h-auto overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="flex flex-col justify-between p-6 sm:p-8 flex-1">
        <div>
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#0085ca]/10 text-[#0085ca] text-[12px] font-semibold mb-4">
            {tag}
          </span>
          <h3 className="font-['Roboto',sans-serif] font-bold text-[18px] sm:text-[20px] text-[#002855] mb-3 leading-snug">
            {title}
          </h3>
          <p className="font-['Roboto',sans-serif] text-[14px] text-[#6b7a99] leading-relaxed">
            {description}
          </p>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 mt-6">
          <div className="flex items-center gap-4 text-[13px] text-[#6b7a99]">
            <span className="flex items-center gap-1.5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><rect x="3" y="4" width="18" height="18" rx="2" stroke="#0085ca" strokeWidth="2"/><path d="M16 2v4M8 2v4M3 10h18" stroke="#0085ca" strokeWidth="2" strokeLinecap="round"/></svg>
              {date}
            </span>
            <span className="flex items-center gap-1.5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="#0085ca"/></svg>
              {location}
            </span>
          </div>
          {href && (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="sm:ml-auto font-['Roboto',sans-serif] font-semibold text-[13px] text-[#0085ca] hover:underline"
            >
              Saber mais →
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

const eventos: EventoCardProps[] = [
  {
    tag: "Evento · Tech Industry 360",
    title: "Tech Industry 360",
    description:
      "Nos dias 20 e 21 de maio, a ThinkDigital marcou presença no evento Tech Industry 360, em Exponor, em parceria com a NOS. A equipa levou a fábrica até ao evento, apresentando ao vivo a solução Efficient Factory — uma plataforma end-to-end para a digitalização e supervisão de processos industriais.",
    date: "20 e 21 de Maio de 2025",
    location: "Exponor, Porto",
    image: eventoTech360,
    href: "https://exponor.pt/360-tech-industry/",
  },
  {
    tag: "I&D · New Space Portugal",
    title: "New Space Portugal",
    description:
      "No dia 19 de maio, a ThinkDigital esteve presente no evento New Space Portugal, com presença na receção de convidados e acompanhamento dos participantes até à apresentação do primeiro protótipo de IoT e 5G NTN para monitorização remota — um marco no reforço da cadeia de valor nacional no setor espacial.",
    date: "19 de Maio de 2025",
    location: "Portugal",
    image: eventoNewSpace,
  },
  {
    tag: "Evento · Por Dentro da Produção",
    title: "Por Dentro da Produção",
    description:
      "No dia 25 de março, realizou-se o evento \"Por Dentro da Produção\" com grande sucesso. A ThinkDigital assegurou o registo fotográfico dos momentos-chave — apresentações, networking, coffee break e interação dos convidados com o showroom da Efficient Factory. O coffee break revelou-se um momento estratégico para a equipa comercial qualificar leads e estabelecer contactos B2B.",
    date: "25 de Março de 2025",
    location: "Portugal",
    image: eventoMaquina,
  },
];

/* ── Tabs container ── */
function NewsletterEventosTabs() {
  const [openNewsletter, setOpenNewsletter] = useState<string | null>(null);

  return (
    <>
      <NewsletterModal
        open={openNewsletter !== null}
        onClose={() => setOpenNewsletter(null)}
      />

      <Tabs defaultValue="newsletter">
        <TabsList className="h-auto bg-[#f5f5f7] rounded-xl p-1.5 w-fit mx-auto">
          <TabsTrigger
            value="newsletter"
            className="font-['Roboto',sans-serif] font-semibold text-[14px] px-6 py-2.5 rounded-lg data-[state=active]:bg-white data-[state=active]:text-[#0085ca] data-[state=active]:shadow-sm text-[#6b7a99]"
          >
            Newsletter
          </TabsTrigger>
          <TabsTrigger
            value="eventos"
            className="font-['Roboto',sans-serif] font-semibold text-[14px] px-6 py-2.5 rounded-lg data-[state=active]:bg-white data-[state=active]:text-[#0085ca] data-[state=active]:shadow-sm text-[#6b7a99]"
          >
            Eventos
          </TabsTrigger>
        </TabsList>

        <TabsContent value="newsletter" className="mt-8">
          <div className="flex flex-wrap gap-6">
            {newsletters.map((n) => (
              <NewsletterCard
                key={n.number}
                number={n.number}
                date={n.date}
                title={n.title}
                image={n.image}
                onRead={() => setOpenNewsletter(n.src)}
              />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="eventos" className="mt-8">
          <div className="flex flex-col gap-6">
            {eventos.map((e) => (
              <EventoCard key={e.title} {...e} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </>
  );
}

export default function Noticias() {
  return (
    <div className="bg-white min-h-screen">
      <section className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-[80px] py-20 sm:py-28 text-center">
        <motion.h1
          className="font-['Roboto',sans-serif] font-bold text-[32px] sm:text-[48px] text-[#002855] leading-tight"
          initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
        >
          Notícias
        </motion.h1>
        <motion.p
          className="font-['Roboto',sans-serif] text-[16px] sm:text-[18px] text-[#6b7a99] max-w-[600px] mx-auto mt-6 leading-relaxed"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.26 }}
        >
          Em breve, as últimas notícias da ThinkDigital. Entretanto, fica a par através da newsletter ou dos nossos eventos.
        </motion.p>
      </section>

      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-[80px] pb-20 sm:pb-28 flex flex-col gap-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <NewsletterEventosTabs />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <NewsletterSignup />
        </motion.div>
      </div>
    </div>
  );
}

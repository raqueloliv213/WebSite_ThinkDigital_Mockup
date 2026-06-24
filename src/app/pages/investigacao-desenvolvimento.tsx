import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { X, ChevronsRight, ExternalLink } from 'lucide-react';
import earthVideo      from '../../imports/Raquel/earth_rotating.mp4';
import imgSatellite    from '../../imports/Raquel/background_satellite.jpg';
import imgHospital     from '../../imports/Raquel/hero_hospital_bw.jpg';
import imgVideocall    from '../../imports/Raquel/hero_nurse_videocall.jpg';
import logoSdrt        from '../../imports/Raquel/logo_sdrt.svg';
import logoIT          from '../../imports/Raquel/106edit.png';
import logoSomosSaude  from '../../imports/Raquel/107edit.png';
import logoVodafone    from '../../imports/Raquel/108edit.png';

/* ─── Types ─── */
type Project = {
  id: number;
  image: string;
  logoOverlay?: string;
  title: string;
  tag: string;
  summary: string;
  website: string;
  Content: () => React.ReactElement;
};

/* ─── Helpers ─── */
function Field({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div>
      <dt className="text-[11px] font-semibold text-[#0085ca] uppercase tracking-wider mb-[3px]">
        {label}
      </dt>
      <dd className="text-[14px] text-[#2d3a4a] leading-relaxed">{value}</dd>
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-[16px] font-bold text-[#002855] border-b border-[#e5e8f0] pb-2 mb-4 mt-6">
      {children}
    </h3>
  );
}

/* ─── Modal bodies ─── */
function ContentNewSpace() {
  return (
    <div className="text-[#3d4a5c]">
      <dl className="space-y-4">
        <Field label="Agenda" value="New Space Portugal" />
        <Field label="Líder do Consórcio" value="GEO SAT, Lda" />
      </dl>

      <SectionTitle>Descrição da Agenda</SectionTitle>
      <p className="text-[14px] leading-relaxed text-[#3d4a5c]">
        A Agenda Mobilizadora New Space Portugal estabelece, pela primeira vez em Portugal, capacidade para conceber, desenvolver e produzir satélites completos, payloads e serviços transacionáveis de alto valor acrescentado, baseados na exploração de dados de Observação da Terra a partir do Espaço, impulsionando a cadeia de valor nacional para um mercado em rápido crescimento mundial.
      </p>
      <p className="text-[14px] leading-relaxed text-[#3d4a5c] mt-3">
        Em paralelo, o projeto expande o portfólio do operador de satélites português GEOSAT e reforça a posição de empresas nacionais nas aplicações práticas dos dados de satélite, criando uma oferta focada no mercado com alto valor agregado.
      </p>

      <SectionTitle>Datas &amp; Investimento</SectionTitle>
      <dl className="grid grid-cols-2 gap-x-6 gap-y-4">
        <Field label="Data de Início"     value="01.01.2022" />
        <Field label="Data de Conclusão"  value="31.12.2025" />
        <Field
          label="Investimento (Agenda)"
          value={<span className="font-semibold">177 942 155,13 €</span>}
        />
        <Field
          label="Apoio da União Europeia"
          value={
            <>
              <span className="font-semibold">137 364 121,24 €</span>
              <span className="text-[12px] text-[#6b7a99] ml-1">(NextGenerationEU)</span>
            </>
          }
        />
      </dl>

      <SectionTitle>Objetivo, atividades e resultados esperados</SectionTitle>
      <p className="text-[14px] leading-relaxed text-[#3d4a5c] mb-3">
        Promover uma mudança estrutural no perfil de especialização da economia portuguesa através do desenvolvimento, produção e operação de constelações de satélites, potenciando a criação de produtos e serviços inovadores de base espacial integrados na filosofia New Space.
      </p>
      <ul className="text-[14px] text-[#3d4a5c] space-y-1 list-none">
        {[
          'Constelação de satélites de Muita Alta Resolução',
          'Constelação de satélites de Alta Resolução',
          'Constelação de satélites VDES',
          'Constelação de satélites SAR',
          'Planeta Digital, plataforma digital para integrar múltiplos dados de múltiplas fontes e fornecer serviços de valor acrescentado',
        ].map((item) => (
          <li key={item} className="flex items-start gap-2">
            <span className="mt-[6px] w-1.5 h-1.5 rounded-full bg-[#0085ca] shrink-0" />
            {item}
          </li>
        ))}
      </ul>

      <SectionTitle>Participação ThinkDigital</SectionTitle>
      <dl className="grid grid-cols-2 gap-x-6 gap-y-4 bg-[#f4f8fd] rounded-xl p-4">
        <Field
          label="Entidade Beneficiária"
          value={<span className="font-medium">Thinkdigital II — Telematics, S.A.</span>}
        />
        <Field label="" value="" />
        <Field
          label="Investimento (Beneficiário)"
          value={<span className="font-semibold">1 172 000,02 €</span>}
        />
        <Field
          label="Apoio da União Europeia"
          value={<span className="font-semibold">792 799,81 €</span>}
        />
      </dl>
    </div>
  );
}

function ContentSDRT() {
  return (
    <div className="text-[#3d4a5c]">
      <dl className="space-y-4">
        <Field
          label="Designação do projeto"
          value={<span className="font-medium">SDRT Health — Software Defined Real-Time Health</span>}
        />
        <Field label="Código do projeto" value="POCI-01-0247-FEDER-070192" />
        <Field
          label="Objetivo principal"
          value="Reforçar a pesquisa, o desenvolvimento tecnológico e a inovação"
        />
        <Field label="Região de intervenção" value="Centro e Norte" />
      </dl>

      <SectionTitle>Entidade Beneficiária</SectionTitle>
      <p className="text-[14px] text-[#3d4a5c] leading-relaxed">
        THINKDIGITAL II, TELEMATICS, S.A. / Instituto de Telecomunicações / Policlínica Dr. Mário Martins Lda
      </p>

      <SectionTitle>Datas</SectionTitle>
      <dl className="grid grid-cols-1 sm:grid-cols-3 gap-x-6 gap-y-4">
        <Field label="Data de Aprovação"  value="11.05.2021" />
        <Field label="Data de Início"     value="04.04.2021" />
        <Field label="Data de Conclusão"  value="30.06.2023" />
      </dl>

      <SectionTitle>Financiamento</SectionTitle>
      <dl className="grid grid-cols-2 gap-x-6 gap-y-4">
        <Field
          label="Custo total elegível"
          value={
            <>
              <span className="font-semibold">608 797,16 €</span>
              <span className="text-[12px] text-[#6b7a99]"> (Total)</span>
              <span className="mx-1 text-[#ccc]">/</span>
              <span className="font-semibold">155 619,43 €</span>
              <span className="text-[12px] text-[#6b7a99]"> (IT)</span>
            </>
          }
        />
        <Field
          label="Apoio FEDER — COMPETE 2020"
          value={
            <>
              <span className="font-semibold">429 966,28 €</span>
              <span className="text-[12px] text-[#6b7a99]"> (Total)</span>
              <span className="mx-1 text-[#ccc]">/</span>
              <span className="font-semibold">116 714,57 €</span>
              <span className="text-[12px] text-[#6b7a99]"> (IT)</span>
            </>
          }
        />
      </dl>

      <SectionTitle>Objetivos do Projeto</SectionTitle>
      <p className="text-[14px] leading-relaxed text-[#3d4a5c]">
        Desenvolvimento de antenas com baixo impacto visual nos hospitais para localização precisa dos profissionais de saúde, em tempo real.
      </p>

      <SectionTitle>Parceiros</SectionTitle>
      <div className="flex items-center gap-12 flex-wrap">
        <img src={logoIT}         alt="Instituto de Telecomunicações" className="h-16 w-auto object-contain" />
        <img src={logoSomosSaude} alt="Somos Saúde"                   className="h-16 w-auto object-contain" />
        <img src={logoVodafone}   alt="Vodafone"                      className="h-16 w-auto object-contain" />
      </div>
    </div>
  );
}

function ContentFacerehab() {
  return (
    <div className="text-[#3d4a5c]">
      <p className="text-[15px] font-medium text-[#002855] leading-relaxed mb-5">
        A FaceRehab desenvolve um dispositivo e o software associado, criados especificamente para responder às necessidades dos utilizadores envolvidos na reabilitação da paralisia facial. O dispositivo inclui interfaces e sensores que permitem uma interação natural entre humanos e máquinas.
      </p>

      <SectionTitle>Informação do Projeto</SectionTitle>
      <dl className="grid grid-cols-2 gap-x-6 gap-y-4">
        <Field label="Coordenador"   value="Instituto Pedro Nunes – IPN" />
        <Field label="Duração"       value="24 meses" />
        <Field label="Início"        value="1 de maio de 2021" />
        <Field label="Conclusão"     value="30 de abril de 2023" />
      </dl>

      <SectionTitle>Financiamento Público</SectionTitle>
      <dl className="grid grid-cols-2 gap-x-6 gap-y-4 bg-[#f4f8fd] rounded-xl p-4">
        <Field
          label="Orçamento total"
          value={<span className="font-semibold text-[#002855]">821 812,50 €</span>}
        />
        <Field
          label="Contribuição pública"
          value={<span className="font-semibold text-[#002855]">681 906,25 €</span>}
        />
      </dl>
    </div>
  );
}

/* ─── Project data ─── */
const PROJECTS: Project[] = [
  {
    id: 1,
    image: imgSatellite,
    title: 'New Space Portugal',
    tag: 'Espaço & Satélites',
    summary: 'Conceber, desenvolver e produzir satélites e cargas úteis completos para serviços de alto valor acrescentado.',
    website: 'https://www.newspaceportugal.org/',
    Content: ContentNewSpace,
  },
  {
    id: 2,
    image: imgHospital,
    logoOverlay: logoSdrt,
    title: 'Software Defined Real Time Health',
    tag: 'IoT & Saúde',
    summary: 'Tecnologia IoT aplicada à saúde em tempo real, para hospitais mais eficientes e conectados.',
    website: 'https://www.sdrthealth.eu/',
    Content: ContentSDRT,
  },
  {
    id: 3,
    image: imgVideocall,
    title: 'Facerehab',
    tag: 'MedTech & Reabilitação',
    summary: 'Reabilitação facial assistida por tecnologia, com dispositivos e software desenvolvidos à medida dos utilizadores.',
    website: 'https://facerehab.las.ipn.pt/',
    Content: ContentFacerehab,
  },
];

/* ─── Hero ─── */
function Hero() {
  return (
    <div className="relative w-full h-screen overflow-hidden flex items-center justify-center px-4 sm:px-6 lg:px-[80px]">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={earthVideo}
        autoPlay
        muted
        loop
        playsInline
        aria-hidden
      />
      <div className="absolute inset-0 bg-[#000c1e]/60" />

      <div className="relative z-10 flex flex-col items-center gap-6 max-w-[860px] text-center">
        <motion.p
          className="text-[#0085ca] text-sm font-semibold uppercase tracking-widest"
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
        >
          Investigação &amp; Desenvolvimento
        </motion.p>
        <motion.h1
          className="font-['Roboto',sans-serif] font-bold text-[36px] sm:text-[50px] lg:text-[64px] text-white leading-[1.1] tracking-[-1.28px]"
          initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.34 }}
        >
          Tecnologia que<br />
          <span className="text-[#0085ca]">muda o mundo</span>
        </motion.h1>
        <motion.p
          className="font-['Roboto',sans-serif] text-[15px] sm:text-[17px] text-white/70 max-w-[520px] leading-relaxed"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }}
        >
          Na ThinkDigital, a inovação não é um objetivo. É o processo. Investigamos, desenvolvemos e implementamos soluções que definem o futuro digital.
        </motion.p>
      </div>
    </div>
  );
}

/* ─── Project card ─── */
function ProjectCard({ project, onClick }: { project: Project; onClick: () => void }) {
  return (
    <div
      className="w-full relative h-[340px] sm:h-[460px] lg:h-[520px] group cursor-pointer overflow-hidden rounded-xl text-white"
      onClick={onClick}
    >
      {/* Background image */}
      <figure className="w-full h-full overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full scale-105 group-hover:scale-100 object-cover transition-all duration-500"
        />
      </figure>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#002855]/10 via-[#002855]/40 to-[#002855]/95 transition-all duration-300" />

      {/* Logo overlay (SDRT) */}
      {project.logoOverlay && (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none pb-20">
          <img
            src={project.logoOverlay}
            alt={`${project.title} logo`}
            className="h-14 w-auto object-contain drop-shadow-lg"
          />
        </div>
      )}

      {/* Title pinned to bottom; description expands upward on hover */}
      <article className="absolute inset-x-0 bottom-0 p-5">
        <h2 className="text-xl font-semibold text-white leading-snug w-[92%]">
          {project.title}
        </h2>
        {/* grid-rows trick: 0fr → 1fr gives a smooth height transition */}
        <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-300 ease-out">
          <div className="overflow-hidden">
            <p className="text-sm text-white/80 mt-3 leading-snug opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
              {project.summary}
            </p>
            <span className="text-sm text-white mt-2 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150">
              Ler mais
              <ChevronsRight size={16} />
            </span>
          </div>
        </div>
      </article>
    </div>
  );
}

/* ─── Modal ─── */
function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);

    // Lock scroll without losing position
    const scrollY = window.scrollY;
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = '100%';

    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      window.scrollTo(0, scrollY);
    };
  }, [onClose]);

  const Content = project.Content;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-10 overflow-y-auto"
      style={{ background: 'rgba(0,0,0,0.72)', backdropFilter: 'blur(5px)' }}
      onClick={onClose}
    >
      <div
        className="relative bg-white w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl mb-12"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header image */}
        <div className="relative h-60 w-full overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to bottom, transparent 20%, rgba(0,15,40,0.90) 100%)',
            }}
          />

          {/* Logo overlay on header (SDRT) */}
          {project.logoOverlay && (
            <div className="absolute inset-0 flex items-center justify-center pb-16">
              <img
                src={project.logoOverlay}
                alt={`${project.title} logo`}
                className="h-12 w-auto object-contain drop-shadow-lg"
              />
            </div>
          )}

          {/* Close button */}
          <button
            className="absolute top-4 right-4 w-9 h-9 bg-black/40 hover:bg-black/65 text-white rounded-full flex items-center justify-center transition-colors backdrop-blur-sm"
            onClick={onClose}
            aria-label="Fechar"
          >
            <X size={18} />
          </button>

          {/* Title */}
          <div className="absolute bottom-5 left-6 right-16">
            <span className="text-xs font-semibold text-[#0085ca] uppercase tracking-widest">
              {project.tag}
            </span>
            <h2 className="text-2xl font-bold text-white mt-1 leading-tight">
              {project.title}
            </h2>
          </div>
        </div>

        {/* Body */}
        <div className="p-5 sm:p-8">
          <Content />

          {/* External link */}
          <a
            href={project.website}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 bg-[#002855] hover:bg-[#003a75] text-white text-[14px] font-semibold px-5 py-3 rounded-lg transition-colors"
          >
            Visitar website
            <ExternalLink size={15} />
          </a>
        </div>
      </div>
    </div>
  );
}

/* ─── Page ─── */
export default function InvestigacaoDesenvolvimento() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <div className="bg-white w-full min-h-screen flex flex-col">
      <Hero />

      <section className="px-4 sm:px-8 lg:px-[60px] py-12 sm:py-16 lg:py-20">
        <motion.div
          className="mb-10 text-center"
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="font-['Roboto',sans-serif] font-bold text-[28px] sm:text-[36px] lg:text-[44px] text-[#002855] tracking-tight mb-3">
            Projetos em destaque
          </h2>
          <p className="font-['Roboto',sans-serif] text-[16px] sm:text-[18px] text-[#6b7a99] max-w-[560px] mx-auto leading-relaxed">
            Projetos em que a ThinkDigital participa ativamente, do espaço à saúde digital.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.55, ease: "easeOut", delay: i * 0.1 }}
            >
              <ProjectCard
                project={project}
                onClick={() => setSelected(project)}
              />
            </motion.div>
          ))}
        </div>
      </section>

      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </div>
  );
}

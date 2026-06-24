import { useState, useRef } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Link } from "react-router";
import imgLogo from "../../imports/HomepageDesktop/logo_thinkdigital_png.png";

const menus = {
  Soluções: [
    { title: "Energia",           sub: "Gestão energética inteligente",           to: "/solucoes/energia" },
    { title: "Tracking Diary",    sub: "Plataforma de gestão de operações",        to: "https://www.trackingdiary.com/",    external: true },
    { title: "Efficient Factory", sub: "Fábrica do futuro para a indústria",       to: "https://www.efficient-factory.com/", external: true },
    { title: "Investigação & Desenvolvimento", sub: "Projetos de I&D e inovação aplicada", to: "/solucoes/investigacao-desenvolvimento" },
  ],
  Sobre: [
    { title: "Empresa",   sub: "Quem somos e o que fazemos",           to: "/sobre/empresa" },
    { title: "Inovação",  sub: "Projetos inovadores",            to: "/sobre/inovacao" },
    { title: "Marca",     sub: "Identidade e valores ThinkDigital",      to: "/sobre/marca" },
    { title: "Notícias",  sub: "Últimas notícias e novidades",      to: "/noticias" },
  ],
  Carreira: [
    { title: "Carreiras", sub: "Oportunidades de emprego",             to: "/carreira/carreiras" },
    { title: "Estágios",  sub: "Programas de estágio curricular",       to: "/carreira/estagios" },
  ],
} as const;

type MenuKey = keyof typeof menus;

function ItemIcon() {
  return (
    <div className="w-9 h-9 rounded-lg bg-[#f0f4ff] flex items-center justify-center shrink-0">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <rect x="2" y="2" width="5" height="5" rx="1" fill="#177aff" />
        <rect x="9" y="2" width="5" height="5" rx="1" fill="#0085ca" />
        <rect x="2" y="9" width="5" height="5" rx="1" fill="#0085ca" />
        <rect x="9" y="9" width="5" height="5" rx="1" fill="#177aff" />
      </svg>
    </div>
  );
}

function Dropdown({ items }: { items: readonly { title: string; sub: string; to: string; external?: boolean }[] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ type: "spring", damping: 28, stiffness: 380 }}
      className="absolute top-[calc(100%+8px)] left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.10)] border border-[#e5e5ed] p-2 min-w-[280px] z-50"
    >
      <div className="absolute -top-[6px] left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-l border-t border-[#e5e5ed] rotate-45" />
      {items.map((item) =>
        item.external ? (
          <a
            key={item.title}
            href={item.to}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-[#f5f8ff] transition-colors group"
          >
            <ItemIcon />
            <div className="flex flex-col">
              <span className="font-['Roboto',sans-serif] font-semibold text-[14px] text-[#0d1a38] group-hover:text-[#177aff] transition-colors">{item.title}</span>
              <span className="font-['Roboto',sans-serif] text-[12px] text-[#6b7a99] leading-snug mt-0.5">{item.sub}</span>
            </div>
          </a>
        ) : (
          <Link
            key={item.title}
            to={item.to}
            className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-[#f5f8ff] transition-colors group"
          >
            <ItemIcon />
            <div className="flex flex-col">
              <span className="font-['Roboto',sans-serif] font-semibold text-[14px] text-[#0d1a38] group-hover:text-[#177aff] transition-colors">{item.title}</span>
              <span className="font-['Roboto',sans-serif] text-[12px] text-[#6b7a99] leading-snug mt-0.5">{item.sub}</span>
            </div>
          </Link>
        )
      )}
    </motion.div>
  );
}

function NavItem({ label }: { label: MenuKey }) {
  const [open, setOpen] = useState(false);
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const show = () => { if (timeout.current) clearTimeout(timeout.current); setOpen(true); };
  const hide = () => { timeout.current = setTimeout(() => setOpen(false), 120); };

  return (
    <div className="relative flex gap-[4px] items-center cursor-pointer select-none" onMouseEnter={show} onMouseLeave={hide}>
      <p className={`font-['Roboto',sans-serif] font-medium text-[14px] whitespace-nowrap transition-colors ${open ? "text-[#177aff]" : "text-[#384561]"}`}>
        {label}
      </p>
      <motion.div animate={{ rotate: open ? 0 : 180 }} transition={{ duration: 0.2 }}>
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path d="M3 4.5L6 7.5L9 4.5" stroke={open ? "#177aff" : "#475569"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </svg>
      </motion.div>
      <AnimatePresence>{open && <Dropdown items={menus[label]} />}</AnimatePresence>
    </div>
  );
}

function MobileMenuSection({ label, items, onNavigate }: { label: MenuKey; items: readonly { title: string; sub: string; to: string; external?: boolean }[]; onNavigate: () => void }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-[#e5e5ed]">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between py-4"
      >
        <span className="font-['Roboto',sans-serif] font-semibold text-[15px] text-[#0d1a38]">{label}</span>
        <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <svg width="14" height="14" viewBox="0 0 12 12" fill="none">
            <path d="M3 4.5L6 7.5L9 4.5" stroke="#475569" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="flex flex-col pb-3 gap-1">
              {items.map((item) =>
                item.external ? (
                  <a
                    key={item.title}
                    href={item.to}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={onNavigate}
                    className="flex items-center gap-3 px-2 py-2 rounded-xl hover:bg-[#f5f8ff] transition-colors"
                  >
                    <ItemIcon />
                    <div className="flex flex-col">
                      <span className="font-['Roboto',sans-serif] font-semibold text-[14px] text-[#0d1a38]">{item.title}</span>
                      <span className="font-['Roboto',sans-serif] text-[12px] text-[#6b7a99] leading-snug mt-0.5">{item.sub}</span>
                    </div>
                  </a>
                ) : (
                  <Link
                    key={item.title}
                    to={item.to}
                    onClick={onNavigate}
                    className="flex items-center gap-3 px-2 py-2 rounded-xl hover:bg-[#f5f8ff] transition-colors"
                  >
                    <ItemIcon />
                    <div className="flex flex-col">
                      <span className="font-['Roboto',sans-serif] font-semibold text-[14px] text-[#0d1a38]">{item.title}</span>
                      <span className="font-['Roboto',sans-serif] text-[12px] text-[#6b7a99] leading-snug mt-0.5">{item.sub}</span>
                    </div>
                  </Link>
                )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeMobile = () => setMobileOpen(false);

  return (
    <div className="sticky top-0 z-50 bg-white w-full">
      <div className="flex items-center h-[64px] px-4 sm:px-6 lg:px-[80px]">
        <Link to="/" className="h-[40px] w-[120px] relative shrink-0">
          <img alt="ThinkDigital" className="absolute inset-0 object-contain size-full" src={imgLogo} />
        </Link>

        <div className="flex-1" />

        <div className="hidden md:flex gap-[24px] lg:gap-[32px] items-center">
          <NavItem label="Soluções" />
          <NavItem label="Sobre" />
          <NavItem label="Carreira" />
        </div>

        <div className="hidden md:block w-[20px] lg:w-[32px]" />

        <div className="hidden md:flex gap-[8px] items-center text-[13px]">
          <p className="font-['Roboto',sans-serif] font-semibold text-[#177aff]">PT</p>
          <p className="font-['Roboto',sans-serif] text-[#b2bacc]">|</p>
          <p className="font-['Roboto',sans-serif] text-[#808ca6]">EN</p>
        </div>

        <div className="hidden md:block w-[16px] lg:w-[24px]" />

        <Link
          to="/contactos"
          className="hidden md:flex items-center px-[16px] lg:px-[20px] py-[10px] rounded-[8px] bg-[#177aff] hover:bg-[#0f6ae0] transition-colors"
        >
          <p className="font-['Roboto',sans-serif] font-semibold text-[13px] lg:text-[14px] text-white whitespace-nowrap">Contacte-nos</p>
        </Link>

        <button
          type="button"
          aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
          className="md:hidden flex items-center justify-center w-10 h-10 -mr-2 shrink-0"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0d1a38" strokeWidth="2" strokeLinecap="round">
            {mobileOpen ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white border-t border-[#e5e5ed] overflow-hidden"
          >
            <div className="px-4 sm:px-6 py-2 max-h-[calc(100vh-64px)] overflow-y-auto">
              <MobileMenuSection label="Soluções" items={menus.Soluções} onNavigate={closeMobile} />
              <MobileMenuSection label="Sobre" items={menus.Sobre} onNavigate={closeMobile} />
              <MobileMenuSection label="Carreira" items={menus.Carreira} onNavigate={closeMobile} />

              <div className="flex items-center gap-[8px] text-[13px] py-4">
                <p className="font-['Roboto',sans-serif] font-semibold text-[#177aff]">PT</p>
                <p className="font-['Roboto',sans-serif] text-[#b2bacc]">|</p>
                <p className="font-['Roboto',sans-serif] text-[#808ca6]">EN</p>
              </div>

              <Link
                to="/contactos"
                onClick={closeMobile}
                className="flex items-center justify-center px-[20px] py-[12px] rounded-[8px] bg-[#177aff] hover:bg-[#0f6ae0] transition-colors mb-4"
              >
                <p className="font-['Roboto',sans-serif] font-semibold text-[14px] text-white whitespace-nowrap">Contacte-nos</p>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div aria-hidden className="absolute border-[#e5e5ed] border-b border-solid inset-x-0 top-0 h-[64px] pointer-events-none" />
    </div>
  );
}

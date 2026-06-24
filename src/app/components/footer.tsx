import { Link } from "react-router";
import imgLogo from "../../imports/HomepageDesktop/logo_thinkdigital_png.png";

export function Footer() {
  return (
    <footer className="bg-white px-4 sm:px-6 lg:px-[80px] py-12 border-t border-[#e5e5ed]">
      <div className="max-w-[1100px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_2fr] gap-12">

          {/* Left — logo + contactos */}
          <div className="flex flex-col gap-6">
            <Link to="/">
              <img src={imgLogo} alt="ThinkDigital" className="h-auto w-32 object-contain" />
            </Link>

            <div className="flex flex-col gap-4 text-sm">
              <div className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0 text-[#6b7a99]">
                  <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect x="2" y="4" width="20" height="16" rx="2"/>
                </svg>
                <a href="mailto:comercial@thinkdigital.pt" className="text-[#6b7a99] hover:text-[#384561] transition-colors">
                  comercial@thinkdigital.pt
                </a>
              </div>

              <div className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0 text-[#6b7a99]">
                  <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"/>
                </svg>
                <a href="tel:+351707455554" className="text-[#6b7a99] hover:text-[#384561] transition-colors">
                  +351 707 455 554
                </a>
              </div>

              <div className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0 text-[#6b7a99]">
                  <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/>
                </svg>
                <p className="text-[#6b7a99]">Aveiro, Portugal</p>
              </div>

              <div className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0 text-[#6b7a99]">
                  <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
                </svg>
                <p className="text-[#6b7a99]">Seg – Sex: 09h00 – 18h30</p>
              </div>
            </div>

          </div>

          {/* Right — links em 4 colunas */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">

            <div className="flex flex-col gap-3">
              <h3 className="text-[#b2bacc] text-xs uppercase tracking-[0.2em] font-semibold">Soluções</h3>
              <ul className="flex flex-col gap-2 text-xs">
                <li><Link to="/solucoes/energia" className="text-[#6b7a99] hover:text-[#384561] transition-colors">Energia</Link></li>
                <li><a href="https://www.trackingdiary.com/" target="_blank" rel="noopener noreferrer" className="text-[#6b7a99] hover:text-[#384561] transition-colors">Tracking Diary</a></li>
                <li><a href="https://www.efficient-factory.com/" target="_blank" rel="noopener noreferrer" className="text-[#6b7a99] hover:text-[#384561] transition-colors">Efficient Factory</a></li>
                <li><Link to="/solucoes/investigacao-desenvolvimento" className="text-[#6b7a99] hover:text-[#384561] transition-colors">Investigação & D</Link></li>
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="text-[#b2bacc] text-xs uppercase tracking-[0.2em] font-semibold">Sobre</h3>
              <ul className="flex flex-col gap-2 text-xs">
                <li><Link to="/sobre/empresa" className="text-[#6b7a99] hover:text-[#384561] transition-colors">Empresa</Link></li>
                <li><Link to="/sobre/inovacao" className="text-[#6b7a99] hover:text-[#384561] transition-colors">Inovação</Link></li>
                <li><Link to="/sobre/marca" className="text-[#6b7a99] hover:text-[#384561] transition-colors">Marca</Link></li>
                <li><Link to="/noticias" className="text-[#6b7a99] hover:text-[#384561] transition-colors">Notícias</Link></li>
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="text-[#b2bacc] text-xs uppercase tracking-[0.2em] font-semibold">Carreira</h3>
              <ul className="flex flex-col gap-2 text-xs">
                <li><Link to="/carreira/carreiras" className="text-[#6b7a99] hover:text-[#384561] transition-colors">Carreiras</Link></li>
                <li><Link to="/carreira/estagios" className="text-[#6b7a99] hover:text-[#384561] transition-colors">Estágios</Link></li>
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="text-[#b2bacc] text-xs uppercase tracking-[0.2em] font-semibold">Empresa</h3>
              <ul className="flex flex-col gap-2 text-xs">
                <li><Link to="/contactos" className="text-[#6b7a99] hover:text-[#384561] transition-colors">Contactos</Link></li>
                <li><Link to="/noticias" className="text-[#6b7a99] hover:text-[#384561] transition-colors">Notícias</Link></li>
              </ul>
            </div>

          </div>
        </div>

        {/* bottom bar */}
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:justify-between mt-10 pt-6 border-t border-[#e5e5ed] text-center sm:text-left">
          <p className="text-[12px] text-[#b2bacc]">© {new Date().getFullYear()} ThinkDigital. Todos os direitos reservados.</p>
          <div className="flex items-center gap-4">
            <Link to="/contactos" className="text-[12px] text-[#b2bacc] hover:text-[#384561] transition-colors">Política de Privacidade</Link>
            <a
              href="https://www.linkedin.com/company/thinkdigital-innovative-solutions-provider/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon social-linkedin"
              aria-label="LinkedIn"
            >
              <span className="social-tooltip">LinkedIn</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

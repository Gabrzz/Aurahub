import auraLogo from "@/assets/aura-logo.png";
import { MessageSquare, Mail, Linkedin, MapPin, ArrowUp, Instagram, Facebook } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative pt-24 pb-8 overflow-hidden bg-neutral-950 border-t border-white/5">
      {/* Premium Background Effects */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120%] h-64 bg-purple-600/10 blur-[120px] rounded-[100%] pointer-events-none"></div>
      
      {/* Top Border Glow */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Main Footer Content */}
        <div className="flex flex-col items-center">
          
          {/* Logo & Slogan */}
          <div className="mb-12 flex flex-col items-center">
            <div className="relative mb-6 group cursor-pointer" onClick={scrollToTop}>
              <div className="absolute inset-0 bg-purple-500/20 blur-2xl rounded-full group-hover:bg-purple-500/40 transition-all duration-700"></div>
              <img src={auraLogo} alt="Aura" className="h-14 md:h-16 w-auto relative z-10 drop-shadow-[0_0_15px_rgba(168,85,247,0.4)] transition-transform duration-500 group-hover:scale-105" />
            </div>
            <p className="text-neutral-400 text-sm max-w-sm text-center font-medium leading-relaxed tracking-wide">
              Reimaginando o futuro do seu negócio através da Inteligência Artificial.
            </p>
          </div>

          {/* Premium Contact Glass Pill - Horizontal */}
          <div className="w-full max-w-5xl bg-black/40 backdrop-blur-xl border border-white/10 rounded-[2rem] p-2 md:p-3 mb-16 shadow-[0_0_50px_rgba(168,85,247,0.05)]">
            <div className="flex flex-col md:flex-row items-stretch justify-between gap-2 md:gap-0">
              
              {/* Email */}
              <a href="mailto:aurabr.business@gmail.com" className="group flex-1 flex flex-col xl:flex-row items-center gap-4 py-6 px-4 md:px-6 rounded-3xl hover:bg-white/5 transition-all duration-300">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:scale-110 group-hover:bg-purple-500/20 group-hover:border-purple-500/40 transition-all duration-300 shadow-lg shadow-purple-900/20 shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="flex flex-col text-center xl:text-left">
                  <span className="text-xs text-neutral-500 font-semibold mb-1 uppercase tracking-widest">Email</span>
                  <span className="text-sm font-medium text-neutral-300 group-hover:text-white transition-colors">aurabr.business@gmail.com</span>
                </div>
              </a>

              {/* Divider */}
              <div className="hidden md:block w-[1px] my-4 bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>

              {/* Phone */}
              <a href="https://wa.me/5534984263844" target="_blank" rel="noopener noreferrer" className="group flex-1 flex flex-col xl:flex-row items-center gap-4 py-6 px-4 md:px-6 rounded-3xl hover:bg-white/5 transition-all duration-300">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:scale-110 group-hover:bg-purple-500/20 group-hover:border-purple-500/40 transition-all duration-300 shadow-lg shadow-purple-900/20 shrink-0">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div className="flex flex-col text-center xl:text-left">
                  <span className="text-xs text-neutral-500 font-semibold mb-1 uppercase tracking-widest">WhatsApp</span>
                  <span className="text-sm font-medium text-neutral-300 group-hover:text-white transition-colors">+55 (34) 98426-3844</span>
                </div>
              </a>

              {/* Divider */}
              <div className="hidden md:block w-[1px] my-4 bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>

              {/* Location */}
              <a href="https://maps.google.com/?q=Avenida+Rui+Barbosa,275,Centro,38740-036" target="_blank" rel="noopener noreferrer" className="group flex-1 flex flex-col xl:flex-row items-center gap-4 py-6 px-4 md:px-6 rounded-3xl hover:bg-white/5 transition-all duration-300">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:scale-110 group-hover:bg-purple-500/20 group-hover:border-purple-500/40 transition-all duration-300 shadow-lg shadow-purple-900/20 shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="flex flex-col text-center xl:text-left">
                  <span className="text-xs text-neutral-500 font-semibold mb-1 uppercase tracking-widest">Escritório</span>
                  <span className="text-sm font-medium text-neutral-300 group-hover:text-white transition-colors leading-relaxed">Avenida Rui Barbosa, 275 - Sala 04 <br className="hidden xl:block" />Centro, CEP: 38740-036</span>
                </div>
              </a>

            </div>
          </div>

          {/* Socials & Legal Layout */}
          <div className="w-full max-w-5xl flex flex-col md:flex-row justify-between items-center gap-8 mb-16">
            
            {/* Socials */}
            <div className="flex gap-4">
              <a href="https://instagram.com/aurabs" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600 hover:border-transparent transition-all duration-300 hover:-translate-y-1 shadow-lg">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com/company/aurabs" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600 hover:border-transparent transition-all duration-300 hover:-translate-y-1 shadow-lg">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://facebook.com/aurabs" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600 hover:border-transparent transition-all duration-300 hover:-translate-y-1 shadow-lg">
                <Facebook className="h-5 w-5" />
              </a>
            </div>

            {/* Legal Links (Horizontal) */}
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm font-medium">
              <Link to="/privacidade" className="text-neutral-400 hover:text-white transition-colors relative group tracking-wide">
                Políticas de Privacidade
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 group-hover:w-full rounded-full"></span>
              </Link>
              <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-neutral-700"></div>
              <Link to="/termos" className="text-neutral-400 hover:text-white transition-colors relative group tracking-wide">
                Termos de Uso
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 group-hover:w-full rounded-full"></span>
              </Link>
            </div>
            
            {/* Back to Top */}
            <button onClick={scrollToTop} className="group flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300 backdrop-blur-sm cursor-pointer shadow-lg">
              <ArrowUp className="w-5 h-5 text-purple-400 group-hover:-translate-y-1 transition-transform duration-300" />
            </button>
          </div>
        </div>

        {/* Absolute Bottom Border & Registry */}
        <div className="border-t border-white/10 pt-8 pb-4 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-neutral-500 font-medium tracking-wide">
          <p className="flex items-center gap-1">
            © {new Date().getFullYear()} <span className="text-white">Aura Bussiness Solutions</span>. Todos os direitos reservados.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4">
            <p>Jbr Tecnologia LTDA</p>
            <div className="w-1 h-1 rounded-full bg-neutral-700 hidden md:block"></div>
            <p>CNPJ: 22.956.748/0001-03</p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
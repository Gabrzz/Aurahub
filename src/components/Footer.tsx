import auraLogo from "@/assets/aura-logo.png";
import { MessageSquare, Mail, Linkedin, MapPin, ArrowUp, Instagram, Facebook } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-neutral-950 pt-16 pb-8 relative overflow-hidden flex flex-col items-center">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-2xl h-48 bg-purple-600/5 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
        
        {/* Top Section: Logo & Social Circles */}
        <div className="flex flex-col items-center mb-12">
          <img 
            src={auraLogo} 
            alt="Aura" 
            className="h-14 w-auto mb-6 drop-shadow-[0_0_15px_rgba(168,85,247,0.3)]"
          />
          <div className="flex gap-4">
            <a href="https://instagram.com/aurabs" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-purple-500/30 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-purple-500/20 hover:border-purple-500 transition-all duration-300">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="https://linkedin.com/company/aurabs" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-purple-500/30 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-purple-500/20 hover:border-purple-500 transition-all duration-300">
              <Linkedin className="h-4 w-4" />
            </a>
            <a href="https://facebook.com/aurabs" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-purple-500/30 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-purple-500/20 hover:border-purple-500 transition-all duration-300">
              <Facebook className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Separator */}
        <div className="w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-purple-500/20 to-transparent mb-12"></div>

        {/* Middle Section: Horizontal Contact Info */}
        <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-16">
          
          {/* Email */}
          <div className="flex flex-col items-center group">
            <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 text-purple-400 group-hover:bg-purple-500/10 group-hover:border-purple-500/30 transition-all duration-300">
              <Mail className="h-6 w-6" />
            </div>
            <a href="mailto:aurabr.business@gmail.com" className="text-sm text-neutral-300 hover:text-purple-400 transition-colors">
              aurabr.business@gmail.com
            </a>
          </div>

          {/* WhatsApp / Phone */}
          <div className="flex flex-col items-center group">
            <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 text-purple-400 group-hover:bg-purple-500/10 group-hover:border-purple-500/30 transition-all duration-300">
              <MessageSquare className="h-6 w-6" />
            </div>
            <a href="https://wa.me/5534984263844" target="_blank" rel="noopener noreferrer" className="text-sm text-neutral-300 hover:text-purple-400 transition-colors">
              +55 (34) 98426-3844
            </a>
          </div>

          {/* Location */}
          <div className="flex flex-col items-center group">
            <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 text-purple-400 group-hover:bg-purple-500/10 group-hover:border-purple-500/30 transition-all duration-300">
              <MapPin className="h-6 w-6" />
            </div>
            <a href="https://maps.google.com/?q=Avenida+Rui+Barbosa,275,Centro,38740-036" target="_blank" rel="noopener noreferrer" className="text-sm text-neutral-300 hover:text-purple-400 transition-colors flex flex-col items-center">
              <span>Av. Rui Barbosa, 275 - Sala 04</span>
              <span>Centro, CEP: 38740-036</span>
            </a>
          </div>

        </div>

        {/* Bottom Bar: Horizontal Text Elements */}
        <div className="w-full flex flex-col items-center text-center border-t border-white/5 pt-8">
          
          <div className="text-xs text-neutral-500 mb-4 flex flex-col gap-1">
            <p>© {new Date().getFullYear()} Aura. Todos os direitos reservados.</p>
            <p>CNPJ: 22.956.748/0001-03</p>
            <p>Razão social: Jbr Tecnologia LTDA</p>
          </div>

          <div className="flex gap-6 mb-8 text-sm font-medium">
            <Link to="/privacidade" className="text-neutral-400 hover:text-purple-400 transition-colors relative group">
              Política de Privacidade
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/termos" className="text-neutral-400 hover:text-purple-400 transition-colors relative group">
              Termos de Uso
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>

          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-xs font-medium text-neutral-400 transition-all duration-300 hover:text-white"
          >
            <ArrowUp className="w-4 h-4 text-purple-500 group-hover:-translate-y-1 transition-transform" />
            Voltar ao topo
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
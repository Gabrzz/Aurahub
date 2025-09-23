import auraLogo from "@/assets/aura-logo.png";
import { MessageSquare, Mail, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <img 
            src={auraLogo} 
            alt="Aura" 
            className="h-12 w-auto mb-6 opacity-80"
          />

          {/* Company info */}
          <p className="text-muted-foreground mb-6 max-w-2xl">
            Aura - Agência futurista de Inteligência Artificial. 
            Transformamos rotinas em automações inteligentes para simplificar o seu negócio.
          </p>

          {/* Social links */}
          <div className="flex gap-4 mb-8">
            <a 
              href="https://wa.me/5534984263844" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <MessageSquare className="h-5 w-5" />
            </a>
            <a 
              href="mailto:aurabr.business@gmail.com" 
              className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>

          {/* Copyright */}
          <div className="border-t border-border pt-6 w-full">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Aura. Todos os direitos reservados. 
              Feito com 💜 para revolucionar seu negócio.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
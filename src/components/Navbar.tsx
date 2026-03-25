"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import auraLogo from "@/assets/aura-logo2.png";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Detectar scroll para mudar o estilo do navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Início", href: "#" },
    { name: "Sobre", href: "#about" },
    { name: "Soluções", href: "#how-it-works" },
    { name: "Contato", href: "#contact" },
  ];

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      {/* Wrapper de posicionamento */}
      <div className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.25,1)] pointer-events-none ${isScrolled ? 'pt-0 px-0' : 'pt-6 px-4'}`}>
        <nav
          className={`pointer-events-auto transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.25,1)] flex items-center justify-between mx-auto overflow-hidden ${
            isScrolled
              ? "w-full max-w-[4000px] rounded-none bg-black/5 backdrop-blur-[64px] border-b border-white/5 px-6 py-4"
              : "w-full max-w-[680px] rounded-full bg-white/5 backdrop-blur-2xl border border-white/10 px-8 py-3 shadow-[0_8px_32px_rgba(168,85,247,0.15)]"
          }`}
        >
          <div className={`flex items-center justify-between transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.25,1)] w-full ${isScrolled ? "container mx-auto" : "gap-4"}`}>
            {/* Logo */}
            <div
              className="flex items-center gap-3 cursor-pointer group shrink-0"
              onClick={() => handleNavClick("#")}
            >
              <div className={`relative transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.25,1)] ${isScrolled ? "w-10 h-10" : "w-12 h-12"}`}>
                <img
                  src={auraLogo}
                  alt="Aura Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Links Desktop */}
            <div className={`hidden md:flex items-center transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.25,1)] ${isScrolled ? "gap-2" : "gap-2"}`}>
              {navLinks.map((link) => {
                const hiddenInCapsule = !isScrolled && (link.name === "Início" || link.name === "Contato");
                return (
                  <button
                    key={link.name}
                    onClick={() => handleNavClick(link.href)}
                    className={`relative text-sm font-medium transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.25,1)] group flex items-center justify-center whitespace-nowrap overflow-hidden ${
                      hiddenInCapsule 
                        ? "max-w-0 opacity-0 px-0 mx-0 pointer-events-none" 
                        : "max-w-[120px] opacity-100 px-4 mx-1 text-neutral-300 hover:text-white pointer-events-auto"
                    }`}
                  >
                    <span>{link.name}</span>
                    <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full group-hover:left-0 transition-all duration-300" />
                  </button>
                );
              })}
            </div>

            {/* CTA Button Desktop & Mobile Menu */}
            <div className="flex items-center gap-4 shrink-0 overflow-hidden">
              <div className="hidden md:block">
                <Button
                  size="default"
                  className={`bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 shadow-lg shadow-purple-500/25 transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.25,1)] rounded-full ${isScrolled ? "px-5 py-2 h-9 text-sm" : "px-7 py-3 h-11 text-base origin-right"}`}
                  onClick={() => handleNavClick("#contact")}
                >
                  Começar Agora
                </Button>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 text-white" />
                ) : (
                  <Menu className="w-6 h-6 text-white" />
                )}
              </button>
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-background/95 backdrop-blur-xl transition-all duration-500 md:hidden ${
          isMobileMenuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
        style={{ top: "70px" }}
      >
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col gap-4">
            {navLinks.map((link, index) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className={`text-left px-4 py-3 text-lg font-medium text-neutral-300 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-300 transform hover:translate-x-2 ${
                  isMobileMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-5"
                }`}
                style={{ transitionDelay: isMobileMenuOpen ? `${index * 50}ms` : "0ms" }}
              >
                {link.name}
              </button>
            ))}
            <div className="pt-4">
              <Button
                size="lg"
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 shadow-lg shadow-purple-500/25"
                onClick={() => handleNavClick("#contact")}
              >
                Começar Agora
              </Button>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Navbar;
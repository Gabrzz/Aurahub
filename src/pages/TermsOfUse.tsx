import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const TermsOfUse = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Termos de Uso
          </h1>
          
          <div className="prose prose-invert max-w-none text-neutral-300">
            <p className="lead text-lg mb-8 text-neutral-400">
              Leia atentamente estes termos antes de usar o site e os serviços da Aura.
            </p>
            
            <div className="space-y-10">
              {/* Bloco 1 */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1 h-full bg-purple-500 group-hover:bg-pink-500 transition-colors duration-300"></div>
                <h2 className="text-2xl font-semibold text-white mt-0 mb-4 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-500/20 text-purple-400 text-sm font-bold">1</span>
                  Aceitação dos Termos
                </h2>
                <p className="leading-relaxed">
                  Ao acessar e utilizar este site, você concorda com estes Termos de Uso e com a nossa Política de Privacidade. Se não concordar, por favor não utilize o site.
                </p>
              </div>

              {/* Bloco 2 */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1 h-full bg-purple-500 group-hover:bg-pink-500 transition-colors duration-300"></div>
                <h2 className="text-2xl font-semibold text-white mt-0 mb-4 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-500/20 text-purple-400 text-sm font-bold">2</span>
                  Utilização do Site
                </h2>
                <ul className="space-y-2 list-none p-0">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span> Você compromete-se a não utilizar o site para fins ilícitos.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span> Não é permitido tentar acessar áreas restritas sem autorização.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span> É proibido publicar conteúdos que violem direitos de terceiros.
                  </li>
                </ul>
              </div>

              {/* Bloco 3 */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1 h-full bg-purple-500 group-hover:bg-pink-500 transition-colors duration-300"></div>
                <h2 className="text-2xl font-semibold text-white mt-0 mb-4 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-500/20 text-purple-400 text-sm font-bold">3</span>
                  Propriedade Intelectual
                </h2>
                <p className="leading-relaxed">
                  Todo o conteúdo deste site (textos, imagens, marcas, layout e código) é propriedade da Aura ou de seus licenciantes e é protegido por leis de direitos autorais e marcas.
                </p>
              </div>

              {/* Bloco 4 */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1 h-full bg-purple-500 group-hover:bg-pink-500 transition-colors duration-300"></div>
                <h2 className="text-2xl font-semibold text-white mt-0 mb-4 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-500/20 text-purple-400 text-sm font-bold">4</span>
                  Limitação de Responsabilidade
                </h2>
                <p className="leading-relaxed">
                  Os serviços e conteúdos são fornecidos "como estão". Embora nos esforcemos para manter informações atualizadas, não garantimos a exatidão, completude ou disponibilidade contínua do site. Em nenhuma hipótese seremos responsáveis por danos indiretos resultantes do uso.
                </p>
              </div>

              {/* Bloco 5 */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1 h-full bg-purple-500 group-hover:bg-pink-500 transition-colors duration-300"></div>
                <h2 className="text-2xl font-semibold text-white mt-0 mb-4 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-500/20 text-purple-400 text-sm font-bold">5</span>
                  Links para Terceiros
                </h2>
                <p className="leading-relaxed">
                  O site pode conter links para sites de terceiros. Não somos responsáveis pelo conteúdo, políticas ou práticas desses sites. Recomendamos que leia os termos e políticas de cada um.
                </p>
              </div>

              {/* Bloco 6 */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1 h-full bg-purple-500 group-hover:bg-pink-500 transition-colors duration-300"></div>
                <h2 className="text-2xl font-semibold text-white mt-0 mb-4 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-500/20 text-purple-400 text-sm font-bold">6</span>
                  Alterações nos Termos
                </h2>
                <p className="leading-relaxed">
                  Podemos atualizar estes Termos de Uso periodicamente. A versão vigente será sempre a publicada nesta página, com indicação de data de atualização.
                </p>
              </div>

              {/* Bloco 7 */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1 h-full bg-purple-500 group-hover:bg-pink-500 transition-colors duration-300"></div>
                <h2 className="text-2xl font-semibold text-white mt-0 mb-4 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-500/20 text-purple-400 text-sm font-bold">7</span>
                  Contato
                </h2>
                <p className="leading-relaxed">
                  Em caso de dúvidas sobre estes termos, entre em contato em <a href="mailto:aurabr.business@gmail.com" className="text-white hover:text-pink-400 underline decoration-purple-500/50 underline-offset-4">aurabr.business@gmail.com</a> ou pelo WhatsApp em <a href="https://wa.me/5534984263844" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-400 underline decoration-purple-500/50 underline-offset-4">+55 (34) 98426-3844</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsOfUse;

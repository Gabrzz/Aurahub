import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Políticas de Privacidade
          </h1>
          
          <div className="prose prose-invert max-w-none text-neutral-300">
            <p className="lead text-lg mb-8 text-neutral-400">
              Sua privacidade é importante para nós. Esta política explica como a Aura coleta, usa e protege as suas informações pessoais.
            </p>
            
            <div className="space-y-10">
              {/* Bloco 1 */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1 h-full bg-purple-500 group-hover:bg-pink-500 transition-colors duration-300"></div>
                <h2 className="text-2xl font-semibold text-white mt-0 mb-4 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-500/20 text-purple-400 text-sm font-bold">1</span>
                  Informações que Coletamos
                </h2>
                <p className="leading-relaxed">
                  Podemos coletar informações fornecidas diretamente por você (como nome, email, telefone e mensagens enviadas via nossos formulários e canais de atendimento), além de dados técnicos sobre o seu dispositivo, navegador, endereço IP, páginas acessadas e cookies para melhoria contínua da experiência.
                </p>
              </div>

              {/* Bloco 2 */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1 h-full bg-purple-500 group-hover:bg-pink-500 transition-colors duration-300"></div>
                <h2 className="text-2xl font-semibold text-white mt-0 mb-4 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-500/20 text-purple-400 text-sm font-bold">2</span>
                  Como Utilizamos os Dados
                </h2>
                <ul className="space-y-2 list-none p-0">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span> Prestar e aprimorar nossos serviços e soluções digitais.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span> Atendimento, suporte e comunicações relacionadas ao seu interesse.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span> Personalizar conteúdos, propostas e experiências.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span> Garantir segurança, prevenir fraudes e cumprir obrigações legais.
                  </li>
                </ul>
              </div>

              {/* Bloco 3 */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1 h-full bg-purple-500 group-hover:bg-pink-500 transition-colors duration-300"></div>
                <h2 className="text-2xl font-semibold text-white mt-0 mb-4 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-500/20 text-purple-400 text-sm font-bold">3</span>
                  Cookies e Tecnologias Semelhantes
                </h2>
                <p className="leading-relaxed">
                  Utilizamos cookies para lembrar preferências, entender como você utiliza o site e melhorar o desempenho. Você pode gerir cookies nas configurações do seu navegador, mas isso pode impactar algumas funcionalidades.
                </p>
              </div>

              {/* Bloco 4 */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1 h-full bg-purple-500 group-hover:bg-pink-500 transition-colors duration-300"></div>
                <h2 className="text-2xl font-semibold text-white mt-0 mb-4 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-500/20 text-purple-400 text-sm font-bold">4</span>
                  Compartilhamento de Dados
                </h2>
                <p className="leading-relaxed">
                  Podemos compartilhar dados com parceiros e provedores de serviços que nos auxiliam na operação do site e na entrega das nossas soluções, sempre sob acordos de confidencialidade e segurança. Não vendemos dados pessoais.
                </p>
              </div>

              {/* Bloco 5 */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1 h-full bg-purple-500 group-hover:bg-pink-500 transition-colors duration-300"></div>
                <h2 className="text-2xl font-semibold text-white mt-0 mb-4 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-500/20 text-purple-400 text-sm font-bold">5</span>
                  Direitos do Titular
                </h2>
                <p className="leading-relaxed mb-4">
                  Você pode solicitar acesso, correção, atualização ou exclusão dos seus dados pessoais, bem como a limitação do uso e a portabilidade, conforme a legislação aplicável.
                </p>
                <p className="leading-relaxed text-purple-300">
                  Para exercer seus direitos, entre em contato pelo email <a href="mailto:aurabr.business@gmail.com" className="text-white hover:text-pink-400 underline decoration-purple-500/50 underline-offset-4">aurabr.business@gmail.com</a>.
                </p>
              </div>

              {/* Bloco 6 */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1 h-full bg-purple-500 group-hover:bg-pink-500 transition-colors duration-300"></div>
                <h2 className="text-2xl font-semibold text-white mt-0 mb-4 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-500/20 text-purple-400 text-sm font-bold">6</span>
                  Segurança
                </h2>
                <p className="leading-relaxed">
                  Adotamos medidas técnicas e organizacionais para proteger seus dados. Ainda assim, nenhum método é 100% seguro; recomendamos que você também adote boas práticas de segurança online.
                </p>
              </div>

              {/* Bloco 7 */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1 h-full bg-purple-500 group-hover:bg-pink-500 transition-colors duration-300"></div>
                <h2 className="text-2xl font-semibold text-white mt-0 mb-4 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-500/20 text-purple-400 text-sm font-bold">7</span>
                  Atualizações desta Política
                </h2>
                <p className="leading-relaxed">
                  Esta política pode ser atualizada periodicamente para refletir mudanças nos nossos processos. Publicaremos a versão mais recente nesta página, com data de vigência.
                </p>
              </div>

              {/* Bloco 8 */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1 h-full bg-purple-500 group-hover:bg-pink-500 transition-colors duration-300"></div>
                <h2 className="text-2xl font-semibold text-white mt-0 mb-4 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-500/20 text-purple-400 text-sm font-bold">8</span>
                  Contato
                </h2>
                <p className="leading-relaxed">
                  Em caso de dúvidas, entre em contato pelo email <a href="mailto:aurabr.business@gmail.com" className="text-white hover:text-pink-400 underline decoration-purple-500/50 underline-offset-4">aurabr.business@gmail.com</a> ou pelo WhatsApp em <a href="https://wa.me/5534984263844" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-400 underline decoration-purple-500/50 underline-offset-4">+55 (34) 98426-3844</a>.
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

export default PrivacyPolicy;

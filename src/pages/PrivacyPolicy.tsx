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
            {/* O USUÁRIO DEVE INSERIR A COPY DE PRIVACIDADE AQUI */}
            <p className="lead text-lg mb-6">
              A sua privacidade é importante para nós. É política da Aura respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site.
            </p>
            
            <h2 className="text-2xl font-semibold text-white mt-10 mb-4">1. Informações que coletamos</h2>
            <p className="mb-4">
              [INSIRA SUA COPY AQUI...] Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento.
            </p>

            <h2 className="text-2xl font-semibold text-white mt-10 mb-4">2. Uso de Dados</h2>
            <p className="mb-4">
              [INSIRA SUA COPY AQUI...] Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.
            </p>

            <h2 className="text-2xl font-semibold text-white mt-10 mb-4">3. Contato</h2>
            <p className="mb-4">
              Se você tiver alguma dúvida sobre como lidamos com dados do usuário e informações pessoais, entre em contato conosco.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;

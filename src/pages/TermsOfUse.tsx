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
            {/* O USUÁRIO DEVE INSERIR A COPY DOS TERMOS DE USO AQUI */}
            <p className="lead text-lg mb-6">
              Ao acessar ao site da Aura, concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis.
            </p>
            
            <h2 className="text-2xl font-semibold text-white mt-10 mb-4">1. Uso de Licença</h2>
            <p className="mb-4">
              [INSIRA SUA COPY AQUI...] É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) no site da Aura, apenas para visualização transitória pessoal e não comercial.
            </p>

            <h2 className="text-2xl font-semibold text-white mt-10 mb-4">2. Isenção de responsabilidade</h2>
            <p className="mb-4">
              [INSIRA SUA COPY AQUI...] Os materiais no site da Aura são fornecidos 'como estão'. Aura não oferece garantias, expressas ou implícitas, e, por este meio, isenta e nega todas as outras garantias, incluindo, sem limitação, garantias implícitas ou condições de comercialização, adequação a um fim específico ou não violação de propriedade intelectual ou outra violação de direitos.
            </p>

            <h2 className="text-2xl font-semibold text-white mt-10 mb-4">3. Limitações</h2>
            <p className="mb-4">
              Em nenhum caso a Aura ou seus fornecedores serão responsáveis por quaisquer danos (incluindo, sem limitação, danos por perda de dados ou lucro ou devido a interrupção dos negócios) decorrentes do uso ou da incapacidade de usar os materiais em Aura.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsOfUse;

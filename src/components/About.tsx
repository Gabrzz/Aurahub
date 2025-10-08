import { Brain, Zap, Shield, Target } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Brain,
      title: "Diagnóstico de Processos",
      description: "Identificamos seu potencial de crescimento e lucro, usando IA para resolver desafios de ponta a ponta"
    },
    {
      icon: Zap,
      title: "Criação de Agentes",
      description: "Soluções inteligentes e completas, integrando o essencial para gerar mais resultados de forma coesa"
    },
    {
      icon: Target,
      title: "Integrações Inteligentes",
      description: "Integramos e organizamos sistemas para simplificar o acompanhamento e maximizar a performance"
    },
    {
      icon: Shield,
      title: "Monitoramento Seguro",
      description: "Acompanhamento contínuo com foco em segurança e governança de dados"
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">O que fazemos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transformamos rotinas em fluxos inteligentes que funcionam 24/7, usando IA para otimizar seu negócio
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="feature-card p-8 rounded-2xl text-center fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center shadow-glow">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
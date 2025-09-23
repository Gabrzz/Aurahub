import { Search, Code, Rocket } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Search,
      number: "01",
      title: "Diagnóstico",
      description: "Analisamos seus processos atuais e identificamos as melhores oportunidades de automação para maximizar seu ROI"
    },
    {
      icon: Code,
      number: "02", 
      title: "Desenvolvimento Rápido",
      description: "Criamos soluções personalizadas usando as mais avançadas tecnologias de IA, sempre priorizando segurança e eficiência"
    },
    {
      icon: Rocket,
      number: "03",
      title: "Implantação e Acompanhamento",
      description: "Implementamos as automações e oferecemos suporte contínuo para garantir resultados excepcionais"
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Como funciona</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Um processo simples e transparente para transformar seu negócio em apenas 3 passos
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={index}
              className={`flex flex-col lg:flex-row items-center gap-12 mb-20 last:mb-0 fade-in-up ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              {/* Step content */}
              <div className="flex-1 text-center lg:text-left">
                <div className="mb-4">
                  <span className="text-6xl font-bold gradient-text">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-3xl font-bold mb-6 text-foreground">
                  {step.title}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Step icon */}
              <div className="flex-shrink-0">
                <div className="w-32 h-32 bg-gradient-primary rounded-3xl flex items-center justify-center shadow-elegant">
                  <step.icon className="h-16 w-16 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
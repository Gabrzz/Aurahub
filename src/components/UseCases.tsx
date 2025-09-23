import { Database, Users, BarChart3, Workflow, MessageSquare, FileText } from "lucide-react";

const UseCases = () => {
  const useCases = [
    {
      icon: Users,
      title: "CRM Inteligente",
      description: "Automatize follow-ups, qualificação de leads e atualizações de pipeline com IA"
    },
    {
      icon: BarChart3,
      title: "ERP Otimizado", 
      description: "Integre processos financeiros, estoque e vendas com automação inteligente"
    },
    {
      icon: Database,
      title: "Bancos de Dados",
      description: "Sincronize dados entre sistemas e mantenha informações sempre atualizadas"
    },
    {
      icon: Workflow,
      title: "APIs Inteligentes",
      description: "Conecte diferentes plataformas com fluxos automatizados e seguros"
    },
    {
      icon: MessageSquare,
      title: "Atendimento 24/7",
      description: "Chatbots inteligentes que resolvem 80% das demandas automaticamente"
    },
    {
      icon: FileText,
      title: "Documentação Automática",
      description: "Gere relatórios, contratos e documentos com base em dados estruturados"
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Casos de uso</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Veja como a Aura transforma diferentes áreas do seu negócio com automação inteligente
          </p>
        </div>

        {/* Use cases grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {useCases.map((useCase, index) => (
            <div 
              key={index}
              className="feature-card p-6 rounded-xl text-center fade-in-up group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="mb-4 flex justify-center">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform duration-300">
                  <useCase.icon className="h-6 w-6 text-white" />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold mb-3 text-foreground">
                {useCase.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {useCase.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 fade-in-up" style={{ animationDelay: '0.8s' }}>
          <p className="text-lg text-muted-foreground mb-6">
            Não encontrou seu caso específico? 
          </p>
          <button 
            className="btn-hero px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Converse com nossos especialistas
          </button>
        </div>
      </div>
    </section>
  );
};

export default UseCases;
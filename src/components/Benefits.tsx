import { Clock, TrendingUp, Shield, Users } from "lucide-react";
import CountUp from "@/components/ui/countup";

const Benefits = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Economia de Tempo",
      description: "Automatize tarefas repetitivas e libere sua equipe para atividades estratégicas que geram mais valor",
      stat: "80",
      statSuffix: "%",
      statLabel: "redução no tempo de execução"
    },
    {
      icon: TrendingUp,
      title: "Aumento de ROI",
      description: "Maximize seus resultados com processos otimizados que trabalham 24/7 sem interrupção",
      stat: "300",
      statSuffix: "%+",
      statLabel: "aumento médio em produtividade"
    },
    {
      icon: Shield,
      title: "Segurança e Governança",
      description: "Proteja seus dados com as mais altas certificações de segurança e compliance",
      stat: "100",
      statSuffix: "%",
      statLabel: "conformidade com LGPD"
    },
    {
      icon: Users,
      title: "Colaboração Eficiente",
      description: "Integramos áreas técnicas e de negócio para resultados alinhados aos seus objetivos",
      stat: "90",
      statSuffix: "%+",
      statLabel: "satisfação dos clientes"
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Benefícios reais</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Resultados comprovados que impactam diretamente o crescimento do seu negócio
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="feature-card p-8 rounded-2xl fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-start gap-6">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center shadow-glow">
                    <benefit.icon className="h-7 w-7 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {benefit.description}
                  </p>
                  
                  {/* Stat */}
                  <div className="border-t border-border pt-4">
                    <div className="text-2xl font-bold gradient-text">
                      <CountUp to={Number(benefit.stat)} separator="." />
                      {benefit.statSuffix}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {benefit.statLabel}
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
import { Shield, Users, Cog } from "lucide-react";

const Differentials = () => {
  const differentials = [
    {
      icon: Shield,
      title: "Segurança e Privacidade",
      description: "Foco absoluto em segurança, privacidade e governança de dados. Suas informações estão protegidas com os mais altos padrões de criptografia e compliance.",
      features: ["Certificação LGPD", "Criptografia end-to-end", "Auditoria contínua", "Backup automático"]
    },
    {
      icon: Users,
      title: "Trabalho Colaborativo",
      description: "Integramos perfeitamente áreas técnicas e de negócio, garantindo que as soluções atendam tanto requisitos técnicos quanto objetivos estratégicos.",
      features: ["Equipe multidisciplinar", "Metodologia ágil", "Comunicação transparente", "Alinhamento estratégico"]
    },
    {
      icon: Cog,
      title: "Soluções Robustas e Simples",
      description: "Desenvolvemos sistemas poderosos que são fáceis de operar. Complexidade técnica não significa interface complicada para o usuário final.",
      features: ["Interface intuitiva", "Documentação completa", "Treinamento incluído", "Suporte dedicado"]
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Nossos diferenciais</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            O que nos torna únicos no mercado de automação inteligente
          </p>
        </div>

        {/* Differentials Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {differentials.map((differential, index) => (
              <div 
                key={index}
                className="group relative fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Card */}
                <div className="relative feature-card rounded-3xl p-8 h-full transition-all duration-500 group-hover:shadow-glow">
                  {/* Icon with gradient background */}
                  <div className="relative mb-8">
                    <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-elegant mx-auto lg:mx-0 group-hover:scale-110 transition-transform duration-300">
                      <differential.icon className="h-10 w-10 text-white" />
                    </div>
                    
                    {/* Decorative gradient blur */}
                    <div className="absolute inset-0 w-20 h-20 bg-gradient-primary rounded-2xl blur-xl opacity-30 mx-auto lg:mx-0"></div>
                  </div>

                  {/* Content */}
                  <div className="text-center lg:text-left">
                    <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:gradient-text transition-all duration-300">
                      {differential.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {differential.description}
                    </p>

                    {/* Features list with better styling */}
                    <div className="space-y-3">
                      {differential.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center justify-center lg:justify-start group/feature">
                          <div className="w-2 h-2 bg-gradient-primary rounded-full mr-3 group-hover/feature:scale-125 transition-transform duration-200"></div>
                          <span className="text-sm text-muted-foreground group-hover/feature:text-foreground transition-colors duration-200">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Subtle border gradient on hover */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Differentials;
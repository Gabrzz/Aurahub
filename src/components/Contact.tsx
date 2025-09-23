import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageSquare, Send, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Mensagem enviada com sucesso!",
      description: "Nossa equipe entrará em contato em até 24 horas.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      message: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const whatsappMessage = "Olá! Gostaria de saber mais sobre as soluções de automação inteligente da Aura.";
  const whatsappUrl = `https://wa.me/5534984263844?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Fale com a gente</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Pronto para transformar seu negócio? Ganhe uma demonstração gratuita e descubra como a automação inteligente pode revolucionar seus processos
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact info */}
            <div className="fade-in-up">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Transforme seu negócio hoje mesmo
              </h3>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center shadow-glow mt-1">
                    <Sparkles className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Demonstração gratuita</h4>
                    <p className="text-muted-foreground">Veja na prática como nossa IA pode automatizar seus processos</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center shadow-glow mt-1">
                    <MessageSquare className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Consultoria especializada</h4>
                    <p className="text-muted-foreground">Nossa equipe analisa suas necessidades e propõe soluções personalizadas</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center shadow-glow mt-1">
                    <Send className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Resposta em 24h</h4>
                    <p className="text-muted-foreground">Garantimos retorno rápido para acelerar sua transformação digital</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp button */}
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105"
              >
                <MessageSquare className="mr-2 h-5 w-5" />
                Conversar no WhatsApp
              </a>
            </div>

            {/* Contact form */}
            <div className="feature-card p-8 rounded-2xl fade-in-up" style={{ animationDelay: '0.2s' }}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Input
                      name="name"
                      placeholder="Seu nome"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-background border-border focus:border-primary"
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Seu e-mail"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-background border-border focus:border-primary"
                    />
                  </div>
                </div>

                <div>
                  <Input
                    name="company"
                    placeholder="Nome da empresa"
                    value={formData.company}
                    onChange={handleChange}
                    className="bg-background border-border focus:border-primary"
                  />
                </div>

                <div>
                  <Textarea
                    name="message"
                    placeholder="Conte-nos sobre seus desafios e como podemos ajudar"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="bg-background border-border focus:border-primary resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="btn-hero w-full text-lg py-3 h-auto group"
                >
                  <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  Solicitar demonstração gratuita
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-110 z-50"
        aria-label="Conversar no WhatsApp"
      >
        <MessageSquare className="h-6 w-6 text-white" />
      </a>
    </section>
  );
};

export default Contact;
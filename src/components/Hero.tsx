import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import auraLogo from "@/assets/aura-logo2.png";
import Aurora from '@/components/ui/bg';
import TextType from '@/components/ui/typeText';


const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
     
     {/* Aurora Background */}
      <div className="absolute inset-0">
        <Aurora
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>
    
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="hero-glow absolute top-1/4 left-1/4 w-96 h-96 rounded-full"></div>
        <div className="hero-glow absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full"></div>
      </div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="floating-element absolute top-20 left-20 w-2 h-2 bg-primary rounded-full opacity-60"></div>
        <div className="floating-element absolute top-40 right-32 w-1 h-1 bg-secondary rounded-full opacity-40" style={{ animationDelay: '1s' }}></div>
        <div className="floating-element absolute bottom-32 left-1/3 w-1.5 h-1.5 bg-accent rounded-full opacity-50" style={{ animationDelay: '2s' }}></div>
        <div className="floating-element absolute bottom-20 right-20 w-2 h-2 bg-primary rounded-full opacity-30" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">


      {/* Logo */}
      <div className="mb-8 flex justify-center">
        <img 
          src={auraLogo} 
          alt="Aura - Agência de Inteligência Artificial" 
          className="h-32 w-auto drop-shadow-2xl animate-pulse"
        />
      </div>


        {/* Main headline */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          <span className="gradient-text">Inteligência Artificial</span>
          <span className="text-foreground"><br />para 
            <TextType 
              text={[' simplificar', ' transformar', ' melhorar', ' Automatizar', ' Potencializar', ' Acelerar']}
              typingSpeed={70}
              pauseDuration={3000}
              showCursor={false}
              cursorCharacter="|"
            />
          </span>
          <span className="text-foreground"><br />o seu negócio</span>
        </h1>

          {/*
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          <span className="gradient-text">Inteligência Artificial</span>
            <BlurText
              text="para simplificar"
              delay={150}
              animateBy="words"
              direction="top"
              onAnimationComplete={handleAnimationComplete}
              className="text-foreground"
              />
            <BlurText
              text="o seu negócio"
              delay={150}
              animateBy="words"
              direction="top"
              onAnimationComplete={handleAnimationComplete}
              className="text-foreground"
              />
          </h1>
          */}

        {/* Subheadline */}
        <p className="text-xl md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
          Esqueça automações isoladas. Aqui, você encontra infraestrutura completa de IA, pensada para gerar resultados reais e recorrentes.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button 
            size="lg" 
            className="btn-hero text-lg px-8 py-4 h-auto group"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Sparkles className="mr-2 h-5 w-5 group-hover:animate-spin" />
            Ganhe uma demonstração gratuita
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="btn-secondary text-lg px-8 py-4 h-auto"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Conheça nossas soluções
          </Button>
        </div>

        {/* Scroll indicator */}

        {/* ----------------- mouse -----------------
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
            <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
        */}


      </div>
    </section>
  );
};

export default Hero;
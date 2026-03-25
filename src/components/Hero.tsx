import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import auraLogo from "@/assets/aura-logo2.png";
import Aurora from '@/components/ui/bg';
import TextType from '@/components/ui/typeText';
import FloatingLines from '@/components/ui/FloatingLines';


const subheadlines = [
  "Não é sobre tecnologia. É sobre você parar de fazer no braço o que uma máquina faz em segundos.",
  "Seu time é bom demais pra ficar copiando dado de um sistema e colando em outro. A gente resolve isso.",
  "Criamos soluções de I.A. sob medida para o dia a dia da sua empresa, do atendimento ao financeiro.",
  "Toda empresa tem gargalos. A nossa especialidade é desentupir os seus."
];

const Hero = () => {
  const [randomSubheadline] = useState(() => subheadlines[Math.floor(Math.random() * subheadlines.length)]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
     
    
      {/* ------------- Background Color ----------*/}
      {/* <div className="absolute inset-0">
        <div className="hero-glow absolute top-1/4 left-1/4 w-96 h-96 rounded-full"></div>
        <div className="hero-glow absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full"></div>
      </div>    */}

      {/* ----------- Lines Background ----------- */}
      <div className="absolute inset-0">
        <FloatingLines 
          enabledWaves={["top","middle","bottom"]}
          // Array - specify line count per wave; Number - same count for all waves
          lineCount={2}
          // Array - specify line distance per wave; Number - same distance for all waves
          lineDistance={100}
          bendRadius={1}
          bendStrength={-3}
          interactive={false}
          parallax={true}
        />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          <span className="gradient-text jofont-1">Inteligência Artificial</span>
          <span className="text-foreground"><br />para 
            <TextType 
              text={[' simplificar', ' transformar', ' melhorar', ' automatizar', ' potencializar', ' acelerar']}
              typingSpeed={70}
              pauseDuration={3000}
              showCursor={false}
              cursorCharacter="|"
            />
          </span>
          <span className="text-foreground "><br />o seu negócio</span>
        </h1>

        {/* Subheadline Aleatória */}
        <p className="text-xl md:text-xl text-neutral-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          {randomSubheadline}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button 
            size="lg" 
            className="btn-hero text-lg px-8 py-4 h-auto group"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Sparkles className="mr-2 h-5 w-5 group-hover:animate-spin" />
            Quero I.A na minha empresa
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="btn-secondary text-lg px-8 py-4 h-auto"
            onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Ver como funciona
          </Button>
        </div>

    

      </div>
    </section>
  );
};

export default Hero;
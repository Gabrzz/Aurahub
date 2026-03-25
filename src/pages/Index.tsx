import { useEffect } from "react";
import Nav from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import HowItWorks from "@/components/HowItWorks";
import Benefits from "@/components/AboutAura";
import UseCases from "@/components/Cases";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import ScrollVelocity from "@/components/ScrollVelocity";
import ChatBot from "@/components/ChatBot";
import { useLocation } from "react-router-dom";

const Index = () => {
  useScrollAnimation();
  const location = useLocation();

  // Tratamento de rolagem caso o usuário navegue para essa tela usando a hash
  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else if (location.pathname === "/") {
      window.scrollTo(0, 0);
    }
  }, [location]);

  useEffect(() => {
    // Add Google Fonts
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <Hero />
      <About />
      <HowItWorks />
      {/* <ScrollVelocity /> */}
      <UseCases />
      <Benefits />
      <Contact />
      <Footer />
      <ChatBot />
    </div>
  );
};

export default Index;

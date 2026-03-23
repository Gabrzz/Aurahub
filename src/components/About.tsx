// components/About.tsx
"use client";

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { ArrowRight, Sparkles }    from "lucide-react";
import { ProblemCard }             from "@/components/ui/ProblemCard";
import { problems }                from '@/components/ui/about-data';
import { Button }                  from "@/components/ui/button";
import styles                      from '@/components/ui/about.module.css';


const About = () => {
  const { ref: headerRef, visible: headerVisible } = useIntersectionObserver(0.2);
  const { ref: gridRef,   visible: gridVisible   } = useIntersectionObserver(0.05);

  return (
    <section id="about" className={styles.section}>
      <div className={`${styles.orb} ${styles.orb1}`} />
      <div className={`${styles.orb} ${styles.orb2}`} />
      <div className={`${styles.orb} ${styles.orb3}`} />
      <div className={styles.gridBg} />

      <div className={styles.container}>

        {/* Header */}
        <div
          ref={headerRef}
          className={styles.header}
          style={{
            opacity:    headerVisible ? 1 : 0,
            transform:  headerVisible ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.8s ease, transform 0.8s ease",
          }}
        >
          <div className={styles.eyebrow}>
            <div className={styles.dots}>
              <div className={styles.dot} />
              <div className={styles.dot} />
              <div className={styles.dot} />
            </div>
            <span className={styles.eyebrowText}>Mas de que forma?</span>
          </div>

          <h2 className={styles.title}>
            O que a Aura faz{" "}
            <span className={styles.titleGradient}>pelo seu negócio</span>
          </h2>

          <p className={styles.subtitle}>
            A gente não chega com uma solução pronta.
            <br />
            A gente ouve, entende e constrói.
          </p>
        </div>

        {/* 2x2 grid */}
        <div ref={gridRef} className={styles.grid}>
          {problems.map((item, index) => (
            <ProblemCard key={index} item={item} index={index} visible={gridVisible} />
          ))}
        </div>

        {/* CTA strip */}
        <div
          className={styles.ctaStrip}
          style={{
            opacity:    gridVisible ? 1 : 0,
            transform:  gridVisible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.8s ease 0.7s, transform 0.8s ease 0.7s",
          }}
        >
          <div>
            <p className={styles.ctaTitle}>Tem mais um problema assim?</p>
            <p className={styles.ctaSub}>A gente resolve. Fala com a gente e descobre como.</p>
          </div>
          <Button 
            size="lg" 
            className="btn-hero text-base sm:text-lg px-4 sm:px-8 py-4 w-[90%] sm:w-auto mx-auto h-auto group whitespace-normal break-words leading-snug"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Sparkles className="mr-2 h-5 w-5 group-hover:animate-spin shrink-0" />
            <span className="text-center">Quero muuuito essa I.A</span>
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform shrink-0" />
          </Button>
        </div>

      </div>
    </section>
  );
};

export default About;
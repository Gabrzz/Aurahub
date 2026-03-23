import { useEffect, useRef } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { Button } from "@/components/ui/button";
import styles from "@/components/ui/AboutAura.module.css";


/* ── Stars canvas hook ─────────────────────────────── */
function useStars(ref: React.RefObject<HTMLCanvasElement>) {
  useEffect(() => {
    const cv = ref.current; if (!cv) return;
    const sx = cv.getContext("2d")!;
    let id: number;
    const resize = () => { cv.width = cv.offsetWidth; cv.height = cv.offsetHeight; };
    resize();
    window.addEventListener("resize", resize);
    const stars = Array.from({ length: 120 }, () => ({
      x: Math.random(), y: Math.random(),
      r: Math.random() * .8 + .2,
      a: Math.random(),
      speed: Math.random() * .02 + .005,
      phase: Math.random() * Math.PI * 2,
    }));
    const draw = (t: number) => {
      const W = cv.width, H = cv.height;
      sx.clearRect(0, 0, W, H);
      stars.forEach(s => {
        const alpha = s.a * (.4 + .6 * Math.sin(t * s.speed + s.phase));
        sx.beginPath();
        sx.arc(s.x * W, s.y * H, s.r, 0, Math.PI * 2);
        sx.fillStyle = `rgba(255,255,255,${alpha})`;
        sx.fill();
      });
      id = requestAnimationFrame(draw);
    };
    id = requestAnimationFrame(draw);
    return () => { cancelAnimationFrame(id); window.removeEventListener("resize", resize); };
  }, [ref]);
}

/* ── Animated counter hook ─────────────────────────── */
function useCounter(ref: React.RefObject<HTMLElement>, target: number, suffix: string, duration = 1800) {
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      const start = performance.now();
      const step = (now: number) => {
        const p = Math.min((now - start) / duration, 1);
        const ease = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(ease * target) + suffix;
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
      io.disconnect();
    }, { threshold: .4 });
    io.observe(el);
    return () => io.disconnect();
  }, [ref, target, suffix, duration]);
}

/* ── Diff card data ─────────────────────────────────── */
const diffsLeft = [
  {
    iconClass: styles.icPu, labelClass: styles.lcPu, label: "Diferencial 01",
    title: "O serviço é de IA. Mas nós somos humanos.",
    desc: "Por trás de cada automação tem uma equipe que ouviu, pensou e construiu junto com você. A IA executa. A gente garante.",
    icon: (<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 2C6.13 2 3 5.13 3 9c0 2.39 1.19 4.5 3 5.74V17h8v-2.26C15.81 13.5 17 11.39 17 9c0-3.87-3.13-7-7-7z" stroke="#a855f7" strokeWidth="1.4" strokeLinejoin="round"/><path d="M8 17v1a2 2 0 004 0v-1" stroke="#a855f7" strokeWidth="1.4"/></svg>),
  },
  {
    iconClass: styles.icPk, labelClass: styles.lcPk, label: "Diferencial 02",
    title: "Comprometidos com segurança e eficiência.",
    desc: "Seus dados e os dados dos seus clientes são tratados com responsabilidade total. Nada de atalhos.",
    icon: (<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M12 2L2 7l10 5 10-5-10-5z" stroke="#ec4899" strokeWidth="1.4" strokeLinejoin="round"/><path d="M2 13l10 5 10-5M2 10l10 5 10-5" stroke="#ec4899" strokeWidth="1.4" strokeLinejoin="round"/></svg>),
  },
  {
    iconClass: styles.icOr, labelClass: styles.lcOr, label: "Diferencial 03",
    title: "Nos adaptamos ao seu problema. Não o contrário.",
    desc: "Cada empresa tem um jeito de funcionar. A Aura aprende esse jeito e se encaixa nele.",
    icon: (<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="7" stroke="#f97316" strokeWidth="1.4"/><path d="M10 6v4l3 2" stroke="#f97316" strokeWidth="1.4" strokeLinecap="round"/></svg>),
  },
];

const diffsRight = [
  {
    iconClass: styles.icCy, labelClass: styles.lcCy, label: "Diferencial 04",
    title: "Resultados mensuráveis desde o primeiro mês.",
    desc: "A gente não trabalha com promessa vaga. Cada entrega tem métricas claras para você acompanhar o retorno.",
    icon: (<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M3 10h14M10 3l7 7-7 7" stroke="#06b6d4" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>),
  },
  {
    iconClass: styles.icAm, labelClass: styles.lcAm, label: "Diferencial 05",
    title: "Atendimento direto. Sem intermediários.",
    desc: "Você fala com quem constrói. Sem call center, sem ticket perdido. Resposta rápida, decisão rápida.",
    icon: (<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 2l2.39 4.84L18 7.64l-4 3.9.94 5.5L10 14.27l-4.94 2.77.94-5.5-4-3.9 5.61-.8L10 2z" stroke="#fbbf24" strokeWidth="1.4" strokeLinejoin="round"/></svg>),
  },
  {
    iconClass: styles.icGr, labelClass: styles.lcGr, label: "Diferencial 06",
    title: "Você testa grátis antes de pagar qualquer coisa.",
    desc: "Reunião gratuita, solução construída sob medida e validação real. Só cobramos quando você confirmar que funciona.",
    icon: (<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M4 15l4-4 3 3 5-6" stroke="#22c55e" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/><rect x="2" y="2" width="16" height="16" rx="3" stroke="#22c55e" strokeWidth="1.4"/></svg>),
  },
];

/* ── Component ──────────────────────────────────────── */
const AboutAura = () => {
  const starsRef = useRef<HTMLCanvasElement>(null);
  const c1 = useRef<HTMLElement>(null);
  const c2 = useRef<HTMLElement>(null);
  const c3 = useRef<HTMLElement>(null);
  const { ref: hRef, visible: hv } = useIntersectionObserver(0.1);

  useStars(starsRef);
  useCounter(c1, 16,   "",  1800);
  useCounter(c2, 60,  "h", 2000);
  useCounter(c3, 100,  "%", 1600);

  const ArrowIcon = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="#0a0a18" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  return (
    <section id="sobre" className={styles.section}>
      <div className={styles.bg} />
      <div className={`${styles.blob} ${styles.blob1}`} />
      <div className={`${styles.blob} ${styles.blob2}`} />
      <div className={`${styles.blob} ${styles.blob3}`} />
      <canvas ref={starsRef} className={styles.starsCanvas} />
      <div className={styles.noise} />
      <div className={styles.vignette} />

      <div className={styles.container}>

        {/* Header */}
        <div ref={hRef} className={styles.header}
          style={{ opacity: hv?1:0, transform: hv?"none":"translateY(32px)", transition:"opacity .9s ease,transform .9s ease" }}>
          <div className={styles.eyebrow}>
            <div className={styles.dots}>
              <div className={styles.dot}/><div className={styles.dot}/><div className={styles.dot}/>
            </div>
            <span className={styles.eyebrowText}>Sobre a Aura</span>
          </div>
          <h2 className={styles.title}>
            Tecnologia de ponta,<br/>
            <span className={styles.titleGrad}>pessoas de verdade.</span>
          </h2>
          <p className={styles.subtitle}>
            A Aura é pequena de propósito. Assim a gente consegue dar atenção de verdade pra cada empresa que atende.
          </p>
        </div>


        {/* Stats bar */}
        <div className={styles.statsBar}>
          {[
            { ref: c1, label: "Projetos entregues",        sub: "e crescendo"      },
            { ref: c2, label: "Economizadas por cliente",  sub: "em média por mês" },
            { ref: c3, label: "Satisfação",                sub: "nos projetos entregues" },
          ].map((s, i) => (
            <div key={i} className={styles.statCell}>
              <span ref={s.ref as React.RefObject<HTMLSpanElement>} className={styles.statNum}>0</span>
              <span className={styles.statLabel}>{s.label}</span>
              <span className={styles.statSub}>{s.sub}</span>
            </div>
          ))}
        </div>
        

        {/* Diffs + Orbital */}
        <div className={styles.diffs}>

          <div className={styles.colLeft}>
            {diffsLeft.map((d, i) => (
              <div key={i} className={styles.diff}>
                <div className={`${styles.diffIcon} ${d.iconClass}`}>{d.icon}</div>
                <span className={`${styles.diffLabel} ${d.labelClass}`}>{d.label}</span>
                <p className={styles.diffTitle}>{d.title}</p>
                <p className={styles.diffDesc}>{d.desc}</p>
              </div>
            ))}
          </div>

          <div className={styles.colRight}>
            {diffsRight.map((d, i) => (
              <div key={i} className={styles.diff}>
                <div className={`${styles.diffIcon} ${d.iconClass}`}>{d.icon}</div>
                <span className={`${styles.diffLabel} ${d.labelClass}`}>{d.label}</span>
                <p className={styles.diffTitle}>{d.title}</p>
                <p className={styles.diffDesc}>{d.desc}</p>
              </div>
            ))}
          </div>

        </div>

        <div className={styles.orbitalCol}>
            <div className={styles.orbitalWrap}>
              <div className={`${styles.ring} ${styles.ring1}`} />
              <div className={`${styles.ring} ${styles.ring2}`} />
              <div className={`${styles.orbDot} ${styles.orbDot1}`} />
              <div className={`${styles.orbDot} ${styles.orbDot2}`} />
              <div className={`${styles.orbDot} ${styles.orbDot3}`} />
              <div className={styles.orbitalCenter}>
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                  <circle cx="18" cy="18" r="14" fill="url(#og)" opacity=".3"/>
                  <circle cx="18" cy="18" r="10" fill="url(#og)" opacity=".5"/>
                  <circle cx="18" cy="18" r="5"  fill="white"/>
                  <defs>
                    <linearGradient id="og" x1="4" y1="4" x2="32" y2="32" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#a855f7"/><stop offset="1" stopColor="#f97316"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        
        {/* Banner */}
        <div className={styles.banner}>
          <div className={styles.bannerText}>
            <p className={styles.bannerTitle}>Pronto pra ter IA trabalhando por você?</p>
            <p className={styles.bannerSub}>
              A primeira conversa é gratuita. A gente entende o seu negócio<br/>
              e mostra o que é possível — sem compromisso.
            </p>
          </div>
          <Button 
            variant="outline" 
            size="lg" 
            className="btn-primary flex items-center justify-center text-base sm:text-lg px-4 sm:px-8 py-4 w-[90%] sm:w-auto mx-auto h-auto whitespace-normal break-words leading-snug bg-white text-black"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="text-center">Quero I.A AGORA!!</span>
          </Button>
        </div>

      </div>
    </section>
  );
};

export default AboutAura;
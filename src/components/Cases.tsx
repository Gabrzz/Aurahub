import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { cases, marqueeCompanies } from "@/components/ui/cases.data.tsx";
import styles from "@/components/ui/Cases.module.css";

/* ── Aurora canvas hook ──────────────────────────────── */
function useAurora(canvasRef: React.RefObject<HTMLCanvasElement>) {
  useEffect(() => {
    const cv = canvasRef.current;
    if (!cv) return;
    const cx = cv.getContext("2d")!;
    let animId: number;

    const streams = [
      { x: .15, y: .6,  w: .6,  h: .35, hue: 270, speed: .0007, phase: 0 },
      { x: .5,  y: .5,  w: .7,  h: .4,  hue: 320, speed: .0005, phase: 2 },
      { x: .8,  y: .55, w: .5,  h: .3,  hue: 30,  speed: .0009, phase: 4 },
      { x: .35, y: .45, w: .55, h: .28, hue: 200, speed: .0006, phase: 1 },
    ];

    function resize() {
      cv.width  = cv.offsetWidth;
      cv.height = cv.offsetHeight;
    }
    resize();
    window.addEventListener("resize", resize);

    function draw(t: number) {
      const W = cv.width, H = cv.height;
      cx.clearRect(0, 0, W, H);
      cx.fillStyle = "#05050a";
      cx.fillRect(0, 0, W, H);

      streams.forEach(s => {
        const p  = t * s.speed + s.phase;
        const cx2 = s.x * W + Math.sin(p * 1.3) * W * .12;
        const cy2 = s.y * H + Math.cos(p * .9)  * H * .08;
        const rw  = s.w * W * (.85 + Math.sin(p * .7) * .15);
        const rh  = s.h * H * (.85 + Math.cos(p * .5) * .15);
        const alpha = .12 + Math.sin(p * 1.1) * .04;

        const g = cx.createRadialGradient(cx2, cy2, 0, cx2, cy2, rw * .5);
        g.addColorStop(0,   `hsla(${s.hue},80%,60%,${alpha})`);
        g.addColorStop(.4,  `hsla(${s.hue + 20},70%,50%,${alpha * .6})`);
        g.addColorStop(1,   `hsla(${s.hue + 40},60%,40%,0)`);

        cx.save();
        cx.scale(1, (rh / rw) * .55);
        cx.beginPath();
        cx.arc(cx2, cy2 * (rw / rh / .55), rw * .5, 0, Math.PI * 2);
        cx.fillStyle = g;
        cx.fill();
        cx.restore();
      });

      const vg = cx.createRadialGradient(W/2, H/2, H*.05, W/2, H/2, H*.75);
      vg.addColorStop(0, "rgba(5,5,10,0)");
      vg.addColorStop(1, "rgba(5,5,10,.88)");
      cx.fillStyle = vg; cx.fillRect(0, 0, W, H);

      const tg = cx.createLinearGradient(0, 0, 0, H * .25);
      tg.addColorStop(0, "rgba(5,5,10,1)");
      tg.addColorStop(1, "rgba(5,5,10,0)");
      cx.fillStyle = tg; cx.fillRect(0, 0, W, H * .25);

      animId = requestAnimationFrame(draw);
    }
    animId = requestAnimationFrame(draw);
    return () => { cancelAnimationFrame(animId); window.removeEventListener("resize", resize); };
  }, [canvasRef]);
}

/* ── Tag helper ──────────────────────────────────────── */
const tagClass = {
  purple: styles.tagPurple,
  orange: styles.tagOrange,
  pink:   styles.tagPink,
  cyan:   styles.tagCyan,
} as const;
const dotClass = {
  purple: styles.tagDotPurple,
  orange: styles.tagDotOrange,
  pink:   styles.tagDotPink,
  cyan:   styles.tagDotCyan,
} as const;

/* ── Component ───────────────────────────────────────── */
const Cases = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useAurora(canvasRef);

  const { ref: headerRef, visible: hv } = useIntersectionObserver(0.15);
  const { ref: gridRef,   visible: gv } = useIntersectionObserver(0.05);

  const [big, sm1, sm2, wide] = cases;

  const ArrowIcon = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  return (
    <section id="cases" className={styles.section}>
      <canvas ref={canvasRef} className={styles.auroraCanvas} />
      <div className={styles.grain} />

      <div className={styles.container}>

        {/* Header */}
        <div
          ref={headerRef}
          className={styles.header}
          style={{ opacity: hv?1:0, transform: hv?"none":"translateY(28px)", transition:"opacity .8s ease,transform .8s ease" }}
        >
          <div className={styles.eyebrow}>
            <div className={styles.dots}>
              <div className={styles.dot}/><div className={styles.dot}/><div className={styles.dot}/>
            </div>
            <span className={styles.eyebrowText}>Cases</span>
          </div>
          <h2 className={styles.title}>
            Empresas que já estão<br/>
            <span className={styles.titleAccent}>usando IA no dia a dia</span>
          </h2>
          <p className={styles.subtitle}>
            Não é coisa do futuro. Já está acontecendo. Se muitos já usam no dia a dia, por que você não colocaria na sua empresa?.
          </p>
        </div>

        {/* Marquee */}
        <div className={styles.marqueeWrap}>
          <div className={styles.marqueeTrack}>
            {[...marqueeCompanies, ...marqueeCompanies].map((name, i) => (
              <div key={i} className={styles.marqueeItem}>
                <span className={styles.marqueeLabel}>{name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div ref={gridRef} className={styles.grid}>

          {/* BIG card */}
          <div className={`${styles.card} ${styles.cardBig}`}
            style={{ opacity:gv?1:0, transform:gv?"none":"translateY(40px)", transition:"opacity .7s ease .1s,transform .7s ease .1s" }}
          >
            <div className={styles.innerBig}>
              <span className={styles.coLogo} style={{background:"linear-gradient(135deg,#a855f7,#ec4899)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"}}>
                {big.company}
              </span>
              <div className={`${styles.tag} ${tagClass[big.tagColor]}`}>
                <div className={`${styles.tagDot} ${dotClass[big.tagColor]}`}/>
                {big.tag}
              </div>
              <div className={styles.statRow}>
                {big.stat.map((s,i) => (
                  <div key={i} className={styles.stat}>
                    <span className={styles.statNum}>{s.value}</span>
                    <span className={styles.statLabel}>{s.label}</span>
                  </div>
                ))}
              </div>
              <div className={styles.divider}/>
              <p className={styles.cardTitle}>{big.title}</p>
              <p className={styles.cardDesc}>{big.description}</p>
              {big.auraDelivery && (
                <div className={styles.match}>
                  <span>↗</span> O que a Aura entrega: {big.auraDelivery}
                </div>
              )}
            </div>
          </div>

          {/* SM 1 */}
          <div className={`${styles.card} ${styles.cardSm1}`}
            style={{ opacity:gv?1:0, transform:gv?"none":"translateY(40px)", transition:"opacity .7s ease .25s,transform .7s ease .25s" }}
          >
            <div className={styles.innerSm}>
              <span className={styles.coLogoSm} style={{color:"#fb923c"}}>{sm1.company}</span>
              <div className={`${styles.tag} ${tagClass[sm1.tagColor]}`}>
                <div className={`${styles.tagDot} ${dotClass[sm1.tagColor]}`}/>{sm1.tag}
              </div>
              <div className={styles.statRow}>
                {sm1.stat.map((s,i) => (
                  <div key={i} className={styles.stat}>
                    <span className={styles.statNumSm}>{s.value}</span>
                    <span className={styles.statLabel}>{s.label}</span>
                  </div>
                ))}
              </div>
              <p className={styles.cardTitleSm}>{sm1.title}</p>
              <p className={styles.cardDesc}>{sm1.description}</p>
            </div>
          </div>

          {/* SM 2 */}
          <div className={`${styles.card} ${styles.cardSm2}`}
            style={{ opacity:gv?1:0, transform:gv?"none":"translateY(40px)", transition:"opacity .7s ease .4s,transform .7s ease .4s" }}
          >
            <div className={styles.innerSm}>
              <span className={styles.coLogoSm} style={{background:"linear-gradient(90deg,#ec4899,#f97316)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"}}>
                {sm2.company}
              </span>
              <div className={`${styles.tag} ${tagClass[sm2.tagColor]}`}>
                <div className={`${styles.tagDot} ${dotClass[sm2.tagColor]}`}/>{sm2.tag}
              </div>
              <div className={styles.statRow}>
                {sm2.stat.map((s,i) => (
                  <div key={i} className={styles.stat}>
                    <span className={styles.statNumSm}>{s.value}</span>
                    <span className={styles.statLabel}>{s.label}</span>
                  </div>
                ))}
              </div>
              <p className={styles.cardTitleSm}>{sm2.title}</p>
              <p className={styles.cardDesc}>{sm2.description}</p>
            </div>
          </div>

          {/* WIDE card */}
          <div className={`${styles.card} ${styles.cardWide}`}
            style={{ opacity:gv?1:0, transform:gv?"none":"translateY(40px)", transition:"opacity .7s ease .55s,transform .7s ease .55s" }}
          >
            <div className={styles.innerWide}>
              <div className={`${styles.tag} ${tagClass[wide.tagColor]}`}>
                <div className={`${styles.tagDot} ${dotClass[wide.tagColor]}`}/>{wide.tag}
              </div>
              <p className={styles.cardTitle}>{wide.title}</p>
              <p className={styles.cardDescWide}>{wide.description}</p>
              {wide.auraDelivery && (
                <div className={styles.match}>
                  <span>↗</span> O que a Aura entrega: {wide.auraDelivery}
                </div>
              )}
            </div>
            <div className={styles.wideLogo}>
              <span className={styles.coLogoWide}>
                o <span style={{color:"#22d3ee"}}>boticário</span>
              </span>
            </div>
          </div>

        </div>

        {/* CTA */}
        <div className={styles.cta}
          style={{ opacity:gv?1:0, transform:gv?"none":"translateY(20px)", transition:"opacity .8s ease .7s,transform .8s ease .7s" }}
        >
          <p className={styles.ctaLine}>
            Não somos nós que atendemos essas empresas —{" "}
            <strong>Mas o serviço que prestamos é o mesmo!</strong>
          </p>
          <Button 
            size="lg" 
            className="btn-hero text-base sm:text-lg px-4 sm:px-8 py-4 h-auto group w-[90%] sm:w-auto whitespace-normal break-words leading-snug mx-auto"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
          Se as grandes fazem, copie, por que errado não dá!
          </Button>
        </div>

      </div>
    </section>
  );
};

export default Cases;
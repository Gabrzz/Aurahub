// components/HowItWorks.tsx
"use client";

import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { VideoCard }               from "@/components/ui/VideoCard.tsx";
import { videos }                  from "@/components/ui/howitworks.data";
import styles                      from "@/components/ui/HowItWorks.module.css";

const HowItWorks = () => {
  const { ref: headerRef, visible: headerVisible } = useIntersectionObserver(0.2);
  const { ref: gridRef,   visible: gridVisible   } = useIntersectionObserver(0.05);

  return (
    <section id="how-it-works" className={styles.section}>

      {/* Background */}
      <div className={`${styles.orb} ${styles.orb1}`} />
      <div className={`${styles.orb} ${styles.orb2}`} />

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
            <span className={styles.eyebrowText}>Como funciona isso?</span>
          </div>

          <h2 className={styles.title}>
            Veja <span className={styles.titleGrad}>na prática</span>
          </h2>

          <p className={styles.subtitle}>
            Não é mágica. É processo. Mas o resultado parece mágico.
          </p>
        </div>

        {/* 2-col video grid */}
        <div ref={gridRef} className={styles.grid}>
          {videos.map((item, index) => (
            <VideoCard key={item.id} item={item} index={index} visible={gridVisible} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;
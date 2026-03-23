// components/ui/VideoCard.tsx
"use client";

import { useState } from "react";
import type { VideoItem } from "@/components/ui/howitworks.data";
import styles from "@/components/ui/HowItWorks.module.css";

const ClockIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ opacity: 0.35 }}>
    <circle cx="7" cy="7" r="5.5" stroke="rgba(255,255,255,.6)" strokeWidth="1.1"/>
    <path d="M7 4v3.5l2 1.5" stroke="rgba(255,255,255,.6)" strokeWidth="1.1" strokeLinecap="round"/>
  </svg>
);

const ChartIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ opacity: 0.35 }}>
    <path d="M2 10l3-3 2 2 3-4 2 3" stroke="rgba(255,255,255,.6)" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ArrowIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
    <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const PlayIcon = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <path d="M8 5.5L17 11L8 16.5V5.5Z" fill="white"/>
  </svg>
);

interface Props {
  item: VideoItem;
  index: number;
  visible: boolean;
}

export const VideoCard = ({ item, index, visible }: Props) => {
  const [open, setOpen] = useState(false);
  const isPurple = item.accentClass === "purple";

  const cardStyle: React.CSSProperties = {
    opacity:    visible ? 1 : 0,
    transform:  visible ? "translateY(0)" : "translateY(40px)",
    transition: `opacity 0.7s ease ${index * 0.15}s, transform 0.7s ease ${index * 0.15}s`,
  };

  return (
    <div
      className={`${styles.card} ${isPurple ? styles.cardPurple : styles.cardOrange}`}
      style={cardStyle}
    >
      {/* ── Thumbnail ── */}
      <div className={styles.thumb} onClick={() => setOpen(true)}>
        <div className={isPurple ? styles.thumbBgPurple : styles.thumbBgOrange} />

        <div className={styles.thumbTag}>
          <div className={isPurple ? styles.thumbTagDotPurple : styles.thumbTagDotOrange} />
          {item.thumbTag}
        </div>
        <div className={styles.thumbDur}>{item.duration}</div>

        {/* YouTube embed (shown after click) */}
        {open ? (
          <iframe
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: "none", zIndex: 10 }}
            src={`https://www.youtube.com/embed/${item.youtubeId}?autoplay=1`}
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        ) : (
          <div className={styles.playWrap}>
            <div className={`${styles.playRing} ${isPurple ? styles.playRingPurple : styles.playRingOrange}`} />
            <button className={isPurple ? styles.playBtnPurple : styles.playBtnOrange}>
              <PlayIcon />
            </button>
          </div>
        )}

        {/* Waveform decoration */}
        {!open && (
          <div className={styles.waveform}>
            {item.waveHeights.map((h, i) => (
              <div
                key={i}
                className="wave-bar"
                style={{
                  flex: 1,
                  height: `${h}px`,
                  background: `linear-gradient(to top, ${isPurple ? "#a855f7" : "#f97316"}, transparent)`,
                  borderRadius: "2px 2px 0 0",
                }}
              />
            ))}
          </div>
        )}
      </div>

      {/* ── Body ── */}
      <div className={styles.body}>
        <div className={isPurple ? styles.tagPurple : styles.tagOrange}>
          <div className={isPurple ? styles.tagDotPurple : styles.tagDotOrange} />
          <span className={isPurple ? styles.tagLabelPurple : styles.tagLabelOrange}>
            {item.tagLabel}
          </span>
        </div>

        <h3 className={styles.cardTitle}>{item.title}</h3>
        <p className={styles.cardDesc}>{item.description}</p>

        <div className={styles.footer}>
          <div className={styles.stats}>
            <div className={styles.statItem}>
              <ClockIcon />
              <span className={styles.statText}>{item.stat}</span>
            </div>
            <div className={styles.statItem}>
              <ChartIcon />
              <span className={styles.statText}>Caso real</span>
            </div>
          </div>
          <button
            className={isPurple ? styles.watchBtnPurple : styles.watchBtnOrange}
            onClick={() => setOpen(true)}
          >
            Assistir <ArrowIcon />
          </button>
        </div>
      </div>
    </div>
  );
};
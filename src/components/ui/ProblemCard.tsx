// components/ui/ProblemCard.tsx
"use client";

import { useState } from "react";
import type { ProblemItem } from "@/components/ui/about-data";
import styles from "@/components/ui/ProblemCard.module.css";

interface Props {
  item: ProblemItem;
  index: number;
  visible: boolean;
}

export const ProblemCard = ({ item, index, visible }: Props) => {
  const [hovered, setHovered] = useState(false);

  const cardStyle = {
    "--card-accent":      item.accent,
    "--card-accent-mid":  item.accent + "55",
    "--card-glow":        item.glow,
    "--card-tag-bg":      item.accent + "22",
    "--card-tag-border":  item.accent + "44",
    opacity:    visible ? 1 : 0,
    transform:  visible ? "translateY(0)" : "translateY(40px)",
    transition: `opacity 0.7s ease ${index * 0.15}s, transform 0.7s ease ${index * 0.15}s`,
  } as React.CSSProperties;

  return (
    <div
      className={styles.card}
      style={cardStyle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span className={styles.watermark}>{item.number}</span>

      <div className={styles.tag}>
        <div className={styles.tagDot} />
        <span className={styles.tagLabel}>{item.tag}</span>
      </div>

      <p className={styles.problem}>{item.problem}</p>
      <p className={styles.solution}>{item.solution}</p>

      <div className={styles.divider} />

      <p className={styles.detail}>{item.detail}</p>
    </div>
  );
};
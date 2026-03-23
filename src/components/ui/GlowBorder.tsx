"use client";

import React from "react";

interface GlowBorderProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}

const GlowBorder = ({
  children,
  className = "",
  glowColor = "rgba(139, 92, 246, 0.5)",
}: GlowBorderProps) => {
  return (
    <div
      className={`relative rounded-2xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 p-[1px] ${className}`}
      style={{
        boxShadow: `0 0 20px ${glowColor}`,
      }}
    >
      <div className="relative rounded-2xl bg-background/90 backdrop-blur-sm h-full w-full">
        {children}
      </div>
    </div>
  );
};

export default GlowBorder;
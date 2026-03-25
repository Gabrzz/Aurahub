import { useEffect, useRef, useState } from "react";

const CustomCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const outlineRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let outlineX = mouseX;
    let outlineY = mouseY;
    let requestRef: number;

    const onMouseMove = (e: MouseEvent) => {
      setIsVisible(true);
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
      }
    };

    const animate = () => {
      // Smooth interpolation for the outline
      outlineX += (mouseX - outlineX) * 0.2025; 
      outlineY += (mouseY - outlineY) * 0.2025;
      
      if (outlineRef.current) {
        outlineRef.current.style.transform = `translate3d(${outlineX}px, ${outlineY}px, 0) translate(-50%, -50%)`;
      }
      requestRef = requestAnimationFrame(animate);
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isPointer = 
        window.getComputedStyle(target).cursor === "pointer" ||
        target.tagName.toLowerCase() === "button" ||
        target.tagName.toLowerCase() === "a" ||
        target.closest("button") ||
        target.closest("a");
        
      setIsHovering(Boolean(isPointer));
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseover", onMouseOver);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);
    
    // Start animation loop
    requestRef = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", onMouseOver);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      cancelAnimationFrame(requestRef);
    };
  }, []);

  return (
    <>
      <style>{`
        /* Esconde o cursor padrão em toda a tela (inclusive sobre textos, cards e todos elementos) */
        @media (pointer: fine) {
          * {
            cursor: none !important;
          }
        }
      `}</style>
      
      {/* Círculo Externo Suave (Outline) */}
      <div 
        ref={outlineRef}
        className={`pointer-events-none fixed top-0 left-0 z-[99999] hidden sm:block transition-all duration-300 ease-out will-change-transform ${
          isVisible ? "opacity-100" : "opacity-0"
        } ${
          isHovering 
            ? "w-16 h-16 bg-gradient-to-tr from-[#9D62D9]/40 to-[#F16928]/40 blur-[2px] scale-150 border-none rounded-full" 
            : "w-10 h-10 border border-[#9D62D9]/70 rounded-full shadow-[0_0_15px_rgba(241,105,40,0.6)]"
        }`}
      />
      
      {/* Ponto Central Fixo (Dot) */}
      <div 
        ref={dotRef}
        className={`pointer-events-none fixed top-0 left-0 z-[99999] w-2.5 h-2.5 rounded-full bg-gradient-to-r from-[#9D62D9] to-[#F16928] hidden sm:block transition-all duration-200 ease-out will-change-transform shadow-[0_0_10px_rgba(157,98,217,0.8)] ${
          isVisible ? "opacity-100" : "opacity-0"
        } ${isHovering ? "scale-0" : "scale-100"}`}
      />
    </>
  );
};

export default CustomCursor;

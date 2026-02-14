import React, { useRef, useState, type MouseEvent } from "react";

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
}

const SpotlightCard: React.FC<SpotlightCardProps> = ({ children, className = "" }) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;

    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setOpacity(1);
  };

  const handleBlur = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleFocus}
      onMouseLeave={handleBlur}
      className={`relative overflow-hidden rounded-xl border border-white/10 bg-neutral-900/50 backdrop-blur-md transition-all duration-300 hover:border-white/20 ${className}`}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(168, 85, 247, 0.15), transparent 40%)`,
        }}
      />
      <div className="relative h-full">{children}</div>
    </div>
  );
};

export default SpotlightCard;
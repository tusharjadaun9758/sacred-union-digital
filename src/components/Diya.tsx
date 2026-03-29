const Diya = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`relative inline-flex flex-col items-center ${className}`}>
      {/* Flame */}
      <div className="animate-diya relative">
        <div
          className="w-4 h-6 rounded-full animate-flame"
          style={{
            background: "radial-gradient(ellipse at bottom, #FF9933, #FFD700, transparent)",
            filter: "blur(1px)",
          }}
        />
        <div
          className="absolute inset-0 w-4 h-6 rounded-full"
          style={{
            background: "radial-gradient(ellipse at bottom, #fff8, transparent)",
            filter: "blur(2px)",
          }}
        />
      </div>
      {/* Lamp body */}
      <svg width="32" height="20" viewBox="0 0 32 20" className="mt-[-2px]">
        <ellipse cx="16" cy="6" rx="14" ry="6" fill="#D4AF37" />
        <ellipse cx="16" cy="6" rx="10" ry="4" fill="#B8941F" />
        <rect x="12" y="10" width="8" height="8" rx="2" fill="#D4AF37" />
        <rect x="6" y="16" width="20" height="3" rx="1.5" fill="#B8941F" />
      </svg>
      {/* Glow */}
      <div
        className="absolute -top-4 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full animate-pulse-glow"
        style={{
          background: "radial-gradient(circle, hsl(43 80% 65% / 0.3), transparent)",
        }}
      />
    </div>
  );
};

export default Diya;

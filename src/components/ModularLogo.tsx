import React from 'react';

interface ModularLogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
  variant?: 'emblem' | 'full';
}

export const ModularLogo: React.FC<ModularLogoProps> = ({ 
  className = "w-10 h-10", 
  variant = 'emblem' 
}) => {
  if (variant === 'full') {
    return (
      <div className={`inline-flex items-center justify-center ${className}`}>
        <img 
          src="/modular-logo.png" 
          alt="Modular Systems Logo" 
          className="w-full h-auto object-contain select-none pointer-events-none mix-blend-multiply"
        />
      </div>
    );
  }

  // Emblem crop: focuses on the golden M and blue ascending arrow
  return (
    <div className={`relative inline-flex items-center justify-center overflow-hidden ${className}`}>
      <img 
        src="/modular-logo.png" 
        alt="Modular Systems Emblem" 
        className="w-[140%] max-w-none h-auto -translate-y-[4%] object-contain select-none pointer-events-none mix-blend-multiply"
      />
    </div>
  );
};

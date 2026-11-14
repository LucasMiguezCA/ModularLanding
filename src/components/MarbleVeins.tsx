import React from 'react';

interface MarbleVeinsProps {
  dark?: boolean;
}

export const MarbleVeins: React.FC<MarbleVeinsProps> = ({ dark = false }) => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none select-none z-0">
      <svg 
        viewBox="0 0 1400 1000" 
        preserveAspectRatio="none" 
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Subtle Quartz Mineral Refraction */}
          <filter id={dark ? "mineralRefractDark" : "mineralRefractLight"} x="-10%" y="-10%" width="120%" height="120%">
            <feGaussianBlur stdDeviation="0.8" result="softReflect" />
            <feMerge>
              <feMergeNode in="softReflect" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* ============================================================ */}
        {/* BASE STATIC MINERAL VEINS (100% Continuous, Subtle Lines)    */}
        {/* ============================================================ */}
        <g opacity={dark ? "0.6" : "0.75"}>
          {/* Grey / Mineral base lines - Continuous without cuts */}
          <path 
            d="M-100,160 Q240,90 480,360 T1100,380 Q1200,540 1450,640" 
            fill="none" 
            stroke={dark ? "#CBD5E1" : "#94A3B8"} 
            strokeWidth="0.85" 
            strokeOpacity={dark ? "0.18" : "0.22"} 
            strokeLinecap="round"
          />
          <path 
            d="M480,360 Q380,540 320,720 T120,1050" 
            fill="none" 
            stroke={dark ? "#94A3B8" : "#CBD5E1"} 
            strokeWidth="0.75" 
            strokeOpacity={dark ? "0.16" : "0.25"} 
            strokeLinecap="round"
          />
          <path 
            d="M-80,720 Q220,560 580,760 T1260,620" 
            fill="none" 
            stroke={dark ? "#E2E8F0" : "#94A3B8"} 
            strokeWidth="0.8" 
            strokeOpacity={dark ? "0.16" : "0.2"} 
            strokeLinecap="round"
          />
          <path 
            d="M160,-40 Q320,260 560,420" 
            fill="none" 
            stroke={dark ? "#CBD5E1" : "#E2E8F0"} 
            strokeWidth="0.6" 
            strokeOpacity={dark ? "0.18" : "0.3"} 
            strokeLinecap="round"
          />

          {/* Golden base lines - Continuous without cuts */}
          <path 
            d="M280,-50 Q540,220 820,390 T1200,880" 
            fill="none" 
            stroke="#D4AF37" 
            strokeWidth="0.9" 
            strokeOpacity={dark ? "0.45" : "0.38"} 
            strokeLinecap="round"
          />
          <path 
            d="M820,390 Q940,290 1120,260 T1450,290" 
            fill="none" 
            stroke="#F59E0B" 
            strokeWidth="0.75" 
            strokeOpacity={dark ? "0.4" : "0.35"} 
            strokeLinecap="round"
          />
          <path 
            d="M60,880 Q360,700 780,920 T1350,820" 
            fill="none" 
            stroke="#D4AF37" 
            strokeWidth="0.85" 
            strokeOpacity={dark ? "0.45" : "0.35"} 
            strokeLinecap="round"
          />
          <path 
            d="M780,920 Q880,1020 1020,1150" 
            fill="none" 
            stroke="#E5C07B" 
            strokeWidth="0.65" 
            strokeOpacity={dark ? "0.35" : "0.3"} 
            strokeLinecap="round"
          />
          <path 
            d="M980,50 Q750,220 620,500" 
            fill="none" 
            stroke="#D4AF37" 
            strokeWidth="0.7" 
            strokeOpacity={dark ? "0.38" : "0.3"} 
            strokeLinecap="round"
          />
        </g>

        {/* ============================================================ */}
        {/* ASYNCHRONOUS GLINT (Continuous lines that smoothly brighten) */}
        {/* ============================================================ */}
        <g filter={`url(#${dark ? "mineralRefractDark" : "mineralRefractLight"})`}>
          
          {/* 1. Grey Vein Primary: Upper Curve (Continuous) */}
          <path 
            d="M-100,160 Q240,90 480,360 T1100,380 Q1200,540 1450,640" 
            fill="none" 
            stroke={dark ? "#FFFFFF" : "#E2E8F0"} 
            strokeWidth="1.15" 
            strokeLinecap="round" 
            className="vein-glint-grey-1"
          />

          {/* 2. Gold Vein Primary: Diagonal Rift (Continuous) */}
          <path 
            d="M280,-50 Q540,220 820,390 T1200,880" 
            fill="none" 
            stroke={dark ? "#FDE68A" : "#F59E0B"} 
            strokeWidth="1.2" 
            strokeLinecap="round" 
            className="vein-glint-gold-1"
          />

          {/* 3. Grey Vein Secondary: Center-Left Fork (Continuous) */}
          <path 
            d="M480,360 Q380,540 320,720 T120,1050" 
            fill="none" 
            stroke={dark ? "#F8FAFC" : "#CBD5E1"} 
            strokeWidth="1.1" 
            strokeLinecap="round" 
            className="vein-glint-grey-2"
          />

          {/* 4. Gold Vein Secondary: Upper-Right Branch (Continuous) */}
          <path 
            d="M820,390 Q940,290 1120,260 T1450,290" 
            fill="none" 
            stroke={dark ? "#FEF08A" : "#D4AF37"} 
            strokeWidth="1.15" 
            strokeLinecap="round" 
            className="vein-glint-gold-2"
          />

          {/* 5. Grey Vein Horizon: Lower Left Traverse (Continuous) */}
          <path 
            d="M-80,720 Q220,560 580,760 T1260,620" 
            fill="none" 
            stroke={dark ? "#FFFFFF" : "#E2E8F0"} 
            strokeWidth="1.15" 
            strokeLinecap="round" 
            className="vein-glint-grey-3"
          />

          {/* 6. Gold Vein Horizon: Lower Traverse (Continuous) */}
          <path 
            d="M60,880 Q360,700 780,920 T1350,820" 
            fill="none" 
            stroke={dark ? "#FDE68A" : "#F59E0B"} 
            strokeWidth="1.2" 
            strokeLinecap="round" 
            className="vein-glint-gold-3"
          />

        </g>
      </svg>
    </div>
  );
};

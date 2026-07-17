import React from 'react';
import { motion } from 'motion/react';

interface LogoProps {
  className?: string;
  simplified?: boolean;
}

export default function Logo({ className, simplified = false }: LogoProps) {
  // Use responsive defaults if className is not provided
  const resolvedClassName = className || (simplified 
    ? "w-10 h-10" 
    : "w-full max-w-[320px] sm:max-w-[420px] md:max-w-[480px] lg:max-w-[540px] h-auto"
  );

  // If simplified, focus on the icon bounding box with proportional padding to prevent cropping [20 -65 480 480]
  // If full, use the full design bounding box with adequate height [100 -65 980 480]
  const viewBox = simplified ? "20 -65 480 480" : "100 -65 980 480";

  return (
    <motion.div
      className="inline-block animate-logo-float"
      initial={{ opacity: 0, scale: 0.95, filter: 'blur(8px)' }}
      animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
      transition={{ duration: 1.2, ease: 'easeOut' }}
      whileHover={{
        scale: 1.03,
        rotate: [0, -0.3, 0.3, 0],
        transition: { duration: 0.5, ease: 'easeInOut' }
      }}
    >
      <svg
        className={`${resolvedClassName} transition-all duration-300 drop-shadow-[0_0_8px_rgba(0,240,255,0.15)] hover:drop-shadow-[0_0_20px_rgba(0,240,255,0.35)]`}
        viewBox={viewBox}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Animated Gradient C */}
          <linearGradient id="lh-grad-c" x1="130" y1="50" x2="250" y2="390" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#00F0FF">
              <animate
                attributeName="stop-color"
                values="#00F0FF;#0052FF;#00F0FF"
                dur="6s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="100%" stopColor="#0052FF">
              <animate
                attributeName="stop-color"
                values="#0052FF;#00F0FF;#0052FF"
                dur="6s"
                repeatCount="indefinite"
              />
            </stop>
          </linearGradient>

          {/* Animated Gradient S */}
          <linearGradient id="lh-grad-s" x1="370" y1="50" x2="180" y2="390" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFFFFF">
              <animate
                attributeName="stop-color"
                values="#FFFFFF;#00F0FF;#FFFFFF"
                dur="8s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="50%" stopColor="#00F0FF">
              <animate
                attributeName="stop-color"
                values="#00F0FF;#0052FF;#00F0FF"
                dur="8s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="100%" stopColor="#05070F" />
          </linearGradient>

          {/* Gradient for Ion Glow */}
          <linearGradient id="lh-grad-ion" x1="250" y1="395" x2="250" y2="480" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#00F0FF" stopOpacity="0.9">
              <animate
                attributeName="stop-opacity"
                values="0.9;0.6;0.9"
                dur="4s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="40%" stopColor="#0052FF" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#05070F" stopOpacity="0" />
          </linearGradient>

          {/* Gradient for highlight path */}
          <linearGradient id="lh-grad-highlight" x1="250" y1="55" x2="200" y2="350" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
          </linearGradient>

          {/* Glow filter */}
          <filter id="lh-glow-filter" x="-25%" y="-25%" width="150%" height="150%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Symbol Group (Flutuante e Pulsante) */}
        <g transform="translate(10, -90)">
          {/* Ion glow background (Brilho sutil) */}
          <path
            d="M 250,385 C 220,385 200,410 200,435 C 200,465 225,480 250,480 C 275,480 300,465 300,435 C 300,410 280,385 250,385 Z"
            fill="url(#lh-grad-ion)"
          />

          {/* C-Shape with subtle glow filter */}
          <path
            d="M 250,55 C 215,55 130,135 130,270 C 130,320 155,365 190,375 C 195,355 190,335 185,315 C 175,270 175,210 205,150 C 215,130 230,115 250,115 Z"
            fill="url(#lh-grad-c)"
          />

          {/* S-Shape with subtle glow filter */}
          <path
            d="M 250,115 C 275,115 315,145 315,190 C 315,225 295,245 265,265 C 235,285 215,310 215,345 C 215,370 230,385 250,385 L 290,385 L 370,315 L 315,315 C 295,315 285,305 285,295 C 285,280 300,270 325,255 C 355,235 370,210 370,180 C 370,110 310,55 250,55 Z"
            fill="url(#lh-grad-s)"
          />

          {/* Highlight Path */}
          <path
            d="M 250,55 C 235,55 190,135 190,240 L 210,240 C 210,150 235,115 250,115 Z"
            fill="url(#lh-grad-highlight)"
            opacity="0.4"
          />

          {/* Halo Pulsante para o nó central */}
          <circle cx="250" cy="180" r="10" fill="#00F0FF" opacity="0.3" filter="url(#lh-glow-filter)">
            <animate attributeName="r" values="10;22;10" dur="3s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.4;0;0.4" dur="3s" repeatCount="indefinite" />
          </circle>

          {/* Nós Tecnológicos (Rede inteligente pulsante) */}
          {/* Nó Central */}
          <circle cx="250" cy="180" r="10" fill="#FFFFFF" opacity="0.95">
            <animate attributeName="r" values="10;12.5;10" dur="3s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.8;1;0.8" dur="3s" repeatCount="indefinite" />
          </circle>

          {/* Nó Lateral Esquerdo do 'C' */}
          <circle cx="130" cy="270" r="4.5" fill="#00F0FF" opacity="0.8">
            <animate attributeName="r" values="4.5;6.5;4.5" dur="2.5s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.6;1;0.6" dur="2.5s" repeatCount="indefinite" />
          </circle>

          {/* Nó Lateral Direito do 'S' */}
          <circle cx="370" cy="180" r="4.5" fill="#00F0FF" opacity="0.8">
            <animate attributeName="r" values="4.5;6.5;4.5" dur="2.8s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.6;1;0.6" dur="2.8s" repeatCount="indefinite" />
          </circle>
        </g>

        {/* Text Elements (Omit when simplified) */}
        {!simplified && (
          <g>
            {/* Title Text */}
            <text
              x="440"
              y="150"
              fill="#FFFFFF"
              fontSize="54"
              fontWeight="800"
              letterSpacing="-0.02em"
              className="title-text"
              style={{ fontFamily: '"Space Grotesk", sans-serif' }}
            >
              CLEDMÁRIO <tspan fill="#00F0FF">SANTOS</tspan>
            </text>

            {/* Subtitle Text */}
            <text
              x="445"
              y="200"
              fill="#94A3B8"
              fontSize="16"
              fontWeight="600"
              letterSpacing="0.4em"
              className="sub-text"
              style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
            >
              FULL STACK DEVELOPER
            </text>
          </g>
        )}
      </svg>
    </motion.div>
  );
}

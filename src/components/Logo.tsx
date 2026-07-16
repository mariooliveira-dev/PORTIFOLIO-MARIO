import React from 'react';
import { motion } from 'motion/react';

interface LogoProps {
  className?: string;
  simplified?: boolean;
}

export default function Logo({ className = "w-full max-w-[420px] h-auto", simplified = false }: LogoProps) {
  // SVG size changes based on whether it is simplified or full
  const viewBoxWidth = simplified ? 140 : 500;
  const viewBoxHeight = 140;

  return (
    <motion.div
      className="inline-block"
      initial={{ opacity: 0, scale: 0.95, filter: 'blur(8px)' }}
      animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
      transition={{ duration: 1, ease: 'easeOut' }}
      whileHover={{
        scale: 1.03,
        rotate: [0, -0.5, 0.5, 0],
        transition: { duration: 0.4, ease: 'easeInOut' }
      }}
    >
      <svg
        className={`${className} transition-all duration-300 drop-shadow-[0_0_8px_rgba(59,130,246,0.15)] hover:drop-shadow-[0_0_16px_rgba(59,130,246,0.35)]`}
        viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Animated gradient using moving positions */}
          <linearGradient id="grad-logo" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10b981">
              <animate
                attributeName="stop-color"
                values="#10b981;#3b82f6;#10b981"
                dur="8s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="50%" stopColor="#06b6d4">
              <animate
                attributeName="stop-color"
                values="#06b6d4;#10b981;#06b6d4"
                dur="8s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="100%" stopColor="#3b82f6">
              <animate
                attributeName="stop-color"
                values="#3b82f6;#06b6d4;#3b82f6"
                dur="8s"
                repeatCount="indefinite"
              />
            </stop>
          </linearGradient>

          {/* Glow filter */}
          <filter id="glow-filter" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Leve flutuação do container principal */}
        <g>
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0,0; 0,-3; 0,0"
            dur="6s"
            repeatCount="indefinite"
          />

          {/* Símbolo Bracket Dev */}
          <g transform="translate(15, 15)">
            
            {/* Brilho de fundo sutil */}
            <path
              d="M 40,25 L 15,60 L 40,95"
              stroke="url(#grad-logo)"
              strokeWidth="12"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              opacity="0.15"
              filter="url(#glow-filter)"
            />
            <path
              d="M 75,25 L 100,60 L 75,95"
              stroke="url(#grad-logo)"
              strokeWidth="12"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              opacity="0.15"
              filter="url(#glow-filter)"
            />

            {/* Bracket Esquerdo < */}
            <path
              d="M 40,25 L 15,60 L 40,95"
              stroke="url(#grad-logo)"
              strokeWidth="8"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
            
            {/* Bracket Direito > */}
            <path
              d="M 75,25 L 100,60 L 75,95"
              stroke="url(#grad-logo)"
              strokeWidth="8"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />

            {/* Nós Tecnológicos (Pulsantes nas pontas dos Brackets) */}
            {/* Pontas do Bracket Esquerdo */}
            <circle cx="40" cy="25" r="4" fill="#10b981">
              <animate attributeName="r" values="4;6;4" dur="2s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" repeatCount="indefinite" />
            </circle>
            <circle cx="15" cy="60" r="4.5" fill="#06b6d4">
              <animate attributeName="r" values="4.5;6.5;4.5" dur="2.5s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.6;1;0.6" dur="2.5s" repeatCount="indefinite" />
            </circle>
            <circle cx="40" cy="95" r="4" fill="#3b82f6">
              <animate attributeName="r" values="4;6;4" dur="3s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.7;1;0.7" dur="3s" repeatCount="indefinite" />
            </circle>

            {/* Pontas do Bracket Direito */}
            <circle cx="75" cy="25" r="4" fill="#10b981">
              <animate attributeName="r" values="4;6;4" dur="2.8s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.8;1;0.8" dur="2.8s" repeatCount="indefinite" />
            </circle>
            <circle cx="100" cy="60" r="4.5" fill="#06b6d4">
              <animate attributeName="r" values="4.5;6.5;4.5" dur="1.8s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.7;1;0.7" dur="1.8s" repeatCount="indefinite" />
            </circle>
            <circle cx="75" cy="95" r="4" fill="#3b82f6">
              <animate attributeName="r" values="4;6;4" dur="2.2s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.6;1;0.6" dur="2.2s" repeatCount="indefinite" />
            </circle>

            {/* Letras CS no Meio */}
            <text
              x="44"
              y="66"
              fill="#F8FAFC"
              fontSize="22"
              fontWeight="900"
              style={{ fontFamily: '"Space Grotesk", "Sora", sans-serif' }}
            >
              CS
            </text>

            {/* Cursor de Programação piscando */}
            <rect x="75" y="70" width="8" height="3" fill="#3b82f6">
              <animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite" />
            </rect>
          </g>

          {/* Texto (Apenas se não for simplificado) */}
          {!simplified && (
            <g transform="translate(155, 48)">
              {/* CLEDMARIO */}
              <text
                x="0"
                y="25"
                fill="#F8FAFC"
                fontSize="34"
                fontWeight="900"
                letterSpacing="2"
                style={{ fontFamily: '"Space Grotesk", "Sora", sans-serif' }}
              >
                CLEDMARIO
              </text>
              
              {/* SANTOS */}
              <text
                x="2"
                y="52"
                fill="#10b981"
                fontSize="16"
                fontWeight="700"
                letterSpacing="10"
                style={{ fontFamily: '"JetBrains Mono", monospace' }}
              >
                SANTOS
              </text>
              
              {/* SYSTEMS & TECHNOLOGY */}
              <text
                x="2"
                y="68"
                fill="#94a3b8"
                fontSize="9"
                fontWeight="600"
                letterSpacing="4"
                style={{ fontFamily: '"JetBrains Mono", monospace' }}
              >
                SYSTEMS &amp; TECHNOLOGY
              </text>
            </g>
          )}
        </g>
      </svg>
    </motion.div>
  );
}

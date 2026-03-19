export const CyberpunkIcons = {
  // Ícone de Violada X - Guitarra estilizada
  VioladaX: () => (
    <svg viewBox="0 0 100 100" className="w-full h-full" fill="currentColor">
      <path d="M50 10 L60 20 L60 50 L70 60 L60 70 L50 70 L40 60 L40 20 Z" fill="none" stroke="currentColor" strokeWidth="2"/>
      <circle cx="50" cy="40" r="8" fill="none" stroke="currentColor" strokeWidth="2"/>
      <line x1="50" y1="32" x2="50" y2="48" stroke="currentColor" strokeWidth="1"/>
    </svg>
  ),

  // Ícone de Dançarino X - Figura dançando com LED
  DancadorX: () => (
    <svg viewBox="0 0 100 100" className="w-full h-full" fill="currentColor">
      <circle cx="50" cy="20" r="8" fill="currentColor"/>
      <path d="M50 28 L45 45 L40 60 L45 70 L55 70 L60 60 L55 45 L50 28" fill="none" stroke="currentColor" strokeWidth="2"/>
      <line x1="45" y1="40" x2="30" y2="35" stroke="currentColor" strokeWidth="2"/>
      <line x1="55" y1="40" x2="70" y2="35" stroke="currentColor" strokeWidth="2"/>
      <rect x="48" y="15" width="4" height="4" fill="currentColor" opacity="0.7"/>
    </svg>
  ),

  // Ícone de CO2 - Nuvem estilizada
  CO2: () => (
    <svg viewBox="0 0 100 100" className="w-full h-full" fill="currentColor">
      <path d="M30 50 Q25 40 35 35 Q45 30 50 35 Q55 30 65 35 Q75 40 70 50 Q75 60 65 65 Q55 70 50 65 Q45 70 35 65 Q25 60 30 50" fill="none" stroke="currentColor" strokeWidth="2"/>
      <circle cx="40" cy="50" r="3" fill="currentColor"/>
      <circle cx="50" cy="50" r="3" fill="currentColor"/>
      <circle cx="60" cy="50" r="3" fill="currentColor"/>
    </svg>
  ),

  // Ícone de Shot - Copo estilizado
  Shot: () => (
    <svg viewBox="0 0 100 100" className="w-full h-full" fill="currentColor">
      <path d="M35 30 L40 70 Q40 75 45 75 L55 75 Q60 75 60 70 L65 30 Z" fill="none" stroke="currentColor" strokeWidth="2"/>
      <line x1="35" y1="30" x2="65" y2="30" stroke="currentColor" strokeWidth="2"/>
      <path d="M45 35 L50 60" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
    </svg>
  ),

  // Ícone de Óculos X - Óculos neon
  OculosX: () => (
    <svg viewBox="0 0 100 100" className="w-full h-full" fill="currentColor">
      <circle cx="30" cy="45" r="12" fill="none" stroke="currentColor" strokeWidth="2"/>
      <circle cx="70" cy="45" r="12" fill="none" stroke="currentColor" strokeWidth="2"/>
      <line x1="42" y1="45" x2="58" y2="45" stroke="currentColor" strokeWidth="2"/>
      <line x1="25" y1="45" x2="15" y2="45" stroke="currentColor" strokeWidth="1"/>
      <line x1="75" y1="45" x2="85" y2="45" stroke="currentColor" strokeWidth="1"/>
      <path d="M28 35 L32 30" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M72 35 L68 30" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  ),

  // Ícone de Música - Notas musicais estilizadas
  Musica: () => (
    <svg viewBox="0 0 100 100" className="w-full h-full" fill="currentColor">
      <path d="M30 60 Q30 40 40 30 Q50 25 55 35 L55 70" fill="none" stroke="currentColor" strokeWidth="2"/>
      <path d="M55 60 Q55 40 65 30 Q75 25 80 35 L80 70" fill="none" stroke="currentColor" strokeWidth="2"/>
      <ellipse cx="50" cy="75" rx="8" ry="6" fill="currentColor" opacity="0.6"/>
      <ellipse cx="75" cy="75" rx="8" ry="6" fill="currentColor" opacity="0.6"/>
    </svg>
  ),

  // Ícone de Energia/Raio
  Energia: () => (
    <svg viewBox="0 0 100 100" className="w-full h-full" fill="currentColor">
      <path d="M50 10 L65 40 L50 40 L70 80 L30 50 L50 50 Z" fill="none" stroke="currentColor" strokeWidth="2"/>
      <path d="M50 10 L65 40 L50 40 L70 80 L30 50 L50 50 Z" fill="currentColor" opacity="0.3"/>
    </svg>
  ),

  // Ícone de Palco/Performance
  Palco: () => (
    <svg viewBox="0 0 100 100" className="w-full h-full" fill="currentColor">
      <rect x="20" y="40" width="60" height="40" fill="none" stroke="currentColor" strokeWidth="2"/>
      <line x1="20" y1="40" x2="30" y2="20" stroke="currentColor" strokeWidth="2"/>
      <line x1="80" y1="40" x2="70" y2="20" stroke="currentColor" strokeWidth="2"/>
      <circle cx="35" cy="25" r="3" fill="currentColor"/>
      <circle cx="65" cy="25" r="3" fill="currentColor"/>
      <line x1="25" y1="55" x2="75" y2="55" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
    </svg>
  ),

  // Ícone de Vídeo/Play
  Video: () => (
    <svg viewBox="0 0 100 100" className="w-full h-full" fill="currentColor">
      <rect x="15" y="25" width="70" height="50" rx="5" fill="none" stroke="currentColor" strokeWidth="2"/>
      <path d="M40 40 L40 60 L60 50 Z" fill="currentColor"/>
      <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.3"/>
    </svg>
  ),
};

// Componente wrapper para usar os ícones
interface CyberpunkIconProps {
  name: string;
  className?: string;
}

export function CyberpunkIcon({ name, className = 'w-6 h-6' }: CyberpunkIconProps) {
  const Icon = CyberpunkIcons[name as keyof typeof CyberpunkIcons];
  if (!Icon) return null;
  return <div className={`text-[#FF2E4A] ${className}`}><Icon /></div>;
}

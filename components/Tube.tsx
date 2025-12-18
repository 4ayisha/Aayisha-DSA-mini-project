
import React from 'react';
import { Color } from '../types';
import { TUBE_CAPACITY } from '../constants';

interface TubeProps {
  colors: Color[];
  isSelected: boolean;
  onClick: () => void;
  isSmall?: boolean;
}

const Tube: React.FC<TubeProps> = ({ colors, isSelected, onClick, isSmall = false }) => {
  const heightClass = isSmall ? 'h-40 w-14' : 'h-60 w-20';
  const selectTranslate = isSelected ? '-translate-y-8 shadow-neon ring-2 ring-primary ring-offset-4 ring-offset-[#18181b]' : '';

  return (
    <div 
      onClick={onClick}
      className={`relative group cursor-pointer transition-all duration-300 transform ${selectTranslate} ${heightClass} rounded-b-full border-2 border-white/20 bg-white/5 backdrop-blur-sm overflow-hidden flex flex-col justify-end shadow-glass`}
    >
      {/* Selection Arrow */}
      {isSelected && (
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-primary animate-bounce">
          <span className="material-symbols-outlined text-3xl">keyboard_arrow_down</span>
        </div>
      )}

      {/* Inner Shadow/Depth */}
      <div className="absolute inset-0 rounded-b-full shadow-[inset_0_0_20px_rgba(0,0,0,0.5)] pointer-events-none z-20"></div>
      
      {/* Glass Highlight/Reflection */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/20 z-30 pointer-events-none opacity-60"></div>
      <div className="absolute top-4 left-2.5 w-1.5 h-3/4 bg-gradient-to-b from-white/30 via-white/5 to-transparent rounded-full z-40 pointer-events-none"></div>

      {/* Liquid Layers */}
      {colors.map((color, idx) => (
        <div 
          key={idx}
          className="w-full relative z-10 transition-all duration-300"
          style={{ 
            backgroundColor: color, 
            height: `${100 / TUBE_CAPACITY}%`,
            marginBottom: idx < colors.length - 1 ? '-4px' : '0'
          }}
        >
          {/* Surface Meniscus */}
          <div 
            className="absolute top-0 left-0 w-full h-3 opacity-50 liquid-surface -mt-1.5 blur-[1px]"
            style={{ backgroundColor: color, filter: 'brightness(1.2)' }}
          ></div>
          <div className="absolute inset-0 liquid-gloss"></div>
          
          {/* Bubbles */}
          {idx === colors.length - 1 && (
            <>
              <div className="absolute bottom-4 left-4 w-1 h-1 bg-white/40 rounded-full animate-pulse"></div>
              <div className="absolute bottom-8 right-6 w-1.5 h-1.5 bg-white/30 rounded-full animate-pulse delay-75"></div>
            </>
          )}
        </div>
      ))}

      {/* Empty space at the top */}
      <div 
        className="w-full bg-transparent z-10" 
        style={{ height: `${(TUBE_CAPACITY - colors.length) * (100 / TUBE_CAPACITY)}%` }}
      ></div>
    </div>
  );
};

export default Tube;

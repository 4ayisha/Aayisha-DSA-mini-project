
import React from 'react';

interface GameHeaderProps {
  level: number;
  moves: number;
  score: number;
}

const GameHeader: React.FC<GameHeaderProps> = ({ level, moves, score }) => {
  return (
    <header class="flex items-center justify-between p-6 z-10 sticky top-0 bg-background-dark/80 backdrop-blur-md">
      <button class="flex items-center justify-center size-10 rounded-full bg-white/5 hover:bg-white/10 active:bg-white/20 text-white/80 transition-all">
        <span class="material-symbols-outlined">pause</span>
      </button>
      
      <div class="flex flex-col items-center">
        <h2 class="text-white text-xl font-bold tracking-wide">Level {level}</h2>
        <div class="flex items-center gap-1 mt-0.5">
          <span class="material-symbols-outlined text-primary text-[14px]">bolt</span>
          <span class="text-primary/80 text-xs font-bold uppercase tracking-widest">Hard</span>
        </div>
      </div>
      
      <div class="flex flex-col items-end justify-center min-w-10">
        <span class="text-white/60 text-xs font-medium uppercase tracking-wider">Moves</span>
        <span class="text-primary text-lg font-bold leading-none">{moves}</span>
      </div>
    </header>
  );
};

export default GameHeader;

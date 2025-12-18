
import React from 'react';

const BottomNav: React.FC = () => {
  return (
    <nav className="border-t border-white/5 bg-background-dark/80 backdrop-blur-md pb-6 pt-2 px-6">
      <div className="flex justify-between items-center max-w-md mx-auto">
        <a className="flex flex-col items-center gap-1 p-2 text-primary transition-opacity" href="#">
          <span className="material-symbols-outlined text-[28px]">smart_toy</span>
          <span className="text-[10px] font-bold">Play</span>
        </a>
        <a className="flex flex-col items-center gap-1 p-2 text-white/40 hover:text-white transition-colors" href="#">
          <span className="material-symbols-outlined text-[28px]">leaderboard</span>
          <span className="text-[10px] font-bold">Rank</span>
        </a>
        <a className="flex flex-col items-center gap-1 p-2 text-white/40 hover:text-white transition-colors" href="#">
          <span className="material-symbols-outlined text-[28px]">palette</span>
          <span className="text-[10px] font-bold">Theme</span>
        </a>
        <a className="flex flex-col items-center gap-1 p-2 text-white/40 hover:text-white transition-colors" href="#">
          <span className="material-symbols-outlined text-[28px]">settings</span>
          <span className="text-[10px] font-bold">Settings</span>
        </a>
      </div>
    </nav>
  );
};

export default BottomNav;

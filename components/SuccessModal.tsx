
import React from 'react';

interface SuccessModalProps {
  level: number;
  onNextLevel: () => void;
  onRestart: () => void;
}

const SuccessModal: React.FC<SuccessModalProps> = ({ level, onNextLevel, onRestart }) => {
  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex flex-col items-center justify-center p-4 animate-in fade-in duration-300">
      {/* Confetti simulation would go here as static elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i} 
            className="confetti-piece bg-primary" 
            style={{ 
              left: `${Math.random() * 100}%`, 
              animationDelay: `${Math.random() * 3}s`,
              backgroundColor: ['#f9f506', '#00CCFF', '#FF00CC', '#32CD32'][Math.floor(Math.random() * 4)]
            }}
          ></div>
        ))}
      </div>

      <div className="relative w-full max-w-[340px] bg-charcoal rounded-xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-500 border border-white/10">
        {/* Visual Hero */}
        <div className="w-full h-40 bg-black/20 relative overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#f9f506 2px, transparent 2px)', backgroundSize: '20px 20px' }}></div>
          <div className="relative z-10 flex flex-col items-center justify-center">
            <div className="absolute inset-0 bg-primary blur-[40px] opacity-20 rounded-full scale-150"></div>
            <span className="material-symbols-outlined text-8xl text-primary drop-shadow-md">emoji_events</span>
          </div>
        </div>

        {/* Content Body */}
        <div className="px-6 pt-4 pb-8 text-center flex flex-col items-center">
          {/* Stars */}
          <div className="flex gap-2 mb-4 -mt-10 relative z-20">
            <div className="bg-charcoal p-1 rounded-full shadow-sm">
              <span className="material-symbols-outlined text-4xl text-primary">star</span>
            </div>
            <div className="bg-charcoal p-1 rounded-full shadow-sm -mt-4">
              <span className="material-symbols-outlined text-5xl text-primary">star</span>
            </div>
            <div className="bg-charcoal p-1 rounded-full shadow-sm">
              <span className="material-symbols-outlined text-4xl text-primary">star</span>
            </div>
          </div>

          <h1 className="text-white text-[32px] font-bold leading-tight tracking-tight mb-1">Level Cleared!</h1>
          <p className="text-neutral-400 text-sm font-medium mb-6">Perfect Score • +50 Coins</p>

          <button 
            onClick={onNextLevel}
            className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-[#e6e205] active:scale-95 transition-all text-black text-lg font-bold py-4 px-8 rounded-full shadow-[0_4px_14px_0_rgba(249,245,6,0.39)] mb-4"
          >
            <span>Next Level</span>
            <span class="material-symbols-outlined text-xl">arrow_forward</span>
          </button>

          <div className="flex items-center gap-4 justify-center w-full">
            <button 
              onClick={onRestart}
              className="flex items-center justify-center w-12 h-12 rounded-full bg-white/5 text-neutral-300 hover:bg-white/10 transition-colors"
            >
              <span class="material-symbols-outlined">replay</span>
            </button>
            <button className="flex items-center justify-center w-12 h-12 rounded-full bg-white/5 text-neutral-300 hover:bg-white/10 transition-colors">
              <span class="material-symbols-outlined">home</span>
            </button>
            <button className="flex items-center justify-center w-12 h-12 rounded-full bg-white/5 text-neutral-300 hover:bg-white/10 transition-colors">
              <span class="material-symbols-outlined">share</span>
            </button>
          </div>
        </div>
      </div>
      
      <div className="mt-6 text-white/60 text-xs font-medium bg-white/5 px-4 py-2 rounded-full backdrop-blur-sm border border-white/5">
        No Ads Mode Enabled
      </div>
    </div>
  );
};

export default SuccessModal;

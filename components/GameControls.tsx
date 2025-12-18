
import React from 'react';

interface GameControlsProps {
  onUndo: () => void;
  onRestart: () => void;
  onAddTube: () => void;
}

const GameControls: React.FC<GameControlsProps> = ({ onUndo, onRestart, onAddTube }) => {
  return (
    <div className="w-full px-6 pb-4 z-10 mt-auto">
      <div className="flex justify-center items-center gap-6 mb-8 max-w-md mx-auto">
        {/* Undo Button */}
        <button 
          onClick={onUndo}
          className="group flex flex-col items-center gap-2"
        >
          <div className="size-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white transition-all group-active:scale-95 hover:bg-white/10 hover:border-primary/50">
            <span className="material-symbols-outlined group-hover:text-primary transition-colors">undo</span>
          </div>
          <span className="text-xs font-bold text-white/40 uppercase tracking-wider group-hover:text-white/60">Undo</span>
        </button>

        {/* Add Tube Button */}
        <button 
          onClick={onAddTube}
          className="group flex flex-col items-center gap-2"
        >
          <div className="h-14 px-8 rounded-full bg-primary flex items-center justify-center text-black shadow-[0_0_20px_rgba(249,245,6,0.3)] transition-all group-active:scale-95 hover:bg-[#ebe705] hover:shadow-[0_0_30px_rgba(249,245,6,0.5)]">
            <span className="material-symbols-outlined mr-2 text-[28px]">add</span>
            <span className="text-sm font-bold uppercase tracking-wider">Tube</span>
          </div>
          <span className="text-xs font-bold text-white/40 uppercase tracking-wider group-hover:text-white/60">Cost: 50</span>
        </button>

        {/* Restart Button */}
        <button 
          onClick={onRestart}
          className="group flex flex-col items-center gap-2"
        >
          <div className="size-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white transition-all group-active:scale-95 hover:bg-white/10 hover:border-primary/50">
            <span className="material-symbols-outlined group-hover:text-primary transition-colors">refresh</span>
          </div>
          <span className="text-xs font-bold text-white/40 uppercase tracking-wider group-hover:text-white/60">Restart</span>
        </button>
      </div>
    </div>
  );
};

export default GameControls;

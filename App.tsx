
import React, { useState, useEffect, useCallback } from 'react';
import { GameState, Color } from './types';
import { generateLevel, canPour, pour, checkWin } from './services/gameLogic';
import GameHeader from './components/GameHeader';
import Tube from './components/Tube';
import GameControls from './components/GameControls';
import SuccessModal from './components/SuccessModal';
import BottomNav from './components/BottomNav';

const App: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>({
    tubes: generateLevel(1),
    moves: 0,
    level: 1,
    history: [],
    selectedTubeIndex: null,
    isGameOver: false,
    score: 0
  });

  const handleTubeClick = (index: number) => {
    if (gameState.isGameOver) return;

    const { tubes, selectedTubeIndex, moves, history } = gameState;

    if (selectedTubeIndex === null) {
      // Select source tube if it's not empty
      if (tubes[index].length > 0) {
        setGameState(prev => ({ ...prev, selectedTubeIndex: index }));
      }
    } else if (selectedTubeIndex === index) {
      // Deselect if clicking the same tube
      setGameState(prev => ({ ...prev, selectedTubeIndex: null }));
    } else {
      // Try to pour
      if (canPour(tubes, selectedTubeIndex, index)) {
        const newTubes = pour(tubes, selectedTubeIndex, index);
        const win = checkWin(newTubes);
        
        setGameState(prev => ({
          ...prev,
          tubes: newTubes,
          moves: prev.moves + 1,
          history: [...prev.history, tubes],
          selectedTubeIndex: null,
          isGameOver: win
        }));
      } else {
        // Change selection if clicking another non-empty tube that we can't pour into
        if (tubes[index].length > 0) {
          setGameState(prev => ({ ...prev, selectedTubeIndex: index }));
        } else {
          setGameState(prev => ({ ...prev, selectedTubeIndex: null }));
        }
      }
    }
  };

  const handleUndo = () => {
    if (gameState.history.length === 0 || gameState.isGameOver) return;
    
    setGameState(prev => {
      const lastHistory = prev.history[prev.history.length - 1];
      const newHistory = prev.history.slice(0, -1);
      return {
        ...prev,
        tubes: lastHistory,
        moves: prev.moves - 1,
        history: newHistory,
        selectedTubeIndex: null
      };
    });
  };

  const handleRestart = () => {
    setGameState(prev => ({
      ...prev,
      tubes: prev.history.length > 0 ? prev.history[0] : prev.tubes,
      moves: 0,
      history: [],
      selectedTubeIndex: null,
      isGameOver: false
    }));
  };

  const handleAddTube = () => {
    if (gameState.isGameOver) return;
    setGameState(prev => ({
      ...prev,
      tubes: [...prev.tubes, []],
      selectedTubeIndex: null
    }));
  };

  const handleNextLevel = () => {
    const nextLevel = gameState.level + 1;
    setGameState({
      tubes: generateLevel(nextLevel),
      level: nextLevel,
      moves: 0,
      history: [],
      selectedTubeIndex: null,
      isGameOver: false,
      score: gameState.score + 50
    });
  };

  return (
    <div className="flex flex-col h-screen w-full bg-background-dark overflow-hidden">
      <GameHeader 
        level={gameState.level} 
        moves={gameState.moves} 
        score={gameState.score} 
      />

      <main className="flex-1 flex flex-col items-center justify-center px-4 relative">
        <div className="absolute top-4 w-full text-center z-10 animate-pulse">
          <p className="text-white/40 text-lg font-medium">
            {gameState.selectedTubeIndex === null ? 'Select a tube' : 'Select target tube'}
          </p>
        </div>

        {/* Tube Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 gap-y-16 max-w-md w-full py-8 overflow-y-auto hide-scrollbar justify-items-center">
          {gameState.tubes.map((tubeColors, idx) => (
            <Tube
              key={idx}
              colors={tubeColors}
              isSelected={gameState.selectedTubeIndex === idx}
              onClick={() => handleTubeClick(idx)}
            />
          ))}
        </div>

        {/* Decorative background elements */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/5 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-500/5 rounded-full blur-[120px]"></div>
        </div>
      </main>

      <GameControls 
        onUndo={handleUndo}
        onRestart={handleRestart}
        onAddTube={handleAddTube}
      />

      <BottomNav />

      {gameState.isGameOver && (
        <SuccessModal 
          level={gameState.level}
          onNextLevel={handleNextLevel}
          onRestart={handleRestart}
        />
      )}
    </div>
  );
};

export default App;

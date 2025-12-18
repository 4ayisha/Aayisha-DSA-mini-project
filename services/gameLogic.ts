
import { Color, GameStatus } from '../types';
import { LIQUID_COLORS, TUBE_CAPACITY } from '../constants';

export const generateLevel = (levelNumber: number): Color[][] => {
  // Simple heuristic for level generation
  const numColors = Math.min(LIQUID_COLORS.length, 2 + Math.floor(levelNumber / 2));
  const numEmptyTubes = 2;
  const numTubes = numColors + numEmptyTubes;
  
  const pool: Color[] = [];
  for (let i = 0; i < numColors; i++) {
    for (let j = 0; j < TUBE_CAPACITY; j++) {
      pool.push(LIQUID_COLORS[i]);
    }
  }

  // Shuffle pool
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }

  const tubes: Color[][] = Array.from({ length: numTubes }, () => []);
  let poolIndex = 0;
  for (let i = 0; i < numColors; i++) {
    for (let j = 0; j < TUBE_CAPACITY; j++) {
      tubes[i].push(pool[poolIndex++]);
    }
  }

  return tubes;
};

export const canPour = (tubes: Color[][], fromIndex: number, toIndex: number): boolean => {
  if (fromIndex === toIndex) return false;
  const fromTube = tubes[fromIndex];
  const toTube = tubes[toIndex];

  if (fromTube.length === 0) return false;
  if (toTube.length >= TUBE_CAPACITY) return false;

  const sourceColor = fromTube[fromTube.length - 1];
  if (toTube.length === 0) return true;
  
  const targetColor = toTube[toTube.length - 1];
  return sourceColor === targetColor;
};

export const pour = (tubes: Color[][], fromIndex: number, toIndex: number): Color[][] => {
  const newTubes = tubes.map(t => [...t]);
  const fromTube = newTubes[fromIndex];
  const toTube = newTubes[toIndex];
  
  const colorToPour = fromTube[fromTube.length - 1];
  
  // Find how many consecutive segments of same color can be poured
  let count = 0;
  while (
    fromTube.length > 0 && 
    fromTube[fromTube.length - 1] === colorToPour && 
    toTube.length < TUBE_CAPACITY
  ) {
    toTube.push(fromTube.pop()!);
    count++;
  }
  
  return newTubes;
};

export const checkWin = (tubes: Color[][]): boolean => {
  return tubes.every(tube => {
    if (tube.length === 0) return true;
    if (tube.length < TUBE_CAPACITY) return false;
    const firstColor = tube[0];
    return tube.every(color => color === firstColor);
  });
};

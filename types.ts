
export type Color = 
  | '#FF00CC' // Neon Pink
  | '#00CCFF' // Electric Blue
  | '#32CD32' // Lime Green
  | '#FF4500' // Vibrant Orange
  | '#800080' // Purple
  | '#FF6B6B' // Neon Red
  | '#FFE66D'; // Neon Yellow

export interface GameState {
  tubes: Color[][];
  moves: number;
  level: number;
  history: Color[][][];
  selectedTubeIndex: number | null;
  isGameOver: boolean;
  score: number;
}

export enum GameStatus {
  PLAYING = 'PLAYING',
  WON = 'WON'
}


import { Color } from './types';

export const LIQUID_COLORS: Color[] = [
  '#FF00CC',
  '#00CCFF',
  '#32CD32',
  '#FF4500',
  '#800080',
  '#FF6B6B',
  '#FFE66D'
];

export const TUBE_CAPACITY = 4;

export const INITIAL_LEVELS: Color[][][] = [
  // Level 1: 3 tubes, 2 colors
  [
    ['#FF00CC', '#00CCFF', '#FF00CC', '#00CCFF'],
    ['#00CCFF', '#FF00CC', '#00CCFF', '#FF00CC'],
    []
  ],
  // Level 2: 4 tubes, 3 colors
  [
    ['#32CD32', '#FF4500', '#FF4500', '#32CD32'],
    ['#FF4500', '#32CD32', '#32CD32', '#FF4500'],
    ['#00CCFF', '#00CCFF', '#00CCFF', '#00CCFF'],
    []
  ]
];

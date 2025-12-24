export enum BetType {
  UNDER = 'Under',
  OVER = 'Over',
}

export interface GameResult {
  id: string;
  timestamp: number;
  threshold: number;
  betType: BetType;
  resultNumber: number;
  isWin: boolean;
}

export const GAME_CONFIG = {
  MIN_NUMBER: 1,
  MAX_NUMBER: 100,
  HISTORY_LIMIT: 10,
  DEFAULT_THRESHOLD: 50,
} as const;

export const MESSAGES = {
  WIN_TITLE: 'You won',
  LOSE_TITLE: 'You lost',
  NUMBER_HIGHER: 'Number was higher',
  NUMBER_LOWER: 'Number was lower',
  NO_GAMES: 'No games yet. Click PLAY to start!',
  DICE_GAME_TITLE: 'Dice Game',
  PLAY_BUTTON: 'PLAY',
} as const;

export const STORAGE_KEYS = {
  GAME_HISTORY: 'dice-game-history',
} as const;

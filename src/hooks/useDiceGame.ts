import { useState, useCallback, useEffect } from 'react';
import { BetType, GameResult } from '@/types';
import { GAME_CONFIG, STORAGE_KEYS } from '@/constants';

export const useDiceGame = () => {
  const [threshold, setThreshold] = useState<number>(GAME_CONFIG.DEFAULT_THRESHOLD);
  const [betType, setBetType] = useState<BetType>(BetType.OVER);
  const [history, setHistory] = useState<GameResult[]>([]);
  const [currentResult, setCurrentResult] = useState<GameResult | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    try {
      const saved = localStorage.getItem(STORAGE_KEYS.GAME_HISTORY);
      if (saved) {
        setHistory(JSON.parse(saved));
      }
    } catch (error) {
      console.error('Failed to load game history:', error);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (!isLoaded || typeof window === 'undefined') return;

    try {
      localStorage.setItem(STORAGE_KEYS.GAME_HISTORY, JSON.stringify(history));
    } catch (error) {
      console.error('Failed to save game history:', error);
    }
  }, [history, isLoaded]);

  const play = useCallback(() => {
    const randomNumber = Math.floor(Math.random() * GAME_CONFIG.MAX_NUMBER) + GAME_CONFIG.MIN_NUMBER;

    const isWin = betType === BetType.OVER
      ? randomNumber > threshold
      : randomNumber < threshold;

    const newResult: GameResult = {
      id: crypto.randomUUID(),
      timestamp: Date.now(),
      threshold,
      betType,
      resultNumber: randomNumber,
      isWin,
    };

    setCurrentResult(newResult);

    setHistory((prev) => {
      const newHistory = [newResult, ...prev];
      return newHistory.slice(0, GAME_CONFIG.HISTORY_LIMIT);
    });
  }, [threshold, betType]);

  return {
    threshold,
    setThreshold,
    betType,
    setBetType,
    currentResult,
    history,
    play,
  };
};

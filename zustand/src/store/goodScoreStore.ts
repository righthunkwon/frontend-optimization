import { create } from 'zustand';

interface Score {
  scoreA: number;
  scoreB: number;

  setScoreA: (scoreA: number) => void;
  setScoreB: (scoreB: number) => void;
}

export const useScoreStore = create<Score>((set) => ({
  scoreA: 0,
  scoreB: 0,

  setScoreA: (scoreA: number) => set({ scoreA }),
  setScoreB: (scoreB: number) => set({ scoreB }),
}));

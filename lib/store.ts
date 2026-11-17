import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type MockResult = {
  at: number;
  score: number;
  total: number;
  mode: string;
};

type State = {
  answers: Record<string, boolean>;
  mocks: MockResult[];
  sound: boolean;
  record: (id: string, ok: boolean) => void;
  recordMock: (m: MockResult) => void;
  toggleSound: () => void;
  reset: () => void;
};

export const useProgress = create<State>()(
  persist(
    (set) => ({
      answers: {},
      mocks: [],
      sound: true,
      record: (id, ok) => set((s) => ({ answers: { ...s.answers, [id]: ok } })),
      recordMock: (m) => set((s) => ({ mocks: [m, ...s.mocks].slice(0, 24) })),
      toggleSound: () => set((s) => ({ sound: !s.sound })),
      reset: () => set({ answers: {}, mocks: [] }),
    }),
    { name: 'vial-109' },
  ),
);

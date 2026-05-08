import { create } from "zustand";

export type Goal = {
  id: string;
  title: string;
  description?: string;
  progress: number; // 0–100
  taskIds: string[];
};

type GoalState = {
  goals: Goal[];

  setGoals: (goals: Goal[]) => void;
  addGoal: (goal: Goal) => void;
  updateGoal: (id: string, updated: Partial<Goal>) => void;
  deleteGoal: (id: string) => void;
};

export const useGoalStore = create<GoalState>((set) => ({
  goals: [],

  setGoals: (goals) => set({ goals }),

  addGoal: (goal) =>
    set((state) => ({
      goals: [goal, ...state.goals],
    })),

  updateGoal: (id, updated) =>
    set((state) => ({
      goals: state.goals.map((g) =>
        g.id === id ? { ...g, ...updated } : g
      ),
    })),

  deleteGoal: (id) =>
    set((state) => ({
      goals: state.goals.filter((g) => g.id !== id),
    })),
}));
import { create } from "zustand";

type UIState = {
  darkMode: boolean;
  loading: boolean;

  modal: {
    addTask: boolean;
    addGoal: boolean;
  };

  toggleDarkMode: () => void;
  setLoading: (loading: boolean) => void;

  openModal: (name: "addTask" | "addGoal") => void;
  closeModal: (name: "addTask" | "addGoal") => void;
};

export const useUIStore = create<UIState>((set) => ({
  darkMode: false,
  loading: false,

  modal: {
    addTask: false,
    addGoal: false,
  },

  toggleDarkMode: () =>
    set((state) => ({
      darkMode: !state.darkMode,
    })),

  setLoading: (loading) => set({ loading }),

  openModal: (name) =>
    set((state) => ({
      modal: { ...state.modal, [name]: true },
    })),

  closeModal: (name) =>
    set((state) => ({
      modal: { ...state.modal, [name]: false },
    })),
}));
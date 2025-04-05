// store/useThemeStore.js
import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("theme") || "light",
  setTheme: (newTheme) => {
    document.documentElement.setAttribute("data-theme", newTheme); // <-- IMPORTANT
    localStorage.setItem("theme", newTheme);
    set({ theme: newTheme });
  },
}));

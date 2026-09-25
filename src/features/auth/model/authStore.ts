import { create } from "zustand";
import type { User } from "@/src/entities/user/model/types";

interface AuthState {
  token: string | null;
  user: User | null;
  isAuthenticated: boolean;
  isInitialized: boolean;

  setAuth: (token: string, user: User) => void;
  logout: () => void;
  restoreAuth: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  token: null,
  user: null,
  isAuthenticated: false,
  isInitialized: false,

  setAuth: (token, user) => {
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));

    set({
      token,
      user,
      isAuthenticated: true,
      isInitialized: true,
    });
  },

  logout: () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    set({
      token: null,
      user: null,
      isAuthenticated: false,
      isInitialized: true,
    });
  },

  restoreAuth: () => {
    const token = localStorage.getItem("token");
    const userJson = localStorage.getItem("user");

    if (!token || !userJson) {
      set({
        isInitialized: true,
      });

      return;
    }

    try {
      const user: User = JSON.parse(userJson);

      set({
        token,
        user,
        isAuthenticated: true,
        isInitialized: true,
      });
    } catch {
      localStorage.removeItem("token");
      localStorage.removeItem("user");

      set({
        token: null,
        user: null,
        isAuthenticated: false,
        isInitialized: true,
      });
    }
  },
}));

import { create } from "zustand";

export interface ISessionUser {
  email: string;
  name: string;
  id: number;
  avatarUrl: string;
}

type Store = {
  sessionUser: ISessionUser | null;
  setSessionUser: (user: ISessionUser) => void;
  removeSessionUser: () => void;
};

export const useSessionStore = create<Store>()((set) => ({
  sessionUser: typeof window !== "undefined" ? JSON.parse(localStorage.getItem("sessionUser") || "null") : null,
  setSessionUser: (user) => set((state) => ({ sessionUser: user })),
  removeSessionUser: () => set((state) => ({ sessionUser: null })),
}));

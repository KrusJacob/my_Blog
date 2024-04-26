import { create } from "zustand";

interface currentUser {
  id: number | undefined;
  email: string;
  name: string;
  avatarUrl: string;
}

export type FilterType = "likes" | "all";
export type SortType = "new" | "old";

type Store = {
  currentUser: currentUser;
  search: string;
  filter: FilterType;
  sort: SortType;
  changeSearch: (str: string) => void;
  changeFilter: (filter: FilterType) => void;
  changeSort: (sort: SortType) => void;
  setCurrentUser: (user: currentUser) => void;
};

export const useStore = create<Store>()((set) => ({
  currentUser: {
    id: undefined,
    email: "",
    name: "",
    avatarUrl: "",
  },
  search: "",
  filter: "all",
  sort: "new",
  changeSearch: (str) => set((state) => ({ search: str })),
  changeFilter: (filter) => set((state) => ({ filter: filter })),
  changeSort: (sort) => set((state) => ({ sort: sort })),
  setCurrentUser: (user) => set((state) => ({ currentUser: user })),
}));

import { create } from "zustand";

export type FilterType = "all" | "my";
export type SortType = "new" | "old" | "likes";

type Store = {
  search: string;
  filter: FilterType;
  sort: SortType;
  changeSearch: (str: string) => void;
  changeFilter: (filter: FilterType) => void;
  changeSort: (sort: SortType) => void;
};

export const useStore = create<Store>()((set) => ({
  search: "",
  filter: "all",
  sort: "new",
  changeSearch: (str) => set((state) => ({ search: str })),
  changeFilter: (filter) => set((state) => ({ filter: filter })),
  changeSort: (sort) => set((state) => ({ sort: sort })),
}));


import { ClassInfo } from "@/models/characterType";
import { create } from "zustand";

interface RankStore{
  selectedClass: ClassInfo;
  setSelectedClass: (selected: ClassInfo) => void;
}

export const useRankStore = create<RankStore>((set, get) => ({
  selectedClass: {} as ClassInfo,
  setSelectedClass: (selected) => {
    set({
      selectedClass: selected
    })
  },
}))
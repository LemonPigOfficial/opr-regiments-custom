import { create } from "zustand";
import { ListApiResponse, ArmyBook, SpecialRuleDefinition, ArmyList } from "./interfaces";
import { devtools } from 'zustand/middleware'

export interface Store {
  listResponse: ListApiResponse | null;
  setListResponse: (res: ListApiResponse) => void;
  armyBooks: ArmyBook[];
  setArmyBooks: (armyBooks: ArmyBook[]) => void;
  rules: SpecialRuleDefinition[];
  setRules: (rules: SpecialRuleDefinition[]) => void;
  attackMultiplier: number;
  setAttackMultiplier: (value: number) => void;
  sizeMultiplier: number;
  setsizeMultiplier: (value: number) => void;
  loading: boolean;
  setLoading: (value: boolean) => void;
  BlastTemplates: boolean;
  setBlastTemplates: (value: boolean) => void;
}

export function createStore() {
  return create(devtools<Store>((set) => ({
    listResponse: null,
    setListResponse: (res: ListApiResponse) => set(() => ({ listResponse: res }), undefined, "setListResponse"),
    armyBooks: [],
    setArmyBooks: (armyBooks: ArmyBook[]) => set(() => ({ armyBooks }), undefined, "setArmyBooks"),
    rules: [],
    setRules: (rules: SpecialRuleDefinition[]) => set(() => ({ rules }), undefined, "setRules"),
    sizeMultiplier: 2,
    setsizeMultiplier: (value: number) => set(() => ({ sizeMultiplier: value }), undefined, "setsizeMultiplier"),
    loading: false,
    setLoading: (value: boolean) => set(() => ({ loading: value }), undefined, "setLoading"),
    BlastTemplates: false,
    setBlastTemplates: (value: boolean) => set(() => ({ BlastTemplates: value }), undefined, "setBlastTemplates"),
  })));
}

export const useAppStore = createStore();

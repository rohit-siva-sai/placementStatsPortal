import { create } from "zustand";
import { persist } from "zustand/middleware";

const useDatas = (set) => ({
  companies: [],
  profiles: [],
  allProfiles: [],
  events: [],
  upcomingEvents: [],
  pastEvents: [],

  loading: false,

  updateCompanies: async (value) => set((store) => ({ companies: value })),
  updateProfiles: async (value) => set((store) => ({ profiles: value })),
  updateEvents: async (value) => set((store) => ({ events: value })),
  updatUpcomingEvents: async (value) =>
    set((store) => ({ upcomingEvents: value })),
  updatePastEvents: async (value) => set((store) => ({ pastEvents: value })),
  updateAllProfiles: async (value) => set((store) => ({ allProfiles: value })),
  updateLoading: async (value) => set((store) => ({ loading: value })),
});

export const useData = create(useDatas, { name: "useData" });

import { create } from 'zustand'

type LayoutState = {
  isCompact?: boolean
  setIsCompact: (compact: boolean) => void
}

export const useLayoutStore = create<LayoutState>((set) => ({
  isCompact: undefined,
  setIsCompact: (compact) => set({ isCompact: compact }),
}))

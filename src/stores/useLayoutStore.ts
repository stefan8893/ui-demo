import { create } from 'zustand'

type LayoutState = {
  isContentCompact?: boolean
  setIsContentCompact: (compact: boolean) => void
}

export const useLayoutStore = create<LayoutState>((set) => ({
  isContentCompact: undefined,
  setIsContentCompact: (compact) => set({ isContentCompact: compact }),
}))

import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import { CardData, WalletState } from '@/types/wallet'

interface WalletStore extends WalletState {
  addCard: (card: CardData) => void
  removeCard: (id: string) => void
  updateCard: (id: string, updates: Partial<CardData>) => void
  toggleNfc: () => void
}

export const useWalletStore = create<WalletStore>()(
  persist(
    (set) => ({
      cards: [],
      nfcEnabled: false,
      addCard: (card) =>
        set((state) => ({
          cards: [...state.cards, card],
        })),
      removeCard: (id) =>
        set((state) => ({
          cards: state.cards.filter((card) => card.id !== id),
        })),
      updateCard: (id, updates) =>
        set((state) => ({
          cards: state.cards.map((card) =>
            card.id === id ? { ...card, ...updates } : card,
          ),
        })),
      toggleNfc: () =>
        set((state) => ({
          nfcEnabled: !state.nfcEnabled,
        })),
    }),
    {
      name: 'wallet-storage',
    },
  ),
)

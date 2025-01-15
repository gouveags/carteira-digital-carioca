export interface CardData {
  id: string
  type:
    | 'credit'
    | 'jae'
    | 'rg'
    | 'sus'
    | 'familia-carioca'
    | 'ticket'
    | 'custom'
  title: string
  subtitle?: string
  nickname?: string
  color?: string
  qrCode?: string
  date?: string
  time?: string
  venue?: string
  cardNumber?: string
  expiryDate?: string
  customImage?: string
}

export interface WalletState {
  cards: CardData[]
  nfcEnabled: boolean
}

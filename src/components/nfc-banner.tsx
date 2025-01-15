import { Info } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { useWalletStore } from '@/store/useWalletStore'

export function NfcBanner() {
  const { nfcEnabled, toggleNfc } = useWalletStore()

  if (nfcEnabled) return null

  return (
    <div className="mb-4 rounded-lg bg-card p-4">
      <div className="flex items-start gap-4">
        <Info className="h-5 w-5 text-blue-400" />
        <div className="flex-1">
          <p className="text-sm text-card-foreground">
            Ative o NFC para usar seus documentos com a Carteira
          </p>
        </div>
        <Button
          variant="link"
          className="text-blue-400 hover:text-blue-500"
          onClick={toggleNfc}
        >
          Ativar NFC
        </Button>
      </div>
    </div>
  )
}

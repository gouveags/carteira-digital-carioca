'use client'

import { Search } from 'lucide-react'

import { AddDocumentDrawer } from '@/components/add-document-drawer'
import { NfcBanner } from '@/components/nfc-banner'
import { Input } from '@/components/ui/input'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { WalletCard } from '@/components/wallet-card'
import { useWalletStore } from '@/store/useWalletStore'
import { CardData } from '@/types/wallet'

export default function DashboardPage() {
  const { cards } = useWalletStore()

  return (
    <div className="container mx-auto max-w-md space-y-4 p-4">
      <h1 className="text-2xl font-bold">Carteira Digital Rio</h1>

      <NfcBanner />

      <div className="relative">
        <Search className="absolute·left-3·top-1/2·h-4·w-4·-translate-y-1/2·transform·text-muted-foreground" />
        <Input placeholder="Buscar documentos..." className="pl-10" />
      </div>

      <Tabs defaultValue="all">
        <TabsList className="w-full">
          <TabsTrigger value="all" className="flex-1">
            Todos
          </TabsTrigger>
          <TabsTrigger value="documents" className="flex-1">
            Documentos
          </TabsTrigger>
          <TabsTrigger value="tickets" className="flex-1">
            Ingressos
          </TabsTrigger>
        </TabsList>
        <TabsContent value="all">
          <ScrollArea className="h-[60vh]">
            <div className="space-y-4 pr-4">
              {cards.map((card: CardData) => (
                <WalletCard key={card.id} data={card} />
              ))}
            </div>
          </ScrollArea>
        </TabsContent>
        <TabsContent value="documents">
          <ScrollArea className="h-[60vh]">
            <div className="space-y-4 pr-4">
              {cards
                .filter((card: CardData) => !card.type.includes('ticket'))
                .map((card: CardData) => (
                  <WalletCard key={card.id} data={card} />
                ))}
            </div>
          </ScrollArea>
        </TabsContent>
        <TabsContent value="tickets">
          <ScrollArea className="h-[60vh]">
            <div className="space-y-4 pr-4">
              {cards
                .filter((card: CardData) => card.type === 'ticket')
                .map((card: CardData) => (
                  <WalletCard key={card.id} data={card} />
                ))}
            </div>
          </ScrollArea>
        </TabsContent>
      </Tabs>

      <AddDocumentDrawer />
    </div>
  )
}

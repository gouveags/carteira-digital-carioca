import { MoreVertical, Pencil, Trash } from 'lucide-react'
import { QRCodeSVG } from 'qrcode.react'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'
import { useWalletStore } from '@/store/useWalletStore'
import { CardData } from '@/types/wallet'

interface WalletCardProps {
  data: CardData
}

export function WalletCard({ data }: WalletCardProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [newNickname, setNewNickname] = useState(data.title)
  const { removeCard } = useWalletStore()

  const handleDelete = () => {
    if (confirm('Tem certeza que deseja remover este item?')) {
      removeCard(data.id)
    }
  }

  const getPreviewStyle = () => {
    switch (data.type) {
      case 'credit':
        return 'bg-[#1a1a1a] text-white'
      case 'jae':
        return 'bg-[#FFD700] text-black'
      case 'rg':
        return 'bg-blue-600 text-white'
      default:
        return ''
    }
  }

  return (
    <Card
      className={`w-full overflow-hidden transition-all hover:shadow-lg ${getPreviewStyle()}`}
    >
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div>
          <CardTitle>{data.title}</CardTitle>
          {data.subtitle && <CardDescription>{data.subtitle}</CardDescription>}
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <MoreVertical className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <Dialog open={isEditing} onOpenChange={setIsEditing}>
              <DialogTrigger asChild>
                <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                  <Pencil className="mr-2 h-4 w-4" />
                  Editar
                </DropdownMenuItem>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Editar Apelido</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <Input
                    value={newNickname}
                    onChange={(e) => setNewNickname(e.target.value)}
                    placeholder="Novo apelido"
                  />
                  <Button
                    className="w-full"
                    onClick={() => {
                      // Implement edit logic here
                      setIsEditing(false)
                    }}
                  >
                    Salvar
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
            <DropdownMenuItem
              className="text-destructive"
              onClick={handleDelete}
            >
              <Trash className="mr-2 h-4 w-4" />
              Remover
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            {data.cardNumber && (
              <div className="font-mono">
                {data.type === 'credit'
                  ? `**** **** **** ${data.cardNumber.slice(-4)}`
                  : data.cardNumber}
              </div>
            )}
            {data.expiryDate && (
              <div className="text-sm">Válido até: {data.expiryDate}</div>
            )}
            {data.date && <div className="text-sm">Data: {data.date}</div>}
            {data.time && <div className="text-sm">Horário: {data.time}</div>}
            {data.venue && <div className="text-sm">Local: {data.venue}</div>}
          </div>
          {data.qrCode && (
            <div className="rounded-lg bg-white p-2">
              <QRCodeSVG value={data.qrCode} size={100} />
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

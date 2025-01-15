'use client'

import {
  BadgeIcon as IdCard,
  Bus,
  CreditCard,
  Gift,
  Heart,
  Ticket,
  Upload,
} from 'lucide-react'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'

import { CreditCardForm } from './forms/credit-card-form'
import { JaeForm } from './forms/jae-form'

type DocumentType =
  | 'credit'
  | 'rg'
  | 'jae'
  | 'ticket'
  | 'sus'
  | 'familia-carioca'
  | 'custom'
  | null

interface AddDocumentOption {
  icon: React.ReactNode
  title: string
  description: string
  type: DocumentType
}

const options: AddDocumentOption[] = [
  {
    icon: <CreditCard className="h-6 w-6" />,
    title: 'Cartão de Crédito',
    description: 'Adicione seu cartão de crédito',
    type: 'credit',
  },
  {
    icon: <IdCard className="h-6 w-6" />,
    title: 'RG Digital',
    description: 'Adicione seu RG Digital',
    type: 'rg',
  },
  {
    icon: <Bus className="h-6 w-6" />,
    title: 'Jaé',
    description: 'Adicione seu cartão de transporte',
    type: 'jae',
  },
  {
    icon: <Ticket className="h-6 w-6" />,
    title: 'Ingressos',
    description: 'Adicione ingressos de eventos',
    type: 'ticket',
  },
  {
    icon: <Heart className="h-6 w-6" />,
    title: 'Cartão do SUS',
    description: 'Adicione seu cartão do SUS',
    type: 'sus',
  },
  {
    icon: <Gift className="h-6 w-6" />,
    title: 'Cartão Família Carioca',
    description: 'Adicione seu cartão de benefícios',
    type: 'familia-carioca',
  },
  {
    icon: <Upload className="h-6 w-6" />,
    title: 'Documento Personalizado',
    description: 'Adicione um documento com imagem',
    type: 'custom',
  },
]

export function AddDocumentDrawer() {
  const [selectedType, setSelectedType] = useState<DocumentType>(null)
  const [isOpen, setIsOpen] = useState(false)

  const handleSuccess = () => {
    setSelectedType(null)
    setIsOpen(false)
  }

  const renderHeader = () => (
    <DrawerHeader className="flex items-center justify-between">
      <DrawerTitle>
        {selectedType ? 'Adicionar Documento' : 'Escolha o tipo de documento'}
      </DrawerTitle>
      {selectedType && (
        <Button variant="ghost" onClick={() => setSelectedType(null)}>
          Voltar
        </Button>
      )}
    </DrawerHeader>
  )

  const renderForm = () => {
    switch (selectedType) {
      case 'credit':
        return <CreditCardForm onSuccess={handleSuccess} />
      case 'jae':
        return <JaeForm onSuccess={handleSuccess} />
      default:
        return (
          <div className="space-y-2 p-4">
            {options.map((option) => (
              <Button
                key={option.type}
                variant="ghost"
                className="h-auto w-full justify-start gap-4 py-4"
                onClick={() => setSelectedType(option.type)}
              >
                <div className="rounded-full bg-primary/10 p-2 text-primary">
                  {option.icon}
                </div>
                <div className="text-left">
                  <div className="font-semibold">{option.title}</div>
                  <div className="text-sm text-muted-foreground">
                    {option.description}
                  </div>
                </div>
              </Button>
            ))}
          </div>
        )
    }
  }

  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline" className="w-full">
          Adicionar à Carteira
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        {renderHeader()}
        {renderForm()}
      </DrawerContent>
    </Drawer>
  )
}

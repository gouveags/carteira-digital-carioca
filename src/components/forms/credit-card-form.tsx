'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useWalletStore } from '@/store/useWalletStore'

const formSchema = z.object({
  nickname: z.string().min(1, 'Apelido é obrigatório'),
  cardNumber: z
    .string()
    .min(16, 'Número do cartão deve ter 16 dígitos')
    .max(16, 'Número do cartão deve ter 16 dígitos'),
  expiryDate: z
    .string()
    .regex(/^(0[1-9]|1[0-2])\/([0-9]{2})$/, 'Data inválida (MM/YY)'),
})

export function CreditCardForm({ onSuccess }: { onSuccess: () => void }) {
  const addCard = useWalletStore((state) => state.addCard)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nickname: '',
      cardNumber: '',
      expiryDate: '',
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    try {
      addCard({
        id: crypto.randomUUID(),
        type: 'credit',
        title: values.nickname,
        cardNumber: values.cardNumber.replace(/(\d{4})/g, '$1 ').trim(),
        expiryDate: values.expiryDate,
        color: '#1a1a1a',
      })
      onSuccess()
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="nickname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Apelido do Cartão</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="cardNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Número do Cartão</FormLabel>
              <FormControl>
                <Input {...field} maxLength={16} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="expiryDate"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Data de Validade</FormLabel>
              <FormControl>
                <Input {...field} placeholder="MM/YY" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? 'Adicionando...' : 'Adicionar Cartão'}
        </Button>
      </form>
    </Form>
  )
}

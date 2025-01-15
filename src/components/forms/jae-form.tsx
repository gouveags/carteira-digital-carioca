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
  cardNumber: z.string().min(1, 'Número do cartão é obrigatório'),
})

export function JaeForm({ onSuccess }: { onSuccess: () => void }) {
  const addCard = useWalletStore((state) => state.addCard)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nickname: '',
      cardNumber: '',
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    try {
      addCard({
        id: crypto.randomUUID(),
        type: 'jae',
        title: values.nickname,
        cardNumber: values.cardNumber,
        color: '#FFD700',
        qrCode: `JAE-${values.cardNumber}`,
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
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? 'Adicionando...' : 'Adicionar Jaé'}
        </Button>
      </form>
    </Form>
  )
}

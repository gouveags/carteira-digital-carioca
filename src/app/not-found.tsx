import { AlertCircle } from 'lucide-react'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <div className="mb-4 flex items-center justify-center">
            <AlertCircle className="h-12 w-12 text-yellow-500" />
          </div>
          <CardTitle className="text-center text-2xl">
            Página não encontrada
          </CardTitle>
          <CardDescription className="text-center">
            Desculpe, a página que você está procurando não existe.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center">
          <Link href="/">
            <Button>Voltar para a página principal</Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  )
}

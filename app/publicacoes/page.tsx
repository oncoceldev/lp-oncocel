import type { Metadata } from 'next'
import PublicationsSection from '@/components/publications/PublicationsSection'

export const metadata: Metadata = {
  title: 'Publicações — ONCOCEL · UPE',
  description: 'Produção científica do ONCOCEL: artigos, trabalhos em congresso e resumos publicados.',
}

export default function PublicacoesPage() {
  return <PublicationsSection />
}

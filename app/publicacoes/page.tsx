import type { Metadata } from 'next'
import PublicationsSection from '@/components/publications/PublicationsSection'

export const metadata: Metadata = {
  title: 'Publicações',
  description: 'Acesse a lista de artigos científicos e produções acadêmicas do grupo de pesquisa ONCOCEL.',
}

export default function PublicationsPage() {
  return <PublicationsSection />
}

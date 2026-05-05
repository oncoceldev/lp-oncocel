import type { Metadata } from 'next'
import MembersSection from '@/components/members/MembersSection'

export const metadata: Metadata = {
  title: 'Integrantes',
  description: 'Conheça os pesquisadores, pós-doutorandos, mestrandos e bolsistas de iniciação científica que compõem o grupo ONCOCEL.',
}

export default function IntegrantesPage() {
  return <MembersSection />
}

import type { Metadata } from 'next'
import MembersSection from '@/components/members/MembersSection'

export const metadata: Metadata = {
  title: 'Integrantes — ONCOCEL · UPE',
  description: 'Conheça os pesquisadores do ONCOCEL: coordenação, pós-doutoranda, doutoranda, mestrandas e estudantes de iniciação científica.',
}

export default function IntegrantesPage() {
  return <MembersSection />
}

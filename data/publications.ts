export type PublicationCategory = 'artigos' | 'congressos' | 'resumos'

export interface Publication {
  year: number
  title: string
  authors: string
  venue: string
  category: PublicationCategory
  doi?: string
}

export const PUBLICATIONS: Publication[] = [
  // Dados a serem preenchidos conforme produção do grupo
]

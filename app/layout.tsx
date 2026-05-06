import type { Metadata } from 'next'
import { Geist, Geist_Mono, Instrument_Serif } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const instrumentSerif = Instrument_Serif({
  variable: '--font-instrument-serif',
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://lp-oncocel.vercel.app'),
  title: {
    default: 'ONCOCEL — Oncologia Celular Experimental · UPE',
    template: '%s | ONCOCEL · UPE'
  },
  description:
    'Grupo de Pesquisa em Oncologia Celular Experimental da Universidade de Pernambuco (UPE), Garanhuns. Investigamos mecanismos celulares do câncer e potenciais terapêuticos.',
  keywords: ['ONCOCEL', 'Oncologia', 'Câncer', 'Pesquisa Celular', 'UPE', 'Garanhuns', 'Biologia Celular', 'Ciência', 'Pernambuco'],
  authors: [{ name: 'ONCOCEL' }],
  creator: 'ONCOCEL',
  publisher: 'Universidade de Pernambuco',
  alternates: {
    canonical: 'https://lp-oncocel.vercel.app',
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://lp-oncocel.vercel.app',
    siteName: 'ONCOCEL',
    title: 'ONCOCEL — Oncologia Celular Experimental · UPE',
    description: 'Grupo de pesquisa dedicado ao estudo de processos celulares associados ao câncer na Universidade de Pernambuco.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ONCOCEL - Oncologia Celular Experimental',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ONCOCEL — Oncologia Celular Experimental · UPE',
    description: 'Grupo de pesquisa dedicado ao estudo de processos celulares associados ao câncer na Universidade de Pernambuco.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable}`}
    >
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
        <ScrollReveal />
      </body>
    </html>
  )
}

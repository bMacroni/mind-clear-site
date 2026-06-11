import type { Metadata } from 'next'
import { Outfit, Fraunces } from 'next/font/google'
import './globals.css'

const outfit = Outfit({ subsets: ['latin'], variable: '--font-sans' })
const fraunces = Fraunces({
  weight: ['300', '400'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-serif',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://mind-clear.com'),
  title: 'Mind Clear — Clear your head. One step at a time.',
  description:
    'Dump everything on your mind. Mind Clear turns it into a plan. AI-powered planning built for ADHD brains — gentle on bad days. Free on Android.',
  keywords: ['ADHD', 'ADHD planner', 'brain dump', 'task paralysis', 'AI planning'],
  authors: [{ name: 'Mind Clear' }],
  openGraph: {
    title: 'Mind Clear — Clear your head. One step at a time.',
    description:
      'Dump everything on your mind. Mind Clear turns it into a plan. Built for ADHD brains.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${fraunces.variable} font-sans`}>{children}</body>
    </html>
  )
}

import type { Metadata } from 'next'
import { Outfit, Playfair_Display } from 'next/font/google'
import './globals.css'

const outfit = Outfit({ subsets: ['latin'], variable: '--font-sans' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-serif' })

export const metadata: Metadata = {
  title: 'Mind Clear Studio - AI-Powered Solutions for Everyday Life',
  description: 'Bringing the transformative power of AI into the hands of everyday people, one thoughtfully crafted app at a time.',
  keywords: ['AI', 'productivity', 'ADHD', 'mindfulness', 'technology', 'apps'],
  authors: [{ name: 'Mind Clear Studio' }],
  openGraph: {
    title: 'Mind Clear Studio',
    description: 'AI-Powered Solutions for Everyday Life',
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
      <body className={`${outfit.variable} ${playfair.variable} font-sans`}>{children}</body>
    </html>
  )
}

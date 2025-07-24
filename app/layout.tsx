import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TripQuest.cc - Smart Hotel Rebooking',
  description: 'Automatically rebook your hotel when prices drop. Save money on every trip.',
  keywords: 'hotel, booking, price drop, travel, savings, rebook',
  authors: [{ name: 'TripQuest Team' }],
  robots: 'index, follow',
  openGraph: {
    title: 'TripQuest.cc - Smart Hotel Rebooking',
    description: 'Automatically rebook your hotel when prices drop',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TripQuest.cc - Smart Hotel Rebooking',
    description: 'Automatically rebook your hotel when prices drop',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
          {children}
        </div>
      </body>
    </html>
  )
}

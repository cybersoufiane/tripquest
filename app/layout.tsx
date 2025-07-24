/**
 * File: layout.tsx
 * Path: app/layout.tsx
 * Description: Root layout component for TripQuest application. Includes metadata,
 *              font loading, and global styling for the travel savings platform.
 */

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TripQuest - Your Travel Savings Agent',
  description: 'Never overpay for hotels again. We automatically monitor your bookings and rebook you at lower prices when they drop. Save money on every trip with TripQuest.',
  keywords: 'hotel savings, travel deals, price monitoring, automatic rebooking, hotel discounts, travel agent',
  authors: [{ name: 'TripQuest Team' }],
  creator: 'TripQuest',
  publisher: 'TripQuest',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://tripquest.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'TripQuest - Your Travel Savings Agent',
    description: 'Never overpay for hotels again. Automatic price monitoring and rebooking for smart travelers.',
    url: 'https://tripquest.com',
    siteName: 'TripQuest',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'TripQuest - Travel Savings Agent',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TripQuest - Your Travel Savings Agent',
    description: 'Never overpay for hotels again. Automatic price monitoring and rebooking.',
    images: ['/images/twitter-image.jpg'],
    creator: '@TripQuest',
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
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
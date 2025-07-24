/**
 * File: header.tsx
 * Path: app/components/header.tsx
 * Description: Main navigation header component with custom warm orange background
 *              RGB(255, 231, 209) and TripQuest logo integration.
 */

'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 shadow-soft" style={{ backgroundColor: 'rgb(255, 231, 209)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <Image
                src="/images/tripquest-logo.png"
                alt="TripQuest - Your Travel Savings Agent"
                width={180}
                height={60}
                className="h-12 w-auto"
                priority
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a
                href="#search"
                className="text-sage-800 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Find Hotels
              </a>
              <a
                href="#how-it-works"
                className="text-sage-800 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                How It Works
              </a>
              <a
                href="#savings"
                className="text-sage-800 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Your Savings
              </a>
              <a
                href="#about"
                className="text-sage-800 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                About
              </a>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="bg-gradient-to-r from-primary-500 to-ocean-500 hover:from-primary-600 hover:to-ocean-600 text-white px-6 py-2 rounded-xl text-sm font-semibold transition-all duration-200 shadow-warm hover:shadow-glow transform hover:scale-105">
              Start Saving
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-sage-700 hover:text-sage-900 hover:bg-black/5 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500 transition-colors duration-200"
              style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-black/10" style={{ backgroundColor: 'rgb(255, 231, 209)' }}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#search"
              className="text-sage-800 hover:text-primary-600 hover:bg-black/5 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
            >
              Find Hotels
            </a>
            <a
              href="#how-it-works"
              className="text-sage-800 hover:text-primary-600 hover:bg-black/5 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
            >
              How It Works
            </a>
            <a
              href="#savings"
              className="text-sage-800 hover:text-primary-600 hover:bg-black/5 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
            >
              Your Savings
            </a>
            <a
              href="#about"
              className="text-sage-800 hover:text-primary-600 hover:bg-black/5 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
            >
              About
            </a>
            <button className="w-full text-left bg-gradient-to-r from-primary-500 to-ocean-500 hover:from-primary-600 hover:to-ocean-600 text-white px-3 py-2 rounded-md text-base font-medium transition-all duration-200 mt-2">
              Start Saving
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
/**
 * File: hero-section.tsx
 * Path: app/components/ui/hero-section.tsx
 * Description: Main hero section component with warm gradient background, animated elements,
 *              integrated hotel search form, and trust indicators. Focuses on travel savings.
 */

'use client'

import { ArrowDown, Zap, Shield, DollarSign } from 'lucide-react'
import HotelSearch from './hotel-search'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center py-12 px-4 overflow-hidden bg-warm-gradient">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-gradient-to-br from-primary-200/30 to-ocean-200/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-gradient-to-tr from-warm-200/30 to-primary-200/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-ocean-200/20 to-sage-200/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto w-full">
        {/* Hero Content */}
        <div className="text-center mb-12">
          <div className="animate-fade-in">
            <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary-100 to-ocean-100 text-primary-800 text-sm font-semibold rounded-full mb-6 border border-primary-200">
              <Zap className="w-4 h-4 mr-2" />
              Save on Every Hotel Stay
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-sage-900 mb-6 animate-slide-up leading-tight">
            Never Overpay for
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-500 via-ocean-500 to-warm-500">
              Hotels Again
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-sage-700 mb-12 max-w-4xl mx-auto animate-slide-up leading-relaxed">
            We automatically monitor your hotel bookings and 
            <span className="font-semibold text-primary-600"> rebook you at lower prices</span> when they drop.
            <br className="hidden md:block" />
            Your personal travel savings agent that works 24/7.
          </p>
        </div>

        {/* Hotel Search Component */}
        <div className="animate-slide-up mb-16" style={{ animationDelay: '0.3s' }} id="search">
          <HotelSearch />
        </div>

        {/* Trust Indicators */}
        <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 text-center border border-cream-200 shadow-soft hover:shadow-warm transition-all duration-300 transform hover:-translate-y-1">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl mb-4 shadow-warm">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-sage-800 mb-2">$312</div>
              <div className="text-sage-600">Average Savings Per Trip</div>
            </div>
            
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 text-center border border-cream-200 shadow-soft hover:shadow-ocean transition-all duration-300 transform hover:-translate-y-1">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-ocean-500 to-ocean-600 rounded-xl mb-4 shadow-ocean">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-sage-800 mb-2">24/7</div>
              <div className="text-sage-600">Price Protection</div>
            </div>
            
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 text-center border border-cream-200 shadow-soft hover:shadow-glow transition-all duration-300 transform hover:-translate-y-1">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-warm-500 to-warm-600 rounded-xl mb-4 shadow-warm">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-sage-800 mb-2">Auto</div>
              <div className="text-sage-600">Smart Rebooking</div>
            </div>
          </div>
        </div>

        {/* How it works preview */}
        <div className="mt-20 text-center animate-fade-in" style={{ animationDelay: '0.9s' }}>
          <p className="text-sage-600 mb-6">Trusted by thousands of smart travelers</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
            <div className="bg-white/50 px-6 py-3 rounded-xl shadow-soft border border-cream-200">
              <span className="font-semibold text-sage-700">Free to Use</span>
            </div>
            <div className="bg-white/50 px-6 py-3 rounded-xl shadow-soft border border-cream-200">
              <span className="font-semibold text-sage-700">No Hidden Fees</span>
            </div>
            <div className="bg-white/50 px-6 py-3 rounded-xl shadow-soft border border-cream-200">
              <span className="font-semibold text-sage-700">Instant Notifications</span>
            </div>
            <div className="bg-white/50 px-6 py-3 rounded-xl shadow-soft border border-cream-200">
              <span className="font-semibold text-sage-700">Money Back Guarantee</span>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 text-center animate-bounce-gentle">
          <div className="inline-flex items-center justify-center w-10 h-10 bg-white/80 rounded-full shadow-soft">
            <ArrowDown className="w-5 h-5 text-sage-600" />
          </div>
          <p className="text-sm text-sage-600 mt-2">Discover how it works</p>
        </div>
      </div>
    </section>
  )
}
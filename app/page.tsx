/**
 * File: page.tsx
 * Path: app/page.tsx
 * Description: Main homepage component for TripQuest. Includes hero section with hotel search,
 *              features section, and testimonials. Focuses on travel savings without technical jargon.
 */

import Header from './components/ui/header'
import HeroSection from './components/ui/hero-section'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-warm-gradient">
      <Header />
      <HeroSection />
      
      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-sage-800 mb-4">
              How TripQuest Saves You Money
            </h2>
            <p className="text-xl text-sage-600 max-w-3xl mx-auto">
              Our smart system works behind the scenes to ensure you always get the best hotel deals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl mb-6 shadow-warm">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold text-sage-800 mb-4">Book Your Hotel</h3>
              <p className="text-sage-600">
                Search and book your hotel through our platform. We'll track your reservation automatically.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-ocean-500 to-ocean-600 rounded-2xl mb-6 shadow-ocean">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold text-sage-800 mb-4">We Monitor Prices</h3>
              <p className="text-sage-600">
                Our system continuously checks for price drops on your exact room and dates, 24/7.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-warm-500 to-warm-600 rounded-2xl mb-6 shadow-warm">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold text-sage-800 mb-4">Automatic Savings</h3>
              <p className="text-sage-600">
                When prices drop, we automatically rebook you at the lower rate and refund the difference.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Savings Section */}
      <section id="savings" className="py-20 px-4 bg-gradient-to-br from-cream-50 to-ocean-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-sage-800 mb-4">
              Real Savings from Real Travelers
            </h2>
            <p className="text-xl text-sage-600">
              Join thousands who are already saving on their hotel stays
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-soft border border-cream-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">$187</div>
                <div className="text-sm text-sage-600 mb-4">Saved on Paris trip</div>
                <div className="text-xs text-sage-500">"Found a lower rate 3 days before check-in!"</div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-soft border border-cream-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-ocean-600 mb-2">$412</div>
                <div className="text-sm text-sage-600 mb-4">Saved on NYC weekend</div>
                <div className="text-xs text-sage-500">"Automatic rebooking saved our vacation budget!"</div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-soft border border-cream-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-warm-600 mb-2">$95</div>
                <div className="text-sm text-sage-600 mb-4">Saved on Miami beach</div>
                <div className="text-xs text-sage-500">"So easy, I didn't have to do anything!"</div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-soft border border-cream-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-sage-600 mb-2">$289</div>
                <div className="text-sm text-sage-600 mb-4">Saved on Vegas show</div>
                <div className="text-xs text-sage-500">"More money for entertainment!"</div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-primary-500 to-ocean-500 hover:from-primary-600 hover:to-ocean-600 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-200 shadow-warm hover:shadow-glow transform hover:scale-105">
              Start Saving Today
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary-600 to-ocean-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Never Overpay Again?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Join smart travelers who save automatically on every hotel booking
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white hover:bg-cream-50 text-primary-600 px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-200 shadow-soft hover:shadow-warm transform hover:scale-105">
              Get Started Free
            </button>
            <button className="border-2 border-white hover:bg-white/10 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-200">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
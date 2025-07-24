'use client'

export default function HeroSection() {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-100 opacity-50"></div>
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-gradient-to-tr from-green-200 to-blue-200 rounded-full opacity-20 blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <div className="animate-fade-in">
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 text-sm font-semibold rounded-full mb-6">
              🚀 Now Live - Hello World Version
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-slide-up">
            Never Overpay for
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800">
              {' '}Hotels{' '}
            </span>
            Again
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto animate-slide-up">
            RateFlip automatically monitors your hotel bookings and 
            <span className="font-semibold text-rateflip-green"> rebBooks you at lower prices</span> when they drop.
            Save money without lifting a finger.
          </p>
          
          <div className="animate-slide-up">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <button className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-xl">
                Start Saving Today
              </button>
              <button className="border-2 border-gray-300 hover:border-primary-600 text-gray-700 hover:text-primary-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all">
                Watch Demo
              </button>
            </div>
            
            <div className="text-sm text-gray-500 mb-12">
              ✨ Coming Soon: Booking.com Integration | 💳 No Credit Card Required
            </div>
          </div>
        </div>
        
        {/* Stats Preview */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in">
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20 shadow-lg">
            <div className="text-3xl font-bold text-primary-600 mb-2">$247</div>
            <div className="text-gray-600">Average Savings Per Trip</div>
          </div>
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20 shadow-lg">
            <div className="text-3xl font-bold text-rateflip-green mb-2">24/7</div>
            <div className="text-gray-600">Price Monitoring</div>
          </div>
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20 shadow-lg">
            <div className="text-3xl font-bold text-rateflip-orange mb-2">Auto</div>
            <div className="text-gray-600">Rebooking Process</div>
          </div>
        </div>
        
        {/* Technology showcase */}
        <div className="mt-16 text-center">
          <p className="text-gray-500 mb-4">Built with modern technology for reliability</p>
          <div className="flex flex-wrap justify-center items-center gap-6 opacity-60">
            <span className="bg-white px-4 py-2 rounded-lg shadow-sm font-medium">Next.js</span>
            <span className="bg-white px-4 py-2 rounded-lg shadow-sm font-medium">TypeScript</span>
            <span className="bg-white px-4 py-2 rounded-lg shadow-sm font-medium">Google Cloud</span>
            <span className="bg-white px-4 py-2 rounded-lg shadow-sm font-medium">Tailwind CSS</span>
          </div>
        </div>
      </div>
    </section>
  )
}
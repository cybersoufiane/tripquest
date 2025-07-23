import Header from './components/Header'
import HeroSection from './components/HeroSection'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      
      {/* Feature Preview Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            How RateFlip Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our smart rebooking system monitors hotel prices 24/7 and automatically saves you money
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🔍</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Search & Book</h3>
            <p className="text-gray-600">
              Book your hotel through our platform with refundable rates
            </p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📊</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Price Monitoring</h3>
            <p className="text-gray-600">
              We continuously monitor prices across multiple booking platforms
            </p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">💰</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Auto Rebook</h3>
            <p className="text-gray-600">
              When prices drop, we automatically cancel and rebook at the lower rate
            </p>
          </div>
        </div>
      </section>
      
      {/* Status Section */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Development Status
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-green-600 mb-2">✅ Completed</h3>
              <ul className="text-left text-gray-600 space-y-1">
                <li>• Next.js web application setup</li>
                <li>• Responsive design foundation</li>
                <li>• Google Cloud deployment ready</li>
                <li>• TypeScript configuration</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-blue-600 mb-2">🚧 Coming Soon</h3>
              <ul className="text-left text-gray-600 space-y-1">
                <li>• Booking.com API integration</li>
                <li>• User authentication system</li>
                <li>• Price monitoring engine</li>
                <li>• Automatic rebooking feature</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-400">
            © 2024 RateFlip. Built with Next.js, deployed on Google Cloud.
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Version 0.1.0 - Hello World Deployment
          </p>
        </div>
      </footer>
    </main>
  )
}
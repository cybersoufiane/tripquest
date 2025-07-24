/**
 * File: hotel-search.tsx
 * Path: app/components/ui/hotel-search.tsx
 * Description: Hotel search form component with destination, dates, and guest selection.
 *              Features real-time validation and loading states for search functionality.
 */

'use client'

import { useState } from 'react'
import { CalendarDays, MapPin, Users, Search } from 'lucide-react'

export default function HotelSearch() {
  const [searchData, setSearchData] = useState({
    destination: '',
    checkIn: '',
    checkOut: '',
    guests: 2,
    rooms: 1
  })

  const [isLoading, setIsLoading] = useState(false)

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate search
    setTimeout(() => {
      setIsLoading(false)
      console.log('Searching for hotels...', searchData)
    }, 2000)
  }

  const handleInputChange = (field: string, value: string | number) => {
    setSearchData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="bg-white rounded-3xl shadow-warm p-6 md:p-8 border border-cream-200">
        <form onSubmit={handleSearch} className="space-y-6">
          {/* Search Title */}
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-sage-800 mb-2">
              Find Your Perfect Stay
            </h2>
            <p className="text-sage-600">
              Search thousands of hotels and we'll monitor prices for you
            </p>
          </div>

          {/* Search Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Destination */}
            <div className="lg:col-span-2">
              <label className="block text-sm font-medium text-sage-700 mb-2">
                Where to?
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-sage-400" />
                <input
                  type="text"
                  placeholder="City, hotel, or landmark"
                  value={searchData.destination}
                  onChange={(e) => handleInputChange('destination', e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-cream-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all duration-200 text-sage-800 placeholder-sage-400"
                  required
                />
              </div>
            </div>

            {/* Check-in Date */}
            <div>
              <label className="block text-sm font-medium text-sage-700 mb-2">
                Check-in
              </label>
              <div className="relative">
                <CalendarDays className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-sage-400" />
                <input
                  type="date"
                  value={searchData.checkIn}
                  onChange={(e) => handleInputChange('checkIn', e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full pl-10 pr-4 py-3 border border-cream-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all duration-200 text-sage-800"
                  required
                />
              </div>
            </div>

            {/* Check-out Date */}
            <div>
              <label className="block text-sm font-medium text-sage-700 mb-2">
                Check-out
              </label>
              <div className="relative">
                <CalendarDays className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-sage-400" />
                <input
                  type="date"
                  value={searchData.checkOut}
                  onChange={(e) => handleInputChange('checkOut', e.target.value)}
                  min={searchData.checkIn || new Date().toISOString().split('T')[0]}
                  className="w-full pl-10 pr-4 py-3 border border-cream-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all duration-200 text-sage-800"
                  required
                />
              </div>
            </div>
          </div>

          {/* Guests and Rooms */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-sage-700 mb-2">
                Guests
              </label>
              <div className="relative">
                <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-sage-400" />
                <select
                  value={searchData.guests}
                  onChange={(e) => handleInputChange('guests', parseInt(e.target.value))}
                  className="w-full pl-10 pr-4 py-3 border border-cream-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all duration-200 text-sage-800 bg-white"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? 'Guest' : 'Guests'}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-sage-700 mb-2">
                Rooms
              </label>
              <select
                value={searchData.rooms}
                onChange={(e) => handleInputChange('rooms', parseInt(e.target.value))}
                className="w-full px-4 py-3 border border-cream-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all duration-200 text-sage-800 bg-white"
              >
                {[1, 2, 3, 4].map(num => (
                  <option key={num} value={num}>
                    {num} {num === 1 ? 'Room' : 'Rooms'}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Search Button */}
          <div className="pt-4">
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-primary-500 to-ocean-500 hover:from-primary-600 hover:to-ocean-600 disabled:from-sage-400 disabled:to-sage-500 text-white py-4 px-6 rounded-xl text-lg font-semibold transition-all duration-200 shadow-warm hover:shadow-glow transform hover:scale-105 disabled:transform-none disabled:cursor-not-allowed flex items-center justify-center gap-3"
            >
              {isLoading ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  Searching Hotels...
                </>
              ) : (
                <>
                  <Search className="h-5 w-5" />
                  Search Hotels
                </>
              )}
            </button>
          </div>

          {/* Additional Features */}
          <div className="pt-4 border-t border-cream-200">
            <div className="flex flex-wrap gap-3 justify-center text-sm text-sage-600">
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                Price Monitoring
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 bg-ocean-500 rounded-full"></span>
                Automatic Rebooking
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 bg-warm-500 rounded-full"></span>
                Instant Savings
              </span>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
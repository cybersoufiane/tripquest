import { NextResponse } from 'next/server'

export async function GET() {
  const healthData = {
    status: 'healthy',
    timestamp: new Date().toISOString(),
    version: '0.1.0',
    environment: process.env.NODE_ENV || 'development',
    services: {
      database: 'not_connected', // Will be 'connected' when we add PostgreSQL
      booking_api: 'not_configured', // Will be 'connected' when we add Booking.com API
      redis: 'not_connected', // Will be 'connected' when we add Redis
    },
    uptime: process.uptime(),
    memory: {
      used: Math.round(process.memoryUsage().heapUsed / 1024 / 1024),
      total: Math.round(process.memoryUsage().rss / 1024 / 1024),
      heap: Math.round(process.memoryUsage().heapTotal / 1024 / 1024),
    },
    system: {
      platform: process.platform,
      nodeVersion: process.version,
      arch: process.arch,
    },
    features: {
      hotelSearch: 'planned',
      priceMonitoring: 'planned',
      autoRebooking: 'planned',
      userAuth: 'planned',
    },
    endpoints: {
      health: '/api/health',
      hotels: '/api/hotels (coming soon)',
      bookings: '/api/bookings (coming soon)',
      users: '/api/users (coming soon)',
    }
  }

  return NextResponse.json(healthData, {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache, no-store, must-revalidate',
    },
  })
}

// Optional: Add POST method for health checks with payload
export async function POST() {
  return NextResponse.json(
    { 
      message: 'TripQuest.cc API is healthy',
      timestamp: new Date().toISOString(),
      method: 'POST'
    },
    { status: 200 }
  )
}
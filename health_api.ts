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
      total: Math.round(
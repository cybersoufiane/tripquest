/**
 * File: tailwind.config.ts
 * Path: tailwind.config.ts
 * Description: Tailwind CSS configuration with TripQuest brand colors inspired by the logo.
 *              Includes warm color palette, custom animations, and design system tokens.
 */

import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // TripQuest brand colors inspired by the logo
        primary: {
          50: '#f0f9e8',
          100: '#ddf2c7',
          200: '#bde394',
          300: '#98d158',
          400: '#7cb342', // Main brand green
          500: '#5a9a32',
          600: '#447a25',
          700: '#365e1e',
          800: '#2d4a1a',
          900: '#263f18',
        },
        // Header background color - RGB(255, 231, 209)
        header: {
          50: '#fef9f6',
          100: '#fef3ed',
          200: '#fde6d4',
          300: '#fbd5b8',
          400: '#f9c299',
          500: '#ffe7d1', // Main header color RGB(255, 231, 209)
          600: '#f4a261',
          700: '#e76f51',
          800: '#d14134',
          900: '#b23a2f',
        },
        ocean: {
          50: '#e3f2fd',
          100: '#bbdefb',
          200: '#90caf9',
          300: '#64b5f6',
          400: '#42a5f5',
          500: '#2196f3', // Ocean blue from logo
          600: '#1e88e5',
          700: '#1976d2',
          800: '#1565c0',
          900: '#0d47a1',
        },
        warm: {
          50: '#fef7f0',
          100: '#feeed6',
          200: '#fdd9ac',
          300: '#fbbc77',
          400: '#f89540',
          500: '#ff7043', // Warm orange accent
          600: '#f4511e',
          700: '#e64100',
          800: '#bf360c',
          900: '#8d2600',
        },
        sage: {
          50: '#f0f4f3',
          100: '#dce8e5',
          200: '#b9d1cc',
          300: '#90b4ab',
          400: '#6a9589',
          500: '#4d7c6f',
          600: '#3d6159',
          700: '#00695c', // Deep teal
          800: '#004d40',
          900: '#1b5e20',
        },
        cream: {
          50: '#fefcf8',
          100: '#fdf8ef',
          200: '#f9eddc',
          300: '#f5e6d3', // Warm beige background
          400: '#eed7ba',
          500: '#e6c79f',
          600: '#d4a574',
          700: '#b8844a',
          800: '#956830',
          900: '#7a5426',
        }
      },
      backgroundImage: {
        'warm-gradient': 'linear-gradient(135deg, #f5e6d3 0%, #fef7f0 50%, #e3f2fd 100%)',
        'hero-gradient': 'linear-gradient(135deg, #7cb342 0%, #2196f3 100%)',
        'search-gradient': 'linear-gradient(45deg, #ff7043 0%, #7cb342 100%)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'bounce-gentle': 'bounceGentle 2s infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        bounceGentle: {
          '0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0)' },
          '40%': { transform: 'translateY(-10px)' },
          '60%': { transform: 'translateY(-5px)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      borderRadius: {
        'xl': '16px',
        '2xl': '24px',
        '3xl': '32px',
      },
      boxShadow: {
        'warm': '0 4px 20px rgba(124, 179, 66, 0.15)',
        'ocean': '0 4px 20px rgba(33, 150, 243, 0.15)',
        'soft': '0 2px 15px rgba(0, 0, 0, 0.08)',
        'glow': '0 0 30px rgba(124, 179, 66, 0.3)',
      }
    },
  },
  plugins: [],
}

export default config
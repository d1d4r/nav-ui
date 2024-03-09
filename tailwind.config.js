/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],

  theme: {
    colors: {
      orange: '#FFA559',
      black: '#454545',
      sage: '#ABC270',
      red: '#FF7C7C'
    },
    extend: {
      keyframes: {
        'open-slow': {
          '0%': { 'grid-template-rows': '0fr' },
          '100%': { 'grid-template-rows': '1fr' }
        },
        'pop-up': {
          '0%': { scale: '0' },
          '100%': { scale: '1' }
        },

        'left-to-right': {
          '0%': { transform: ' translateX(-900px) ' },
          '100%': { transform: ' translateX(0) ' }
        }
      },
      animation: {
        'open-slow': 'open-slow 0.6s',
        'pop-up': 'pop-up 0.6s',
        'left-to-right': 'left-to-right 0.6s'
      },
      fontSize: {
        clamp: 'clamp(2rem,5rem,7rem)'
      },
      backgroundImage: {
        'hero-pattern': "url('../assets/image/webCover.jpg')"
      },
      transitionDuration: {
        500: '500ms'
      }
    }
  },
  plugins: []
}

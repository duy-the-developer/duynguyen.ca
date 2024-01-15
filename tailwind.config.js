// @ts-check
const { fontFamily } = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

/** @type {import("tailwindcss/types").Config } */
module.exports = {
  darkMode: 'class',
  content: [
    './node_modules/pliny/**/*.js',
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,tsx}',
    './components/**/*.{js,ts,tsx}',
    './layouts/**/*.{js,ts,tsx}',
    './data/**/*.mdx',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      lineHeight: {
        11: '2.75rem',
        12: '3rem',
        13: '3.25rem',
        14: '3.5rem',
      },
      fontFamily: {
        sans: ['var(--font-dm-sans)', ...fontFamily.sans],
        serif: ['var(--font-lora)', ...fontFamily.serif],
      },
      fontSize: {
        xs: '0.64rem',
        sm: '0.8rem',
        lg: '1.25rem',
        xl: '1.563rem',
        '2xl': '1.953rem',
        '3xl': '2.441rem',
        '4xl': '3.052rem',
        '5xl': '3.815rem', // h1
      },
      colors: {
        primary: colors.sky,
        gray: colors.stone,
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            a: {
              color: theme('colors.primary.800'),
              '&:hover': {
                color: `${theme('colors.primary.600')}`,
              },
              code: { color: theme('colors.primary.400') },
            },
            'h1,h2': {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
            },
            'h1,h2,h3,h4,h5,h6': {
              fontFamily: 'var(--font-lora)',
              lineHeight: '1 !important',
              color: theme('colors.gray.900'),
            },
            h1: {
              fontSize: '3.815rem',
            },
            h2: {
              fontSize: '3.052rem',
            },
            h3: {
              fontSize: '2.441rem',
            },
            h4: {
              fontSize: '1.953rem',
            },
            h5: {
              fontSize: '1.563rem',
            },
            h6: {
              fontSize: '1.25rem',
            },
            'p,ul,li': {
              fontSize: '1rem',
              lineHeight: '1.6rem',
            },
            small: {
              fontSize: '0.75rem',
            },
            code: {
              color: theme('colors.indigo.500'),
            },
          },
        },
        invert: {
          css: {
            a: {
              color: theme('colors.primary.500'),
              '&:hover': {
                color: `${theme('colors.primary.400')}`,
              },
              code: { color: theme('colors.primary.400') },
            },
            'h1,h2,h3,h4,h5,h6': {
              color: theme('colors.gray.200'),
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('tailwindcss-animate'),
  ],
}

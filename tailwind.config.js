/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        // Primary Blues
        'primary-b-600': 'var(--primary-b-600)',
        'primary-b-500': 'var(--primary-b-500)',
        'primary-b-400': 'var(--primary-b-400)',
        'primary-b-300': 'var(--primary-b-300)',
        'primary-b-200': 'var(--primary-b-200)',
        'primary-b-100': 'var(--primary-b-100)',

        // Semantic Colors
        'semantic-g-500': 'var(--semantic-g-500)',
        'semantic-g-300': 'var(--semantic-g-300)',

        'semantic-r-500': 'var(--semantic-r-500)',
        'semantic-r-100': 'var(--semantic-r-100)',

        'semantic-b-300': 'var(--semantic-b-300)',
        'semantic-b-100': 'var(--semantic-b-100)',

        'semantic-y-500': 'var(--semantic-y-500)',
        'semantic-y-100': 'var(--semantic-y-100)',

        // Neutrals
        'neutral-n-900': 'var(--neutral-n-900)',
        'neutral-n-800': 'var(--neutral-n-800)',
        'neutral-n-500': 'var(--neutral-n-500)',
        'neutral-n-400': 'var(--neutral-n-400)',
        'neutral-n-300': 'var(--neutral-n-300)',
        'neutral-n-200': 'var(--neutral-n-200)',
        'neutral-n-100': 'var(--neutral-n-100)',
        'neutral-n-50': 'var(--neutral-n-50)',
        'neutral-n-0': 'var(--neutral-n-0)',

        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
      },
    },
  },
  plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')],
};

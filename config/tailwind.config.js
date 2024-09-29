const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './public/*.html',
    './app/helpers/**/*.rb',
    './app/javascript/**/*.js',
    './app/views/**/*.{erb,haml,html,slim}',
    './app/assets/stylesheets/**/*.css'

  ],
  theme: {
    extend: {
      colors: {
        navbar: 'var(--navbar-background)',
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        tertiary: 'var(--color-tertiary)',
        success: 'var(--color-success)',
        warning: 'var(--color-warning)',
        critical: 'var(--color-critical)',
        info: 'var(--color-info)',
        neutral: {
          light: 'var(--color-neutral-light)',
          DEFAULT: 'var(--color-neutral-default)',
          dark: 'var(--color-neutral-dark)',
        },
        background: 'var(--color-background)',
        surface: 'var(--color-surface)',
      },
      textColor: {
        primary: 'var(--text-primary)',
        secondary: 'var(--text-secondary)',
        tertiary: 'var(--text-tertiary)',
        success: 'var(--text-success)',
        warning: 'var(--text-warning)',
        critical: 'var(--text-critical)',
        info: 'var(--text-info)',
        neutral: {
          light: 'var(--text-neutral-light)',
          DEFAULT: 'var(--text-neutral-default)',
          dark: 'var(--text-neutral-dark)',
        },
      },
      borderColor: {
        success: 'var(--color-success)',
        warning: 'var(--color-warning)',
        critical: 'var(--color-critical)',
        info: 'var(--color-info)',
        neutral: {
          DEFAULT: 'var(--color-neutral-default)',
          light: 'var(--color-neutral-light)',
          dark: 'var(--color-neutral-dark)',
        },
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/container-queries'),
  ],
  variants: {
    extend: {
      backgroundColor: ['checked', 'focus'],
      borderColor: ['checked', 'focus'],
      ring: ['focus'],
    }
  }
}

const defaultTheme = require('tailwindcss/defaultTheme');

const N = 0.25; // Define your baseline number N here (for example, 4px or 8px)

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
        neutral: 'var(--color-neutral)',
        background: 'var(--color-background)',
        surface: 'var(--color-surface)',
        // Hover Background Colors
        hoverBg: {
          surface: 'var(--hover-bg-surface)',
          primary: 'var(--hover-bg-primary)',
          secondary: 'var(--hover-bg-secondary)',
          tertiary: 'var(--hover-bg-tertiary)',
          success: 'var(--hover-bg-success)',
          warning: 'var(--hover-bg-warning)',
          critical: 'var(--hover-bg-critical)',
          info: 'var(--hover-bg-info)',
          neutral: 'var(--hover-bg-neutral)',
        },
        // Hover Text Colors
        hoverText: {
          primary: 'var(--hover-text-primary)',
          secondary: 'var(--hover-text-secondary)',
          tertiary: 'var(--hover-text-tertiary)',
          success: 'var(--hover-text-success)',
          warning: 'var(--hover-text-warning)',
          critical: 'var(--hover-text-critical)',
          info: 'var(--hover-text-info)',
          neutral: 'var(--hover-text-neutral)',
        }
      },
      textColor: {
        default: 'var(--text-default)',
        "button-default": 'var(--text-button-default)',
        primary: 'var(--text-primary)',
        secondary: 'var(--text-secondary)',
        tertiary: 'var(--text-tertiary)',
        success: 'var(--text-success)',
        warning: 'var(--text-warning)',
        critical: 'var(--text-critical)',
        info: 'var(--text-info)',
        neutral: 'var(--text-neutral)',
      },
      borderColor: {
        success: 'var(--color-success)',
        warning: 'var(--color-warning)',
        critical: 'var(--color-critical)',
        info: 'var(--color-info)',
        neutral: 'var(--color-neutral)',
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      spacing: {
        '3xs': `${0.25 * N}rem`, // 0.25N
        'xxs': `${0.5 * N}rem`,   // 0.5N
        'xs': `${1 * N}rem`,     // N
        'sm': `${1.5 * N}rem`,   // 1.5N
        'md': `${2 * N}rem`,     // 2N
        'lg': `${3 * N}rem`,     // 3N
        'xl': `${4 * N}rem`,    // 4N
        '2xl': `${5 * N}rem`,    // 5N
        '3xl': `${7.5 * N}rem`,  // 7.5N
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
      backgroundColor: ['checked', 'focus', 'hover'],
      textColor: ['hover', 'focus'],
      borderColor: ['checked', 'focus'],
      ring: ['focus'],
    }
  }
}

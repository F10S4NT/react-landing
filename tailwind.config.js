module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    extend: {
      colors: {
        primary: {
          100: '#E6A857', // Ocre muy claro
          200: '#DDA339', // Ocre claro
          300: '#CC7722', // Ocre medio
          400: '#B5651D', // Ocre intenso
          500: '#8B4513', // Ocre oscuro
          600: '#7A3B10', // Ocre profundo
          700: '#6F3E11', // Ocre más oscuro
          800: '#5A2F0D', // Ocre intenso
          900: '#441F08', // Ocre extra oscuro
        },
        gray: {
          100: '#FAF3E0', // Beige muy claro
          200: '#F5F5DC', // Beige claro
          300: '#EDE4C2', // Beige medio
          400: '#D2C29D', // Beige intenso
          500: '#B5A182', // Beige oscuro
          600: '#9F8C6F', // Beige profundo
          700: '#8C7A5D', // Beige más oscuro
          800: '#7A6950', // Beige intenso
          900: '#5C4D3B', // Beige extra oscuro
        },
      },
      lineHeight: {
        hero: '4.5rem',
      },
    },
  },
  plugins: [],
};

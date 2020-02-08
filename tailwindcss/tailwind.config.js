const colors = require("@kaizen/design-tokens/tokens/color.json");

module.exports = {
  theme: {
    fontFamily: {
      display: ['Greycliff CF', 'sans-serif'],
      body: ['Inter', 'sans-serif'],
    },
    colors: {
      ...colors.kz.color
    },
    spacing: { 
      xxs: '0.1875rem', // 1/8
      xs: '0.375rem',   // 1/4
      sm: '0.75rem',    // 1/2
      md: '1rem',       // 1
      lg: '2rem',       // 2
      xl: '4rem',
      xxl: '8rem'
    }
  },
  variants: {
    // Some useful comment
  },
  plugins: [
    // Some useful comment
  ],
}
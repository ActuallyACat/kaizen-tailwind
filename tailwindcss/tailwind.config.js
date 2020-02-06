const colors = require("@kaizen/design-tokens/tokens/color.json");

module.exports = {
  theme: {
    fontFamily: {
      display: ['Greycliff CF', 'sans-serif'],
      body: ['Inter', 'sans-serif'],
    },
    colors: {
      ...colors.kz.color
    }
  },
  variants: {
    // Some useful comment
  },
  plugins: [
    // Some useful comment
  ],
}

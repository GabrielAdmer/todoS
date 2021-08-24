const { guessProductionMode } = require("@ngneat/tailwind");

module.exports = {
  prefix: '',
  purge: {
    enabled: guessProductionMode(),
    content: [
      './src/**/*.{html,ts}',
    ]
  },
  // darkMode: '',// or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        danger: '#A9CBB7'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

module.exports = {
  purge: [
    './components/**/*.tsx',
    './hooks/**/*.tsx',
    './pages/**/*.tsx',
    './lib/*.tsx',
  ],
  corePlugins: {
    clear: false,
    divideWidth: false,
  },
};

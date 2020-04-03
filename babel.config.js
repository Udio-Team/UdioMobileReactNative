module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [ 'module-resolver', {
        alias: {
          '$svg': './assets/svg',
          '$images': './assets/images',
          '$pages': './app/pages',
          '$hooks': './utils/hooks',
          '$context': './utils/context',
          '$routes': './utils/routes.js',
          '$components': './app/components'
        }
      }
    ]
]
};

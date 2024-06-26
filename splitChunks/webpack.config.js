const path = require('path')

module.exports = {
  mode: "production",
  entry: {
    main: path.resolve(__dirname, './src/main.js'),
    testA: path.resolve(__dirname, './src/testA.js'),
    testF: path.resolve(__dirname, './src/testF.js')
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].[hash].js'
  },
  optimization: {
    usedExports: true,
    splitChunks: {
      chunks: 'all',
      minSize: 0,
      cacheGroups: {
        common: {
          name: 'common',
          chunks: 'initial',
          priority: 2,
          minChunks: 2,
        },
        lodash: {
          name: 'lodash',
          test: /[\\/]node_modules[\\/]lodash[\\/]/,
          chunks: 'all',
          priority: 3,
          minChunks: 1
        }
      },
    },
  }
}
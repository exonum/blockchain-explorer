const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')

require('babel-polyfill')

module.exports = env => {
  const API_ROOT = (env && env.apiRoot) ? env.apiRoot : ''

  return {
    mode: 'development',
    entry: [
      'babel-polyfill',
      './src/app'
    ],
    output: {
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/dist/',
      filename: 'build.js'
    },
    module: {
      rules: [
        {
          test: /\.js/,
          loader: 'string-replace-loader',
          options: {
            multiple: [
              {
                search: '/api/explorer/',
                replace: `${API_ROOT}/api/explorer/`,
              },
              {
                search: '/api/system/',
                replace: `${API_ROOT}/api/system/`,
              },
            ]
          }
        },
        {
          test: /\.js/,
          use: 'babel-loader'
        },
        {
          test: /\.vue$/,
          use: 'vue-loader'
        },
        {
          test: /\.css$/,
          use: [
            'vue-style-loader',
            'css-loader'
          ]
        }
      ]
    },
    plugins: [
      new VueLoaderPlugin()
    ]
  }
}

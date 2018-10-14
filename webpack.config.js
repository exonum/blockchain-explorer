const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')

require('babel-polyfill')

module.exports = env => {
  const rules = [
    {
      loader: 'babel-loader'
    }
  ]


  if (env && env.apiRoot) {
    rules.push({
      loader: 'string-replace-loader',
      options: {
        multiple: [
          {
            search: '/api/explorer/',
            replace: `${env.apiRoot}/api/explorer/`
          },
          {
            search: '/api/system/',
            replace: `${env.apiRoot}/api/system/`
          },
          {
            search: 'window.location.host',
            replace: '"' + env.apiRoot.replace('http://', '') + '"'
          }
        ]
      }
    })
  }

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
          use: rules
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

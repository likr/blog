const webpack = require('webpack')
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin')

const options = {
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['latest'],
          plugins: ['transform-react-jsx']
        }
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css?localIdentName=[path][name]---[local]---[hash:base64:5]&modules']
      }
    ]
  },
  entry: {
    bundle: './src/index'
  },
  output: {
    path: './public',
    filename: '[name].js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
    'react-router': 'ReactRouter'
  },
  plugins: [
    new SWPrecacheWebpackPlugin({
      maximumFileSizeToCacheInBytes: 10000000,
      staticFileGlobs: [
        'public/index.html',
        'public/bundle.js',
        'public/styles.css',
        'public/icon128.png',
        'public/manifest.json'
      ],
      stripPrefix: 'public/',
      navigateFallback: '/index.html',
      runtimeCaching: [
        {
          urlPattern: /^https:\/\/cdnjs\.cloudflare\.com\/ajax\/libs\/pure/,
          handler: 'networkFirst'
        },
        {
          urlPattern: /^https:\/\/cdnjs\.cloudflare\.com\/ajax\/libs\/react/,
          handler: 'networkFirst'
        },
        {
          urlPattern: /^https:\/\/cdnjs\.cloudflare\.com\/ajax\/libs\/react-router/,
          handler: 'networkFirst'
        },
        {
          urlPattern: /^https:\/\/cdnjs\.cloudflare\.com\/ajax\/libs\/es6-promise/,
          handler: 'networkFirst'
        },
        {
          urlPattern: /^https:\/\/cdnjs\.cloudflare\.com\/ajax\/libs\/fetch/,
          handler: 'networkFirst'
        },
        {
          urlPattern: /https:\/\/public-api\.wordpress\.com\/rest\/v1\.1\/sites\/ylikr\.wordpress\.com\/posts/,
          handler: 'networkFirst',
          options: {
            cache: {
              name: 'posts'
            }
          }
        },
        {
          urlPattern: /https:\/\/0\.gravatar\.com\/avatar/,
          handler: 'networkFirst',
          options: {
            cache: {
              name: 'avatars'
            }
          }
        }
      ]
    })
  ]
}

if (process.env.NODE_ENV === 'production') {
  options.plugins.push(new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }
  }))
} else {
  Object.assign(options, {
    devtool: 'inline-source-map'
  })
}

module.exports = options

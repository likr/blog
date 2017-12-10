const path = require('path')
const webpack = require('webpack')
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin')

const options = {
  module: {
    rules: [
      {
        test: /\.m?js$/,
        include: [
          path.resolve(__dirname, 'src')
        ],
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      }
    ]
  },
  entry: {
    bundle: './src/index'
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.js', '.mjs']
  },
  externals: {
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      },
      API_ENDPOINT: `'https://${process.env.NODE_ENV === 'production' ? 'blog.likr-lab.com/api' : 'public-api.wordpress.com'}/wp/v2/sites/ylikr.wordpress.com'`,
      USE_SERVICE_WORKER: process.env.NODE_ENV === 'production'
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: true,
    port: 8080
  }
}

if (process.env.NODE_ENV === 'production') {
  options.plugins.push(new SWPrecacheWebpackPlugin({
    maximumFileSizeToCacheInBytes: 10000000,
    staticFileGlobs: [
      'public/index.html',
      'public/bundle.js',
      'public/components/*.js',
      'public/vendor/**/*.js',
      'public/icon*.png',
      'public/manifest.json'
    ],
    stripPrefix: 'public/',
    navigateFallback: '/index.html',
    navigateFallbackWhitelist: [/^\/posts/],
    runtimeCaching: [
      {
        urlPattern: /https:\/\/public-api\.wordpress\.com\//,
        handler: 'fastest',
        options: {
          cache: {
            name: 'wp'
          }
        }
      },
      {
        urlPattern: /https:\/\/0\.gravatar\.com\/avatar/,
        handler: 'fastest',
        options: {
          cache: {
            name: 'avatars'
          }
        }
      }
    ]
  }))
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

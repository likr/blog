const path = require('path')
const webpack = require('webpack')
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin')

const options = {
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [
          path.resolve(__dirname, 'src')
        ],
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['latest', 'react']
            }
          }
        ]
      },
      {
        test: /\.css$/,
        include: [
          path.resolve(__dirname, 'src')
        ],
        loaders: [
          'style-loader',
          'css-loader?localIdentName=[path][name]---[local]---[hash:base64:5]&modules'
        ]
      }
    ]
  },
  entry: {
    bundle: './src/index',
    vendor: './src/vendor'
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  externals: {
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),
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
      'public/vendor.js',
      'public/bundle.js',
      'public/pure-min.css',
      'public/icon128.png',
      'public/icon192.png',
      'public/icon512.png',
      'public/manifest.json'
    ],
    stripPrefix: 'public/',
    navigateFallback: '/index.html',
    navigateFallbackWhitelist: [/^\/posts/],
    runtimeCaching: [
      {
        urlPattern: /https:\/\/blog\.likr-lab\.com\/api\//,
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

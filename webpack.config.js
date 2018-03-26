const path = require('path')
const webpack = require('webpack')

const options = {
  module: {
    rules: [
      {
        test: /\.m?js$/,
        include: [
          path.resolve(__dirname, 'src'),
          path.resolve(__dirname, 'functions')
        ],
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['env']
            }
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
} else {
  Object.assign(options, {
    devtool: 'inline-source-map'
  })
}

module.exports = options

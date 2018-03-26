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
  ],
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: true,
    port: 8080,
    proxy: {
      '/.netlify/functions': {
        target: 'http://localhost:9000',
        pathRewrite: {
          '^/.netlify/functions' : ''
        }
      }
    }
  }
}

if (process.env.NODE_ENV === 'production') {
} else {
  Object.assign(options, {
    devtool: 'inline-source-map'
  })
}

module.exports = options

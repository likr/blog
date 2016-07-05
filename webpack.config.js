module.exports = {
  entry: './src/main.js',
  output: {
    filename: './assets/js/bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  devtool: '#inline-source-map'
}

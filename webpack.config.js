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
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css?modules']
      }
    ]
  },
  devtool: '#inline-source-map'
}

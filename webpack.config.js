module.exports = {
  entry: './src/main.js',
  output: {
    filename: './public/assets/js/bundle.js'
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
      },
      {
        test: /\.html$/,
        loader: 'html'
      }
    ]
  },
  devtool: '#inline-source-map'
}

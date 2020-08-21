const config = {
  mode: 'none',
  entry: ['./client/index.js'],
  module: {
    rules: [
      {
        test: /\.js$/,
        loaders: [
          'babel-loader'
        ],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  output: {
    filename: 'bundle.js'
  }
}

module.exports = config

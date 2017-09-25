const path = require('path')
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve('public'),
    filename: 'main.js'
  },
  module: {
    loaders: [{
      test: /.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }]
  },
  devServer: {
    // contentBase: Tell the server where to serve content from. 
    // This is only necessary if you want to serve static files. 
    // The public/ is where index.html resides.
    contentBase: path.join(__dirname, 'public/'),
    port: 8002,
    compress: true
  }
}
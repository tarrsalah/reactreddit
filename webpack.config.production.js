var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './scripts/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  ],
  module: {
    loaders: [
      {test: /\.js$/, loaders: ['babel'], exclude: /node_modules/},
      {test: /\.css$/, loader: 'style-loader!css-loader' }
    ]
  }
};

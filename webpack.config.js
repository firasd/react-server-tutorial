var webpack = require("webpack");

module.exports = {
  entry: {
	  app: './public/client.js',
  },
  output: {
    path: './public/scripts/',
    publicPath: '/',
    filename: 'bundle.js',
  },
  devtool: '#source-map',
  module: {
    loaders: [
      {
        test: /.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['react']
        }
      },
    ]
  },
};

const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './app/index.js',
  devServer: {
      historyApiFallback: true
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['es2015', 'react', 'stage-2'],
          plugins: ['transform-decorators-legacy' ]
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      __API_TODOLIST__: JSON.stringify('http://localhost:29224')
    })
  ]
};

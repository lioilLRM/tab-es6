
const {resolve} = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports= {
  mode: 'development',
  entry: {
    index: resolve(__dirname, './tab-ES6/src/js/app.js')
  },
  output:{
    path: resolve(__dirname, './dist'),
    filename: 'js/[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: resolve(__dirname, 'node_modules/')
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.tpl$/,
        loader: 'ejs-loader',
        options: {
          esModule: false
        }
      }
    
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      filename: 'index.html',
      template: resolve(__dirname, './tab-ES6/index.html'),
      chunks: ['index'],
      excludeChunks: ['node_modules']
    })
  ],
  devServer: {
    open: true,
    host: 'localhost',
    port: 8000,
  }
}
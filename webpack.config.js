const path = require('path');

module.exports = {
  entry: './client/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/build/',
  },
  mode: process.env.NODE_ENV,
  // mode: 'development',

  module: {
    rules: [
      { // rules for JSX from babel
        test: /\.jsx?/,
        exclude: path.resolve(__dirname, 'node_modules'),
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /.(css|scss)$/,
        exclude: [/node_modules/],
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      // {
      //   test: /.(css|scss)$/,
      //   include: [/client\/stylesheets/],
      //   use: [
      //     'style-loader',
      //     {
      //       loader: 'css-loader',
      //       options: {
      //         modules: true,
      //         localIdentName: '[name]__[local]___[hash:base64:5]'
      //       },
      //     },
      //     'sass-loader'],
      // },
    ],
  },
  
  devServer: { // last property..?
    // contentBase:,
    contentBase: './client/',
    publicPath: '/build/',
    proxy:{
      '/': 'http://localhost:3000'
    },
    hot: true,
  },

};
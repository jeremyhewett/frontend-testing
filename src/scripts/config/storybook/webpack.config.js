'use strict';

let path = require('path');


module.exports = {
  module: {
    loaders: [
      {
        test: /\.(scss|css)$/,
        loaders: ['style', 'css', 'sass']
      },
      {
        test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
        loader: 'file',
        query: {
          name: 'static/media/[name].[hash:8].[ext]'
        }
      }
    ]
  }
};
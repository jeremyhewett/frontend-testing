var path = require('path');

process.env.NODE_ENV = 'test';

module.exports = function(config) {
  config.set({
    basePath: '../../',
    frameworks: ['jasmine', 'sinon'],
    files: [
      'test/**/*.js'
    ],

    preprocessors: {
      // add webpack as preprocessor
      'app/**/*.js': ['webpack', 'sourcemap'],
      'test/**/*.js': ['webpack', 'sourcemap']
    },

    webpack: { //kind of a copy of your webpack config
      devtool: 'inline-source-map', //just do inline source maps instead of the default
      module: {
        preLoaders: [
          {
            // Script Loader
            // Reference: https://github.com/webpack/script-loader
            //
            // Execute files once in global context
            test: /min.js$/,
            loader: 'script'
          }
        ],
        loaders: [
          {
            test: /\.(js|jsx)$/,
            //include: paths.appSrc,
            loader: 'babel',
            exclude: path.resolve(__dirname, 'node_modules'),
            query: {
              // @remove-on-eject-begin
              babelrc: false,
              presets: [require.resolve('babel-preset-react-app')]
            }
          },
          {
            // Extract css files in production builds
            // Reference: https://github.com/webpack/extract-text-webpack-plugin
            test: /\.scss$/,
            loaders: ['style', 'css', 'sass']
          },
          {
            test: /\.css$/,
            loader: 'style!css?importLoaders=1!postcss'
          },
          {
            test: /\.json$/,
            loader: 'json'
          }
        ]
      },
      externals: [
        { jsdom: 'window' },
        { cheerio: 'window' },
        { 'react/lib/ExecutionEnvironment': true },
        { 'react/lib/ReactContext': 'window' }
      ]
    },

    webpackServer: {
      noInfo: true //please don't spam the console when running in karma!
    },

    plugins: [
      'karma-webpack',
      'karma-jasmine',
      'karma-sinon',
      'karma-sourcemap-loader',
      'karma-chrome-launcher',
      'karma-firefox-launcher'
    ],


    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome', 'Firefox'],
    singleRun: false
  })
};
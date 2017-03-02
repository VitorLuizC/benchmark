const { optimize } = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = env => {
  if (env === 'production') {
    let uglify = new optimize.UglifyJsPlugin();

    config.devtool = false;
    config.plugins.push(uglify);
    pug.use.query.pretty = false;
  }

  return config;
};

const babel = {
  test: /\.jsx?$/,
  exclude: /node_modules/,
  use: 'babel-loader'
};

const pug = {
  test: /\.pug$/,
  use: {
    loader: 'pug-loader',
    query: {
      pretty: true
    }
  }
};

const stylus = {
  test: /\.styl$/,
  use: ExtractTextPlugin.extract({
    use: ['css-loader', 'stylus-loader']
  })
};

const config = {
  entry: './src/index.js',
  output: {
    filename: 'js/[name].js',
    path: './dist'
  },
  module: {
    rules: [babel, pug, stylus]
  },
  plugins: [
    new ExtractTextPlugin('css/style.css'),
    new HtmlPlugin({
      filename: 'index.html',
      template: './src/view/index.pug'
    })
  ],
  devtool: 'inline-source-map',
  target: 'web'
};

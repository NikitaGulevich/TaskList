const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractSass = new ExtractTextPlugin({
  filename: "css/style.css",
  disable: false,
  allChunks: true
});

module.exports = {
  entry: __dirname + "/src/index",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js"
  },
  watch: true,
  devServer: {
    contentBase: './src',
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.scss$/,
        use: extractSass.extract({
          fallback:  'style-loader',
          use: 'css-loader!sass-loader'
        })
      },
      {
        test: /\.html$/,
        use: {loader: 'html-loader'}
      }
    ]
  },
  plugins: [
    extractSass
  ]
};
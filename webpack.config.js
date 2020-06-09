const CopyPlugin = require('copy-webpack-plugin');
const Assets = require('./assets');
const Path = require('path');

module.exports = {
  entry: './app.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js',
  },
  plugins: [
    new CopyPlugin({
      patterns: Assets.map((asset) => {
        return {
          from: Path.resolve(__dirname, `./node_modules/${asset}`),
          to: Path.resolve(__dirname, 'libs'),
        };
      }),
    }),
  ],
};

const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/index.ts', // Change to your "entry-point".
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'public/',
    filename: 'app.bundle.js',
  },
  resolve: {
    extensions: ['.js', '.ts', '.json'],
  },
  plugins: [new CleanWebpackPlugin()],
  module: {
    rules: [
      {
        test: /\.(ts|js)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/proposal-class-properties', '@babel/plugin-transform-typescript'],
          },
        },
      },
    ],
  }
};

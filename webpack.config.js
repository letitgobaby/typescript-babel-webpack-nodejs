const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
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
  },

  /* 
        DEV only
        https://webpack.js.org/configuration/dev-server/
    */
  devServer: {
    host: 'localhost',
    port: 3000,
    inline: true,
    hot: true,
    // proxy: { // proxy URLs to backend development server
    //     open: true,
    //     '/api': 'http://localhost:3000'
    // },
  },
};

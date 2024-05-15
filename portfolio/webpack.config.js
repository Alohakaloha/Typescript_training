const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
entry: './src/index.tsx',
  output: {
	filename: 'bundle.js',
	path: path.resolve(__dirname, 'dist'),
  },
  module: {
	rules: [
	  {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
		},
	  },
	],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  devServer: {
	static: {
	  directory: path.join(__dirname, 'dist'),
	},
	compress: true,
	port: 8080,
  },
  plugins: [
	new HtmlWebpackPlugin({
	  template: './src/index.html',
	}),
  ],
};
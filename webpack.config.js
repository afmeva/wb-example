const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const path = require('path')

module.exports = {
  /*
    entry,
    output,
    loaders
    pluguns,
    mode,
    
    env  
  
  
  */
  target: 'web',
  mode: 'development',
  // entry: './src/main.js',
  entry: {
    app: './src/main.js',
  },
  devServer: {
    port: 4000,
  },
  output: {
    path: path.resolve(__dirname, 'dist/'),
    filename: '[name].bundle.js',
    // filename: '[name].[contenthash].bundle.js',
    // assetModuleFilename: 'assets/',
  },
  module: {
    rules: [
      {
        test: /.js$/i,
        exclude: /node_modules/,
        // use: 'babel-loader',
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      // {
      //   test: /\.(png|svg|jpg|jpeg|gif)$/i,
      //   type: 'asset/resource',
      //   generator: {
      //     filename: 'imgs/[name][ext]',
      //   },
      // },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.s?css$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
        // use: [
        //   'style-loader',
        //   {
        //     loader: 'css-loader',
        //     options: {
        //       modules: true,
        //     },
        //   },
        // ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin({ verbose: true }),
    new HtmlWebpackPlugin({
      //Path.resolve(__dirname, '../src/index.html'),
      template: './src/index.html',
    }),
  ],
}

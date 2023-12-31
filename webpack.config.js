const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
  // Where files should be sent once they are bundled
 output: {
   path: path.join(__dirname, '/dist'),
   filename: 'index.bundle.js'
 },
  // webpack 5 comes with devServer which loads in development mode
 devServer: {
   static: {
      directory: path.join(__dirname, 'public'),
   },
   client: {
     overlay: true,
    },
   compress: true,
   port: 3000

 },
  // Rules of how webpack will take our files, complie & bundle them for the browser
 module: {
   rules: [
     {
             test: /\.svg$/i,
             issuer: /\.[jt]sx?$/,
             use: ['@svgr/webpack'],

      },
     {
       test: /\.(js|jsx)$/,
       exclude: /nodeModules/,
       use: {
         loader: 'babel-loader'
       }
     },
     {
       test: /\.css$/,
       use: ['style-loader', 'css-loader']
     }
   ]
 },
 plugins: [new HtmlWebpackPlugin({ template: './index.html', inject: 'body', favicon: "./src/favicon.ico"})],


}

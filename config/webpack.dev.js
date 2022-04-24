const path = require("path");
const webpack = require("webpack");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "../build"),
  },
  module:{
     rules:[
        {
            test: /\.(less|css)$/i,
            use: [
              {
                loader: "style-loader",
              },
              {
                loader: "css-loader",
                options: {
                  modules: true,
                },
              },
              {
                loader: "less-loader",
              },
            ],
       },
       {
            test: /\.svg$/,
            use: ['@svgr/webpack'],
       },
     ]
  },
  resolve: {
    alias: {
      'src': path.resolve(__dirname, "../src/") //src文件夹路径
    },
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  devtool: "inline-source-map",// 谷歌调试工具
  devServer: {
    host: '0.0.0.0',
    contentBase: path.join(__dirname, "../build"),
    historyApiFallback: true,
    port: 4000,
    hot: true,
  },
});

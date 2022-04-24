// 生产环境配置
// 不需要热更新/代码规范校验等功能
// 为打包的文件名生成 hash 串
// 清空打build目录
// 压缩代码
const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const MiniCssExtractPlugin = require('mini-css-extract-plugin') //生产环境把css抽离成单独的文件

module.exports = merge(common, {
  mode: "production",
  output: {
    filename: "[name].[contenthash].js",

    // publicPath: "/static/",
    path: path.resolve(__dirname, "../build"),
    // 打包前清空输出目录
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(less|css)$/i,
        use: [
        MiniCssExtractPlugin.loader,
        {
          loader: "css-loader",
          options: {
            modules: true,
            importLoaders: 1,
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

    ],
  },
  resolve: {
    alias: {
      'src': path.resolve(__dirname, "../src/") //src文件夹路径
    },
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    })
  ]

});

const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

const isProduction = true;

module.exports = {
  mode: "development",
  entry: {
    index: ["./src/index.js"],
  },

  output: {
    path: path.join(__dirname, "dist"),
    filename: "index.bundle.js",
  },

  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: (file) => {
          return /node_modules/.test(file) && !/\.vue\.js/.test(file);
        },
        loader: "babel-loader",
        options: {
          preset: ["@babel/preset-env"],
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.less$/i,
        use: [
          // "style-loader",
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: true,
            },
          },
          {
            loader: "less-loader",
            options: {
              lessOptions: {},
              javascriptEnabled: true,
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "asset/name.[contenthash].css",
    }),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "src/index.html",
      inject: true,
      minify: isProduction
        ? {
            removeComments: true,
            collapseWhitespace: false,
            minifyJS: true,
          }
        : {},
      chunks: ["index"],

      env: isProduction ? "production" : "", // for ejs add script links
    }),
  ],

  optimization: {
    minimizer: [
      // we specify a custom UglifyJsPlugin here to get source maps in production
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        // uglifyOptions: {
        //   compress: {
        //     // drop_console: true,
        //     drop_debugger: true,
        //     pure_funcs: ['console.log', 'console.info'], // 移除console
        //   },
        //   ecma: 6,
        //   mangle: true,
        //   output: {
        //     beautify: true, // 3.x 要放这里
        //     ascii_only: true,
        //     comments: false, // 是否要注释
        //   },
        // },
        // FIXME:调试用
        uglifyOptions: {
          compress: false,
          ecma: 6,
          mangle: false,
          output: {
            beautify: true, // 3.x 要放这里
            ascii_only: true,
            comments: false, // 是否要注释
          },
        },
        sourceMap: true,
      }),
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    compress: true,
    hot: true,
    port: 6789,
  },
};

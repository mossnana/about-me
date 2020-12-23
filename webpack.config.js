const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  output: {
    path: path.resolve(__dirname, "build"),
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "public", "index.html"),
    }),
  ],
  devServer: {
    port: "3000",
    open: "google-chrome",
    contentBase: path.resolve(__dirname, "build"),
    hot: true,
    historyApiFallback: {
      disableDotRule: true,
      index: "build/index.html",
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(ts|js)x?$/,
        exclude: [/node_modules/],
        use: ["babel-loader"],
      },
      {
        test: /\.(ts|js)?$/,
        exclude: [/node_modules/],
        use: ["babel-loader"],
      },
      {
        test: /\.(mp3)?$/,
        exclude: [/node_modules/],
        use: ["file-loader"],
      },
    ],
  },
};

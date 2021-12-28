const { merge } = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const common = require("./webpack.common");

/**@type{import('webpack').configuration}*/
const proConfig = {
  mode: "production",
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.(c|sa|sc)ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
};
module.exports = merge(common, proConfig);

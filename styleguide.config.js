module.exports = {
  components: "src/Components/**/[A-Z]*.js",
  defaultExample: false,
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: "babel-loader"
        }
      ]
    }
  }
}

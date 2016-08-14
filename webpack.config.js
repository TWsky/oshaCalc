var config = {
  entry: './main.js',

  output: {
    path:'./',
    filename: 'index.js',
  },

  devServer: {
    inline: true,
    port: 8085
  },

  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',

        query: {
          presets: ['react','es2015']
        }
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      }
    ]
  }
}

module.exports = config;

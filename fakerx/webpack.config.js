module.exports = {
  devtool: 'inline-source-map',
  entry: './src/Rx.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  output: {
    filename: 'Rx.js',
    path: __dirname + '/dist/'
  }
};
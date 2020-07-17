module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js'
  },
  devServer: {
    publicPath: '/dist',
    port: '9000'
  }
}
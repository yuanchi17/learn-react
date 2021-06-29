/* webpack.config.js */
const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist/'),
  },
  module: {
    rules: [
      {
        test: /.js$/, // 用正規表達式搜索目標檔案
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'], // 編譯
          },
        },
      },
    ],
  },
}

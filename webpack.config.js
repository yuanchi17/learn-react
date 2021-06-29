/* webpack.config.js */
const path = require('path')

module.exports = {
  entry: './src/index.jsx', // 進入點
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist/'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // 用正規表達式搜索目標檔案
        use: {
          loader: 'babel-loader',
          options: {
            presets: [ // 編譯
              '@babel/preset-react',
              '@babel/preset-env',
            ],
          },
        },
      },
    ],
  },
}

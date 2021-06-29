/* webpack.config.js */
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

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
      {
        test: /\.(scss)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[path][local]___[hash:base64:5]',
              },
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },
  plugins: [ // 另外用外掛程式做處裡的放這
    new MiniCssExtractPlugin({
      filename: 'index.css',
    }),
  ],
  devServer: {
    contentBase: './dist', // 產品程式碼的路徑
  },
}

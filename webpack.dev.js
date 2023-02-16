const path = require('path'); //왜 prod에는 path가 없는데 dev에는 들어갈까?
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    compress: true, // 서버에서 => 압축 => 중간 단계 거침 => 압축 해제 => 클라이언트. 로딩 속도 업!
    port: 3000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './public/index.html'),
    }),
  ],
});
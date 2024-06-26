import path from 'path';
import webpack from 'webpack';
const __dirname = import.meta.dirname;

const exports = {
  entry: {
    index: './src/index.ts',
  },
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    libraryTarget: 'umd',
    //library: 'MyLib',
    umdNamedDefine: true,
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.m?js/,
        type: 'javascript/auto',
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(ts)$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
        },
      },
      {
        test: /\.(proto)$/,
        use: 'raw-loader',
      },
      {
        test: /\.(protobuf)$/i,
        use: 'binary-base64-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.json', '.proto', '.protobuf'],
  },
  plugins: [
    new webpack.ProvidePlugin({
      Buffer: ['buffer', 'Buffer'],
    }),
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
  ],
};

export default exports;

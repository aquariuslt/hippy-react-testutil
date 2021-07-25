const webpack = require('webpack');
const path = require('path');
const { TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin');

const webpackConfig = {
  mode: 'development',
  devtool: 'source-map',
  entry: path.resolve(__dirname, 'temp/hippy-react/src/index.ts'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'hippy-react.bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
    plugins: [
      new TsconfigPathsPlugin({
        configFile: path.resolve(__dirname, 'tsconfig.json')
      })
    ]
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
              allowTsInNodeModules: true,
              compilerOptions: {
                jsx: 'react'
              }
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      __PLATFORM__: JSON.stringify('android'),
      AsyncStorage: {},
      Device: {},
      UIManager: {},
      Bridge: {},
      HippyRegister: {},
      global: {
        Hippy: {
          asyncStorage: 'AsyncStorage',
          bridge: 'Bridge',
          device: 'Device',
          document: 'UIManager',
          register: 'HippyRegister',
          on: {},
          off: {},
          emit: {}
        },
        __GLOBAL__: {
          jsModuleList: {}
        }
      }
    })
  ]
};


module.exports = webpackConfig;

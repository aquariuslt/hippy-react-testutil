import typescript from '@rollup/plugin-typescript';
import replace from '@rollup/plugin-replace';
import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
  input: 'temp/hippy-react/index.ts',

  output: {
    file: 'dist/index.cjs.js',
    format: 'cjs'
  },

  plugins: [
    replace({
      __PLATFORM__: 'android'
    }),

    nodeResolve(),
    typescript()
  ]
};
// __PLATFORM__
import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
  input: 'src/test-entry.ts',

  output: {
    file: 'dist/index.cjs.js',
    format: 'cjs'
  },

  plugins: [
    nodeResolve()
  ]
};

import typescript from '@rollup/plugin-typescript';
import replace from '@rollup/plugin-replace';
import { nodeResolve } from '@rollup/plugin-node-resolve';


// TODO: using scripts to cp node_modules/@hippy/react/src to temp/hippy-react
//       with @localTypes/folder
export default {
  input: 'temp/hippy-react/index.ts',

  output: {
    file: 'dist/index.cjs.js',
    format: 'cjs'
  },

  plugins: [
    replace({
      preventAssignment: true,
      'process.env.NODE_ENV': JSON.stringify('production'),
      __PLATFORM__: JSON.stringify('android')
    }),

    nodeResolve({
      extensions: [
        '.js', '.ts', '.tsx'
      ]
    }),
    typescript()
  ]
};
// __PLATFORM__
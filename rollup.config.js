// rollup.config.js
import path from 'node:path'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import postcss from 'rollup-plugin-postcss'
import autoprefixer from 'autoprefixer'
import cssnano from 'cssnano'
import buble from '@rollup/plugin-buble'
// import { terser } from 'rollup-plugin-terser'

const config = {
  input: 'src/index.js',
  external: ['vue', 'element-ui'],
  plugins: [
    resolve(),
    commonjs(),
    postcss({
      plugins: [autoprefixer(), cssnano()],
      extract: path.resolve('dist/style.css'),
    }),
    buble(),
  ],
  output: [
    {
      file: 'dist/index.cjs.js',
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
    },
    // {
    //   file: 'dist/index.cjs.min.js',
    //   format: 'cjs',
    //   exports: 'named',
    //   plugins: [
    //     terser({
    //       format: {
    //         comments: false,
    //       },
    //     }),
    //   ],
    // },
    {
      file: 'dist/index.esm.js',
      format: 'es',
      sourcemap: true,
    },
    // {
    //   file: 'dist/index.esm.min.js',
    //   format: 'es',
    //   plugins: [
    //     terser({
    //       format: {
    //         comments: false,
    //       },
    //     }),
    //   ],
    // },
  ],
}

export default config

// rollup.config.js
import path from 'node:path'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import postcss from 'rollup-plugin-postcss'
import autoprefixer from 'autoprefixer'
import cssnano from 'cssnano'
import { babel } from '@rollup/plugin-babel'
// import { terser } from 'rollup-plugin-terser'
import pkg from './package.json'

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
    babel({ babelHelpers: 'bundled' }),
  ],
  output: [
    {
      file: pkg.module,
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
    {
      file: 'dist/index.cjs',
      format: 'cjs',
      sourcemap: true,
    },
    // {
    //   file: 'dist/index.cjs.min.js',
    //   format: 'cjs',
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

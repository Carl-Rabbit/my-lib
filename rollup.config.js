import path from 'path'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import rollupTypescript from 'rollup-plugin-typescript2'
import babel from '@rollup/plugin-babel'
import {DEFAULT_EXTENSIONS} from '@babel/core'
import {terser} from 'rollup-plugin-terser'
import pkg from './package.json'

const name = 'MyLib'

const config = {
  input: path.resolve(__dirname, 'src/index.ts'),
  output: [
    // commonjs
    {
      file: pkg.main,
      format: 'cjs',
    },
    // es module
    {
      file: pkg.module,
      format: 'es',
    },
    // umd
    {
      name,
      file: pkg.umd,
      format: 'umd'
    }
  ],
  plugins: [
    resolve(),
    commonjs(),
    rollupTypescript(),
    babel({
      babelHelpers: 'runtime',
      exclude: 'node_modules/**',
      extensions: [
        ...DEFAULT_EXTENSIONS,
        '.ts',
      ],
    }),
    terser({
      compress: {
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true,
        warnings: false
      }
    })
  ]
}

export default config

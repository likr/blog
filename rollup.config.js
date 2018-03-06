import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'

export default {
  input: 'node_modules/universal-router/main.js',
  output: {
    file: 'public/vendor/universal-router.js',
    format: 'es'
  },
  plugins: [
    commonjs(),
    resolve()
  ]
}

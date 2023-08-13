/** 将json转换为ES6模块 */
const json = require('@rollup/plugin-json')
/** rollup解析及编译TS插件 */
const typescript = require('@rollup/plugin-typescript')
/** 解析代码中依赖的node_modules */
const resolve = require('@rollup/plugin-node-resolve')
/** 将 CommonJS 模块转换为 ES6 的 Rollup 插件 */
const commonjs = require('@rollup/plugin-commonjs')
/** rollup文件夹清除插件 */
const { cleandir } = require('rollup-plugin-cleandir')

module.exports = {
  input: './src/index.ts',
  output: {
    dir: './lib',
    format: 'cjs',
  },
  plugins: [
    cleandir('./lib'),
    json(),
    typescript({
      module: 'esnext',
      exclude: ['./node_modules/**'],
    }),
    resolve.default({
      extensions: ['.js', '.ts', '.json'],
      modulesOnly: true,
      preferredBuiltins: false,
    }),
    commonjs({ extensions: ['.js', '.ts', '.json'] }),
  ],
}

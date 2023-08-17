/** 将json转换为ES6模块 */
import json from '@rollup/plugin-json'

/** rollup解析及编译TS插件 */
import typescript from '@rollup/plugin-typescript'

/** 解析代码中依赖的node_modules */
import resolve from '@rollup/plugin-node-resolve'

// import CommonJS 模块转换为 ES6 的 Rollup 插件
import commonjs from '@rollup/plugin-commonjs'

/** rollup文件夹清除插件 */
import { cleandir } from 'rollup-plugin-cleandir'

export default {
  input: './bin/index.ts',
  output: [
    // cjs
    {
      format: 'cjs',
      dir: 'lib/cjs/graph-cli.cjs.js',
    },
    // esm
    {
      format: 'esm',
      dir: 'lib/esm/graph-cli.esm.js',
    },
  ],
  plugins: [
    cleandir('./lib'),
    json(),
    typescript({
      module: 'esnext',
      exclude: ['./node_modules/**', './packages/**'],
    }),
    resolve({
      extensions: ['.js', '.ts', '.json'],
      modulesOnly: true,
      exportConditions: ['node'],
    }),
    commonjs({ extensions: ['.js', '.ts', '.json'] }),
  ],
}

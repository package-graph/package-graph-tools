#!/usr/bin/env node
/* eslint-disable no-console */
import * as process from 'node:process'
import chalk from 'chalk'
import { Command } from 'commander'
import { analyze } from '../src'

const program = new Command()
program
  .name('graph-cli')
  .version('v1.0.0', '-v, --version', '查看版本号')
  .description('字节青训营第六期大项目✨')

program
  .command('analyze')
  .description('分析依赖')
  .option('-d, --depth [depth]', '设置深度分析依赖')
  .option('-j, --json [file-path]', '输出json文件的目录')
  .option('-D, --dev [devFlag]', '是否分析devDependencies')
  .option('-p, --path [config]', '配置package.json文件目录')
  // TODO 树形式和图形式渲染 --tree --graph
  .action(async ({ depth, dev, json, path }: any) => {
    console.log(chalk.green(`开始分析依赖：`,depth, dev, json, path));
      try {
          await analyze(path, depth, dev, json)
      } catch (e) {
          console.log(chalk.red(e))
      }
  })

program.parse(process.argv)

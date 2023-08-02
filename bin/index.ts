import chalk from "chalk";
import { Command } from "commander";

import path from "path";
import { analyze } from "../src";
const program = new Command();
program
  .name("graph-cli")
  .version(`v1.0.0`, '-v, --version', '查看版本号')
  .description("字节青训营第六期大项目✨")
  .command('analyze').description('分析依赖')
  .option('-d, --tree [tree]', '设置深度分析依赖')
  .option('-j, --json [file-path]', '输出json文件的目录')
  .action(({depth, json}) => {
  if(json){
    // output json
    console.log(json)
  } else {
    // analyze
    analyze(depth)
  }
})

program.parse(process.argv);

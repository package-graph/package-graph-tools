import chalk from 'chalk';
import * as process from 'node:process'
import buildGraph from '../graph'
import buildTree from '../tree'
import {writeFile, writeFileToWeb} from '../utils'
async function analyze(
    path: string = '',
    dept: number = 2,
    devFlag: boolean = false,
    json: string
) {
  console.log(`\n======= Analyzing ${path} ======` );
  const graphResult = buildGraph(process.cwd(), dept, devFlag)
  const treeResult = buildTree(process.cwd(), dept, devFlag)
  console.log(chalk.greenBright(`\n======= Analyzed ======`))
  
  if(json) {
    // 输出output TODO JSONPath
    console.log(`\n======= Output: ${path} ======`)
    await writeFile(`graph.json`, JSON.stringify(graphResult), json)
    await writeFile(`tree.json`, JSON.stringify(treeResult), json)
  } else {
    // TODO WebUI
    await writeFileToWeb(`graph.json`, JSON.stringify(graphResult))
    await writeFileToWeb(`tree.json`, JSON.stringify(treeResult))
  }
  console.log(`\n======= Done! ======` );
  
  
  
}

export default analyze

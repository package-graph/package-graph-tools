import * as process from 'node:process'
import buildGraph from '../graph'
import {writeFile, writeFileToWeb} from '../utils'
async function analyze(
    path: string = '',
    dept: number = 2,
    devFlag: boolean = false,
    json: string
) {
  const graphResult = buildGraph(process.cwd(), dept, devFlag)
  if(json) {
    // 输出output TODO JSONPath
    await writeFile(`graph.json`, JSON.stringify(graphResult), json)
  } else {
    // TODO WebUI
    await writeFileToWeb(`graph.json`, JSON.stringify(graphResult))
  }
}

export default analyze

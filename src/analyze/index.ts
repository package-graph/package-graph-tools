import * as process from 'node:process'
import buildGraph from '../graph'

function analyze(path: string = '', dept: number = 2, devFlag: boolean = false) {
  const result = buildGraph(process.cwd(), dept, devFlag)
  // eslint-disable-next-line no-console
  console.log(result.NodeList)
  // console.log(result.EdgeList)
}

export default analyze

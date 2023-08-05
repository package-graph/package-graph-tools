import buildGraph from '../graph'

function analyze(path: string = '', dept: number = 2, devFlag: boolean = false) {
  const result = buildGraph(process.cwd(), dept, devFlag)
  console.log(result.NodeList.length, result.EdgeList.length)
}

export default analyze

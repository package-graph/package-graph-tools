import buildGraph from "../graph";
const analyze = ( path:string = '', dept: number = 2, devFlag:boolean = false, ) => {
  let result = buildGraph(process.cwd(), dept, devFlag)
  console.log(result.NodeList.length, result.EdgeList.length)
}

export default analyze

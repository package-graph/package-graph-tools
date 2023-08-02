import chalk from 'chalk'
import fs from 'fs'
const analyze = (dept: number = 2 ) => {
  const packageJSONPath = `${process.cwd()}/package.json`
  const packageNode = []
  const packageLink = []
  const packageMapNode = new Map()
  let dep = 0
  try {
    const json = fs.readFileSync(packageJSONPath)
    const { devDependencies, dependencies } = JSON.parse(json.toString())
    console.log(devDependencies)
    console.log(dependencies)
  } catch (e) {
    console.log(e)
  }
}

export default analyze

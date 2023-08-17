import fs from 'node:fs'

export async function writeFile(
    fileName: string,
    json: string,
    outputDir: string = './output'
) {
  await fs.mkdirSync(outputDir, { recursive: true })
  await fs.writeFileSync(`${outputDir}/${fileName}`, json)
}

export async function writeFileToWeb(
    fileName: string,
    json: string
) {
  let webPath = 'packages/web-ui/public/'
  await fs.writeFileSync(`${webPath}/${fileName}`, json)
}
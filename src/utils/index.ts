import fs from 'node:fs'
import chalk from 'chalk'
export async function writeFile(
  fileName: string,
  json: string,
  outputDir: string = './output',
) {
  await fs.mkdirSync(outputDir, { recursive: true })
  await fs.writeFileSync(`${outputDir}/${fileName}`, json)
  console.log(`Wrote ${fileName} to:(⌥ + click)
${chalk.green(`${process.cwd()}/${outputDir}/${fileName}`)}`);
}

export async function writeFileToWeb(
  fileName: string,
  json: string,
) {
  const webPath = 'packages/web-ui/public'
  await fs.writeFileSync(`${webPath}/${fileName}`, json)
  console.log(`Wrote ${fileName} to:(⌥ + click)\n${chalk.blue(`${process.cwd()}/${webPath}/${fileName}`)}`);
  
}

import { copyFile, mkdir } from 'node:fs/promises';
import { join } from 'node:path';

const botDirectory = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDirectory = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

try {
  await mkdir(outputDirectory, { recursive: true });
  await copyFile(join(botDirectory, 'POST.json'), join(outputDirectory, 'POST.json'));
  console.log(`Copied POST.json to ${join(outputDirectory, 'POST.json')}`);
} catch (error) {
  console.error(`Could not copy POST.json: ${error instanceof Error ? error.message : String(error)}`);
  process.exitCode = 1;
}

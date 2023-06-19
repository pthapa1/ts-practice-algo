import { spawnSync } from 'child_process';

const args = process.argv.slice(2); // Remove the first two arguments ("pnpm" and "test")
const fileName = args[0]; // Extract the file name from the command-line arguments

const filePath = `src/algorithms/**${fileName}**.ts`; // Construct the file path

const command = `npx ts-node ${filePath} ${args.slice(1).join(' ')}`;
const result = spawnSync(command, { shell: true, stdio: 'inherit' });

if (result.error) {
  console.error(result.error);
}

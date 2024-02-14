import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import process from 'process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const write = async () => {
    const file = path.resolve(__dirname, 'files', 'fileToWrite.txt');
    const fileStream = fs.createWriteStream(file);
    process.stdin.pipe(fileStream);
};

await write();
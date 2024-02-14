import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import process from 'process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
    const file = path.resolve(__dirname, 'files', 'fileToRead.txt');
    const fileStream = fs.createReadStream(file);
    fileStream.pipe(process.stdout);
};

await read();
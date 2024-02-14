import { readFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
    const file = path.resolve(__dirname, 'files', 'fileToRead.txt');
    try {
        const contents = await readFile(file, { encoding: 'utf8' });
        console.log(contents);
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await read();
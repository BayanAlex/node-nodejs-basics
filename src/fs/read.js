import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
    const file = path.resolve(__dirname, 'files', 'fileToRead.txt');
    if (!fs.existsSync(file)) {
        throw new Error('FS operation failed');
    }
    fs.readFile(file, (error, data) => {
        if (error) {
            throw new Error('FS operation failed');
        }
        console.log(data.toString());
    });
};

await read();
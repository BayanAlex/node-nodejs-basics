import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const remove = async () => {
    const file = path.resolve(__dirname, 'files', 'fileToRemove.txt');
    if (!fs.existsSync(file)) {
        throw new Error('FS operation failed');
    }
    fs.rm(file, (error) => {
        if (error) {
            throw new Error('FS operation failed');
        }
    })
};

await remove();
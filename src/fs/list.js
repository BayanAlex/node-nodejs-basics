import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const list = async () => {
    const dir = path.resolve(__dirname, 'files');
    if (!fs.existsSync(dir)) {
        throw new Error('FS operation failed');
    }
    fs.readdir(dir, (error, files) => {
        if (error) {
            throw new Error('FS operation failed');
        }
        console.log(files);
    });
};

await list();
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const create = async () => {
    const file = path.resolve(__dirname, 'files', 'fresh.txt');
    if (fs.existsSync(file)) {
        throw new Error('FS operation failed');
    }
    fs.writeFile(file, 'I am fresh and young', (error) => {
        if (error) {
            throw new Error('FS operation failed');
        }
    });
};

await create();
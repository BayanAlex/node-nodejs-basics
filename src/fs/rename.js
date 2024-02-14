import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rename = async () => {
    const targetPath = path.resolve(__dirname, 'files', 'wrongFilename.txt');
    const renamedPath = path.resolve(__dirname, 'files', 'properFilename.md');
    if (!fs.existsSync(targetPath) || fs.existsSync(renamedPath)) {
        throw new Error('FS operation failed');
    }
    fs.rename(targetPath, renamedPath, (error) => {
        if (error) {
            throw new Error('FS operation failed');
        }
    });
};

await rename();
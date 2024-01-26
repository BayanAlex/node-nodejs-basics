import zlib from 'zlib';
import fs from 'fs';
import path from 'path';
import { pipeline } from 'stream';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const decompress = async () => {
    const file = path.resolve(__dirname, 'files', 'fileToCompress.txt');
    const archive = path.resolve(__dirname, 'files', 'archive.gz');
    const source = fs.createReadStream(archive);
    const dest = fs.createWriteStream(file);
    const gunzip = zlib.createGunzip();
    pipeline(source, gunzip, dest, (error) => {
        if (error) {
            console.error('Error during decompression');
            return;
        }
        console.log('Operation successful');
    });
};

await decompress();
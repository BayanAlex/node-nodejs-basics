import zlib from 'zlib';
import fs from 'fs';
import path from 'path';
import { pipeline } from 'stream';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compress = async () => {
    const file = path.resolve(__dirname, 'files', 'fileToCompress.txt');
    const archive = path.resolve(__dirname, 'files', 'archive.gz');
    const source = fs.createReadStream(file);
    const dest = fs.createWriteStream(archive);
    const gz = zlib.createGzip();
    pipeline(source, gz, dest, (error) => {
        if (error) {
            console.error('Error during compression');
            return;
        }
        console.log('Operation successful');
    });
};

await compress();
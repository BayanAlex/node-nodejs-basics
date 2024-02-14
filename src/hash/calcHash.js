import crypto from 'crypto';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const calculateHash = async () => {
    const fileStream = fs.createReadStream(path.resolve(__dirname, 'files', 'fileToCalculateHashFor.txt'));
    const hash = crypto.createHash('sha256');
    hash.setEncoding('hex');
    fileStream.on('end', () => {
        hash.end();
        console.log(hash.read());
    });
    fileStream.pipe(hash);
};

await calculateHash();
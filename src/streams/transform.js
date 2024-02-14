import process from 'process';
import { Transform } from 'stream';

const transform = async () => {
    const reverseTransform = new Transform({
        transform(chunk, encoding, callback) {
            callback(null, chunk.toString().split('').reverse().join(''));
        },
    });
    reverseTransform.setEncoding('utf8');
    reverseTransform.on('data', chunck => process.stdout.write(chunck + '\n'));

    process.stdin.on('data', (data) => {
        reverseTransform.write(data);
    });
};

await transform();

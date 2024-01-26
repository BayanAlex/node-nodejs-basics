import process from 'process';

const transform = async () => {
    process.stdin.on('data', (data) => {
        process.stdout.write(data);
    });
};

await transform();

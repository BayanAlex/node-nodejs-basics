import { fork } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const spawnChildProcess = async (args) => {
    fork(path.resolve(__dirname, 'files', 'script.js'), args);
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['test', 123, null]);

import process from 'process';

const parseEnv = () => {
    const envs = process.env;
    const result = Object.keys(envs).filter(key => /^RSS_/.test(key)).reduce((res, key, index, arr) => res += `${key}=${envs[key]}${index < arr.length -1 ? '; ' : ''}`, '');
    console.log(result);
};

parseEnv();
import {readFile} from 'node:fs/promises';
const files=['index.html','src/app.js','src/styles.css'];
for (const file of files){const text=await readFile(file,'utf8');if(text.includes('TODO')) throw new Error(`${file} contains TODO`);if(/<img(?![^>]*alt=)/.test(text)) throw new Error(`${file} has an image without alt text`)}
console.log('Lint checks passed for TODO markers and image alt attributes.');

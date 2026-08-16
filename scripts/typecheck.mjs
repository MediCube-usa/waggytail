import {readFile} from 'node:fs/promises';
for (const f of ['src/app.js','src/styles.css','index.html']) await readFile(f,'utf8');
console.log('Static application source files loaded successfully.');

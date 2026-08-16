import {mkdir,cp,stat} from 'node:fs/promises';
await mkdir('dist',{recursive:true});
await cp('index.html','dist/index.html');
await cp('src','dist/src',{recursive:true});
const s=await stat('dist/index.html');
console.log(`Built static Waggie Tail preview (${s.size} bytes index).`);

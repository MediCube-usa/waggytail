import http from 'node:http';import {readFile,stat} from 'node:fs/promises';import path from 'node:path';
const root=process.cwd(), port=Number(process.env.PORT||5173);
const types={'.html':'text/html','.css':'text/css','.js':'text/javascript','.svg':'image/svg+xml'};
http.createServer(async(req,res)=>{try{let p=new URL(req.url,'http://x').pathname;if(p==='/')p='/index.html';const file=path.join(root,p);await stat(file);res.setHeader('content-type',types[path.extname(file)]||'text/plain');res.end(await readFile(file));}catch{res.statusCode=404;res.end('Not found')}}).listen(port,'0.0.0.0',()=>console.log(`Waggie Tail preview on http://localhost:${port}`));

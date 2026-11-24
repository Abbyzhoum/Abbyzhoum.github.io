// Build with the project-local Node 22 runtime; publish only generated routes.
const fs=require('fs'),path=require('path'),cp=require('child_process');
const base=__dirname,root=path.resolve(base,'..');
cp.execFileSync(path.join(base,'node_modules/node/bin/node'),[path.join(base,'node_modules/hexo/bin/hexo'),'generate'],{cwd:base,stdio:'inherit'});
fs.cpSync(path.join(base,'public'),root,{recursive:true});
fs.writeFileSync(path.join(root,'.nojekyll'),'');

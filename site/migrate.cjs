const fs=require('fs'),path=require('path'),cheerio=require('cheerio'),yaml=require('js-yaml');
fs.mkdirSync('source/_posts',{recursive:true});
for(const slug of fs.readdirSync('../uncategorized')){
 const file='../uncategorized/'+slug+'/index.html'; if(!fs.existsSync(file))continue;
 const $=cheerio.load(fs.readFileSync(file,'utf8'));const b=$('.post-body').first();
 if(!b.length)throw Error(file);
 b.find('figure.highlight').each((i,el)=>{const e=$(el);let lines=e.find('td.code .line').toArray().map(x=>$(x).text()); if(!lines.length)lines=[e.find('td.code').text()]; const pre=$('<pre></pre>'),code=$('<code></code>').text(lines.join('\n')); pre.append(code);e.replaceWith(pre);});
 const tags=$('.post-tags a').toArray().map(x=>$(x).text().replace(/^#\s*/,''));
 const meta={title:$('.post-title').first().text().trim(),date:$('time[datetime]').first().attr('datetime'),permalink:'uncategorized/'+slug+'/',tags};
 fs.writeFileSync('source/_posts/'+slug+'.md','---\n'+yaml.dump(meta)+'---\n\n'+b.html().trim()+'\n');
}
const raw=fs.readFileSync('../voip/opensips/故障排查/402-No-Trunk-Group.md','utf8');
const content=raw.replaceAll('../../images/','/voip/images/').replace(/\[([^\]]+)\]\((?:\.\/|\.\.\/)[^)]*\)/g,'$1（尚未同步）');
fs.writeFileSync('source/_posts/402-no-trunk-group.md','---\n'+yaml.dump({title:'OpenSIPS 故障排查：402 No Trunk Group',date:'2026-11-24 14:00:00',permalink:'voip/opensips/402-no-trunk-group/',categories:['VoIP','OpenSIPS'],tags:['OpenSIPS','SIP','故障排查']})+'---\n\n'+content+'\n\n[下载 Markdown 原文](/voip/opensips/故障排查/402-No-Trunk-Group.md)\n');
for(const dir of ['images','voip/images']) fs.cpSync('../'+dir,'source/'+dir,{recursive:true});
fs.mkdirSync('source/voip/opensips/故障排查',{recursive:true});fs.writeFileSync('source/voip/opensips/故障排查/402-No-Trunk-Group.md',raw);
fs.copyFileSync('../CNAME','source/CNAME');
for(const [name,layout] of [['tags','tags'],['categories','categories']]) {fs.mkdirSync('source/'+name,{recursive:true});fs.writeFileSync('source/'+name+'/index.md','---\nlayout: '+layout+'\ntitle: '+(name==='tags'?'标签':'分类')+'\n---\n');}
console.log('Migrated posts:',fs.readdirSync('source/_posts').length);

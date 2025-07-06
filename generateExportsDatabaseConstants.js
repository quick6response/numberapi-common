const fs = require('fs');
const path = require('path');

function walk(dir, prefix = '') {
  let files = [];
  for (const file of fs.readdirSync(dir)) {
    const fullPath = path.join(dir, file);
    const relPath = path.join(prefix, file);
    if (fs.statSync(fullPath).isDirectory()) {
      files.push(...walk(fullPath, relPath));
    } else if (file.endsWith('.js')) {
      files.push(relPath.replace(/\\/g, '/'));
    }
  }
  return files;
}

const base = 'dist/database/constants';
const allJs = walk(base);
const exportsBlock = {};

for (const file of allJs) {
  const importPath = './dist/database/constants/' + file.slice(0, -3); // убираем .js
  exportsBlock[importPath] = `./dist/database/constants/${file}`;
}

console.log(JSON.stringify(exportsBlock, null, 2));

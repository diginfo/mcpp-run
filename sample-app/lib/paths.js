const path=require('path');function isSea(){try{return require('node:sea').isSea();}catch{return!!(process.env.__NODE_SEA_APP||process.pkg);}}
function appDir(){if(isSea()){return path.dirname(process.execPath);}
return path.resolve(__dirname,'..');}
function resolve(relativePath){return path.join(appDir(),relativePath);}
module.exports={isSea,appDir,resolve};
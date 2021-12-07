const fs = require('fs').promises;
const path = require('path');


endereco = path.resolve(__dirname);

async function lerdir(rootDir) {

    rootDir = rootDir || path.resolve(__dirname);
    const files = await fs.readdir(rootDir);
    // console.log(files)
    walk(files, rootDir)

}

async function walk(files, rootDir) {

    for (let file of files) {
        const fileFullPath = await path.resolve(rootDir, file);
        // console.log(fileFullPath);
        const stats = await fs.stat(fileFullPath);


        if (/\.git/g.test(fileFullPath)) continue;
        if (/node_modules/g.test(fileFullPath)) continue;
        if (/paginas/g.test(fileFullPath)) continue;


        if (stats.isDirectory()) {
            lerdir(fileFullPath);
            continue;
        }

        if ((!/\.css/g.test(fileFullPath)) && (/\.hmtl/g.test(fileFullPath))) continue;




        console.log(fileFullPath, stats.isDirectory());

    }

}

lerdir('C:/dev/curso-stack-js/')
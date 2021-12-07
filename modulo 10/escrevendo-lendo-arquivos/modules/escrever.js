const fs = require('fs').promises;


module.exports = (caminho, dados) => {
    fs.writeFile(caminho, dados, { flag: 'w' /* 'w' reescreve, 'a' faz append */ })
}
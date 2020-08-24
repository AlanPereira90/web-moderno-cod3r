const fs = require('fs')

const lerArquivo = (file) => {

    return new Promise((resolve, reject) => {

        fs.readFile(caminho,'utf-8',(err, cont) => {
            if (err){
                reject(err)
            } else {
                resolve(cont.toString())
            }            
        })
    })
}

const caminho = __dirname + '/dados.txt'
lerArquivo(caminho)
    .then(conteudo => conteudo.split('\r\n'))
    .then(linhas => Object.assign({}, linhas))
    .then(obj => console.log(JSON.stringify(obj)))
    .catch(e => console.log(e.message))
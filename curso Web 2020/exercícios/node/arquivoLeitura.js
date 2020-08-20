const fs = require('fs')//modulo filesystem, nativo do node

const caminho = __dirname + '/arquivo.json'

//sincrono (não recomendado)...
const conteudo = fs.readFileSync(caminho,'utf-8')
console.log(conteudo)

//assincrono...
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

//se o arquivo for JSON, também podemos ler direto no require
const config = require('./arquivo.json')
console.log(config.db)

//leitura de pasta
fs.readdir(__dirname,(err, arquivos) => {
    console.log('Conteudo da pasta')
    console.log(arquivos)
})
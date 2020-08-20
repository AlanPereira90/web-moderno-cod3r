const moduloA = require('../../moduloA') 
console.log(moduloA.ola)

//modulo interno do node
const http = require('http')
http.createServer((req, res) => {
    res.write('Bom Dia!')
    res.end()
}).listen(8080)
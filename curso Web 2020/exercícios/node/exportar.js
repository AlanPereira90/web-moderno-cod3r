console.log(module.exports === this)
console.log(module.exports === exports)

this.a = 1
exports.b = 2
module.exports.c = 3

exports = null
console.log(module.exports)
//exports é apenas uma varíavel, apontando para o mesmo objeto na memória, por isso não há impacto

//modo correto:
module.exports = {
    publico: true
}
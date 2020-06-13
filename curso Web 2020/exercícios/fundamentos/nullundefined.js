let valor //não inicializada
console.log(valor) //variavel nunca inicializada = undefined

valor = null //inicializada com ausência de valor
console.log(valor)
//console.log(valor.toString()) acessar propriedade de um null/undefined -> erro!

//undefined -> nunca inicializada
//null -> ausência de valor

const produto = {}
console.log(produto.preco) //propriedade indefinida, de um obj definido -> undefined

produto.preco = 3.50
console.log(produto)

produto.preco = undefined //evite atribuir undefined, é caca!
console.log(!!produto.preco)
console.log(produto)

produto.preco = null //isso é melhor que atribuir undefined
console.log(!!produto.preco)
console.log(produto)
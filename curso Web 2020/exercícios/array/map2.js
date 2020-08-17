const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90}',
    '{ "nome": "Kit de Lápis", "preco": 41.22}',
    '{ "nome": "Caneta", "preco": 7.50}',
]

//retornar array apenas com os preços

//esse foi o meu
 let precos = carrinho.map(e => {

    let obj = JSON.parse(e)

    return `R$ ${parseFloat(obj.preco).toFixed(2)}`
 })

 console.log(precos)

 //esse foi o do prof
 const paraObjeto = json => JSON.parse(json)
 const apenasPreco = produto => produto.preco

 const resultado = carrinho.map(paraObjeto).map(apenasPreco)
 console.log(resultado)
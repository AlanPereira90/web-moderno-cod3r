function getPreco(imposto = 0, moeda = 'R$'){

    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

console.log(getPreco())

//chamada simples
console.log(produto.getPreco())

//call e apply
const carro = {
    preco: 49990,
    desc: 0.20
}

console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

//o que muda entre elas é a passagem de parâmetros

//no call, o primeiro parametro é o contexto, e os demais parametros seguem de forma linear
console.log(getPreco.call(carro, 0.17, '$'))

//no apply, o primeiro parametro é o contexto, e os demais são passados através de um array
console.log(getPreco.apply(carro, [0.17, '$']))

console.log(getPreco())
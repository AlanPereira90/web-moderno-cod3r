function criarProduto(nome, preco, desconto = 0){

    return {
        nome,
        preco,
        desconto
    }
}

console.log(criarProduto('Lanterna',10.88))
console.log(criarProduto('Alicate',52.99,0.1))
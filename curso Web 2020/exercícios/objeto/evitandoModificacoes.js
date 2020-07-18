// Object.preventExensions
// não permite add novos attr
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco:1.99, tag:'Promocao'
})
console.log('Extensível', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)

// Object.seal
// não permite add nem remover attr
const pessoa = {nome: 'Davi', idade: 4}
Object.seal(pessoa)
console.log('Selado: ',Object.isSealed(pessoa))
pessoa.sobrenome = 'Neris'
delete pessoa.nome
pessoa.idade = 5
console.log(pessoa)

// Object.freeze
// não add, nem remove, nem modifica attr
Object.freeze(pessoa)
pessoa.idade = 6
console.log('Congelado: ', Object.isFrozen(pessoa))
console.log(pessoa)
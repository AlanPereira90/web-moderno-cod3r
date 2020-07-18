const pessoa = {nome: 'Joao'}

pessoa.nome = 'Pedro' // a const não deixou de ser o objeto, o objeto é que mudou de característica
console.log(pessoa)

//pessoa = {nome: 'Ana'} isso não é possível, pois tenta substituir o obj da const

Object.freeze(pessoa)
pessoa.nome = 'Alan'//não gera erro, mas o nome não será substituído 
console.log(pessoa)

const pessoaConst = Object.freeze({ nome: 'Joao' })//dessa forma o objeto já nasce inteiro constante
console.log(pessoaConst)
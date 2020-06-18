// novo recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: "Rua ABC",
        numero: 1000
    }
}

//destruturing
const { nome, idade } = pessoa //tira nome e idade de pessoa
console.log(nome, idade)

const { nome:n, idade:i } = pessoa //faz o mesmo, mas atribui a variaveis com nome diferente
console.log(n)
console.log(i)

const {sobrenome = 'Neris'} = pessoa //atribui valor padrao quando nao existe o atributo no obj
console.log(sobrenome) 

const { endereco: {logradouro, numero} } = pessoa //acessa atributo de um objeto dentro do outro
console.log(logradouro, numero)
// notação literal
const obj1 = {}

// Object em JS
const obj2 = new Object

// funções contrutoras
function Produto(nome,preco,desc){
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}
const produto = new Produto('Caneta',7.99,0.15)
const produto2 = new Produto('Notebook',2999,0.25)
console.log(produto.getPrecoComDesconto())
console.log(produto2.getPrecoComDesconto())

// função factory
function criarFuncionario(nome, salarioBase, faltas){
    return {
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}
const f1 = criarFuncionario('Alan',8400,1)
console.log(f1.getSalario())

// Object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

// uma função famosa que retorna um objeto...
const fromJSON = JSON.parse('{"info":"Sou um JSON"}')
console.log(fromJSON)

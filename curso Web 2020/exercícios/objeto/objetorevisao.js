// colecao dinamica de pares chave/valor
const produto = new Object

//adiciono chave/valor dinamicamente
produto.nome = 'Cadeira' //melhor notação
produto['marca'] = 'Generica' //notação nhaca

console.log(produto)


delete produto.marca
console.log(produto)

//objeto mais complexo, contendo outro objeto, um array de objetos e uma função
const carro = {

    modelo: 'A4',
    valor: 89000,
    proprietario:{
        nome: 'Raul',
        idade: 56,
        endereco:{
            logradouro: 'Rua ABC',
            numero: 123
        }
    },
    condutores:[{
        nome: 'Junior',
        idade: 19
    },{
        nome: 'Ana',
        idade:42
    }],
    calcularValorSeguro: function(){}
}

carro.proprietario.endereco.numero = 1000
console.log(carro)

delete carro.condutores //deleta tudo que está abaixo do nivel deletado
console.log(carro)
console.log(carro.condutores)
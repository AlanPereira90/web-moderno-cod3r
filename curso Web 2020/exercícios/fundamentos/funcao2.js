//armazenando funcao em variavel
const imprimirSoma = function (a, b){
    console.log(a + b)
}

imprimirSoma(2, 3)

//armazenando uma função arrow em uma variavel
const soma = (a, b) => {
    return a + b
}

console.log(soma(10,2))

// retorno implicito
const subtracao = (a, b) => a - b 
//quando não tem {} significa que a arrow function executa uma unica sentença como resultado

console.log(subtracao(10, 2))
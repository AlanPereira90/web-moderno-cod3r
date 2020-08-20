console.log(this === global)
console.log(this === module)
console.log(this === module.exports)
console.log(this === exports) //this referencia o module.exports


function logThis(){
    console.log('Dentro da Função')
    console.log(this === module.exports)
    console.log(this === global) //this dentro de uma funcao referencia o global, cuidado!
}

logThis()
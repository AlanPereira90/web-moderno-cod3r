// arrow function
const soma = (a,b) => a + b //return implicito quando não tem corpo
console.log(soma(3,7))

// arrow function this
const lexico1 = () => console.log(this === exports) //em arrow funcions this aponta para exports e não para global
lexico1()

//parametros default
function log(texto = 'Node'){
    console.log(texto)
}
log('Alan')
log()

//operador rest
function total(...numeros){
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
console.log(total(2,3,4,5,6,7,8,9))
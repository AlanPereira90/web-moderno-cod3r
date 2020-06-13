//funcao sem retorno
function imprimirSoma(a, b){
   console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2) //o segundo parametro é undefined, por isso retorna NaN
imprimirSoma(2,10,12) //ele aceita, mas como o terceiro não existe, é descartado
imprimirSoma() //aceita, mas como os valores estão undefined, vai retornar NaN

//funcao com retorno
function soma(a, b = 0){
    return a + b
}

console.log(soma(2,3))
console.log(soma(2)) //dessa vez o segundo parametro, tem valor padrão, então a soma vai acontecer
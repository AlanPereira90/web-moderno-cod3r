function soma(){
    let soma = 0;
    for (i in arguments){ //arguments traz a lista de parametros passados, mesmo que não haja nenhum declarado.
        soma += arguments[i]
    }
    return soma
}

console.log(soma(2,3,2))

//em toda function existe o array arguments
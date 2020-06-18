const funcs = []

for (var i = 0; i < 10; i++){
    //adicionando funções no array
    funcs.push(() => {
        console.log(i)
    })
}

funcs[2]()
funcs[8]()
//como var não tem escopo, qualquer uma das funções que chamo retorna o valor atual de i
const funcs = []

for (let i = 0; i < 10; i++){
    //adicionando funções no array
    funcs.push(() => {
        console.log(i)
    })
}

funcs[2]()
funcs[8]()
//como let tem escopo, cada função retorna o valor de i no momento em que foi adicionada ao array
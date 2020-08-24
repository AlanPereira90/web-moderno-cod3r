// let e const
{
    var a = 2 //var tem escopo global
    let b = 3 //let tem escopo de bloco
}

//template string
const produto = `iPad`
console.log(`${produto} é caro!
Muito caro!`)

//destruturing
const [l, e, ...tras] = 'Cod3r'
console.log(l, e, tras)

const [x, , y] = [1,2,3]
console.log(x,y)

const {idade: i, nome} = {nome: 'Ana', idade: 9}
console.log(i, nome)
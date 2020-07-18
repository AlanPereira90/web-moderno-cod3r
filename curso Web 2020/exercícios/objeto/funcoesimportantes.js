const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(e => {

    console.log(`${e[0]}: ${e[1]}`)
   
})

Object.defineProperty(pessoa,'dataNascimento',{//altera propriedades do atributo
    enumerable: true, //não retorna em keys
    writable: false, //somente leitura
    value: '08/08/1990'
})
pessoa.dataNascimento = '12/04/1991'
console.log(pessoa)

//es2015
const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 }
const obj = Object.assign(dest, o1, o2)
console.log(obj)

Object.freeze(obj)//congela os atributos
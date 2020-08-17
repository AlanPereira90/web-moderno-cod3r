Array.prototype.reduce2 = function(callback, inicial){

    let indiceIni = inicial ? 0 : 1
    let acum = inicial || this[0]
    
    for (let i = indiceIni; i < this.length; i++){
        acum = (callback(acum,this[i],i,this))
    }

    return acum
}

const alunos = [
    {nome: "João", nota: 7.3, bolsista: false},
    {nome: "Maria", nota: 9.2, bolsista: true},
    {nome: "Pedro", nota: 9.8, bolsista: false},
    {nome: "Ana", nota: 8.7, bolsista: true}
]

const resultado = alunos.map(a => a.nota).reduce2((acumulador, atual) => {
   // console.log(acumulador, atual)
    return acumulador + atual
}, 10) //após a callback, passo o valor inicial, que não é obrigatório

console.log(resultado)
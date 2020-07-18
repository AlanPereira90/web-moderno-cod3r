const pai = {nome: 'Pedro', corCabelo: 'Preto'}

const filha1 = Object.create(pai)
filha1.nome = 'Ana'

console.log(filha1.corCabelo)

const filha2 = Object.create(pai,{
    nome: { value: 'Bia', writable: false, enumerable: true}
})
console.log(filha2.nome)
filha2.nome = 'Carla'
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha1)) //keys só tras as propriedads da propria classe
console.log(Object.keys(filha2))

//for in alcança as propriedades da classe pai
for (let key in filha2){
    //nome pertence ao objeto filha2, corCabelo foi herdado da classe pai
    filha2.hasOwnProperty(key) ? console.log(key) : console.log(`Por herança ${key}`)
}
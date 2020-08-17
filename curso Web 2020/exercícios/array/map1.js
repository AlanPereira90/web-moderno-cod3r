const nums = [1,2,3,4,5]

//map é um for com propósito
let resultado = nums.map((valor) => {
  return valor * 2 //para cada valor do array, retorna o valor dobrado
})

console.log(resultado)

//algumas funções para usar no map
const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`

//posso ter maps encadeados
resultado = nums.map(soma10).map(triplo).map(paraDinheiro)

console.log(resultado)


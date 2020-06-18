console.log(`a = ${a}`)
var a = 2
console.log(`a = ${a}`)

//hoisting é o issamento, mesmo que a variável tenha sido declarada depois do primeiro log, 
//o interpretador sabe que ela existe, e apenas não foi atribuída ainda
//NÃO TRAZ BENEFÍCIO ALGUM!!!

//console.log(`b = ${b}`) ERRO! Com let não exite hoisting
let b = 2
console.log(`b = ${b}`)
console.log(typeof Object)//objeto é uma function
console.log(typeof new Object) //new instancia um objeto, por isso retorna Object

//o mesmo se aplica a uma function declarada
const Cliente = function(){}
console.log(typeof Cliente)
console.log(typeof new Cliente) 

//o mesmo se aplica a uma classe
class Produto {}
console.log(typeof Produto)
console.log(typeof new Produto)

//em js um objeto é criado a partir da instancia de uma função, utilizando o new
//quando crio um objeto de forma lieral, utilizando {}, a instancia é criada automaticamente
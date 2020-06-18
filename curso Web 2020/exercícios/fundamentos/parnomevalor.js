// par nome/valor
const saudacao = 'Opa' //contexto léxico 1

function exec(){
    const saudacao = 'Fala bro' //contexto léxico 2
    return saudacao
}

//saudacao está declarada duas vezes, porém em contextos léxicos diferentes
console.log(saudacao)
console.log(exec())

//objetos são grupos aninhados de pares nome/valor
const Cliente = {
    nome: "Alan",
    idade: 29,
    peso: 70,
    endereco: {
        logradouro: "Rua Jorge",
        numero: 999
    }
}

console.log(Cliente)
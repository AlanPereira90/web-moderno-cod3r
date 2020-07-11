// Closure é o escopo criado quando uma função é declarada
// esse escopo permite a função acessar e manipular variaveis externas à função

// contexto lexico em acao

const c = 'Global'

function fora(){

    const x = 'Local'

    function dentro(){
        return x //aqui x é local
    }

    return dentro
}

const minhaFuncao = fora()

console.log(minhaFuncao())


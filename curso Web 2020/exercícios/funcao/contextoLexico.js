const valor = 'Global'

function minhaFuncao(){
    console.log(valor)
}

function exec(){
    const valor = 'Local'
    minhaFuncao()
}

exec()

//por mais que exec() tenha a const valor, o contexto lexico de valor em minhaFuncao(),
//é a const Global
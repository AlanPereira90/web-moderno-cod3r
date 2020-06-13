const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'

const template = `
    Olá
    ${nome}!` //template string suporta quebra de linha

console.log(concatenacao, template)

console.log(`1 + 1 = ${1 + 1}`) //template string resolve a expressão dentro do ${}

const up = texto => texto.toUpperCase()

console.log(`Ei... ${up('cuidado')}!`) //template string resolve a função dentro do ${}
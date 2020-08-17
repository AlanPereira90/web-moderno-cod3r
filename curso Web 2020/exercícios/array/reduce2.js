const alunos = [
    {nome: "João", nota: 7.3, bolsista: false},
    {nome: "Maria", nota: 9.2, bolsista: true},
    {nome: "Pedro", nota: 9.8, bolsista: false},
    {nome: "Ana", nota: 8.7, bolsista: true}
]

//desafio 1: todos os alunos são bolsistas?
const todosBolsistas = alunos.map(a => a.bolsista).reduce((acum,at) => {
    return acum && at
})

console.log(todosBolsistas)

//desafio 2: algum aluno é bolsista
const algumBolsista = alunos.map(a => a.bolsista).reduce((acum,at) => {
    return acum || at
})

console.log(algumBolsista)
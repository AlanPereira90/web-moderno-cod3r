// com promisse...
const http = require('http')

const getTurma = (letra) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    
    return new Promise((resolve, reject) => {

        http.get(url, (res) => {
            let resultado = ''
    
            res.on('data', dados => {
                resultado += dados
            })
    
            res.on('end', () => {
                try {
                    resolve(JSON.parse(resultado))
                } catch(e) {
                    reject(e)
                }
            })
        })
    })
}

// assim já melhorou por ser promisse, mas ainda é meio nhaca
let nomes = []
getTurma('A').then(alunos => {    
    nomes = nomes.concat(alunos.map(aluno => `A: ${aluno.nome}`))
    
    getTurma('B').then(alunos => {
        nomes = nomes.concat(alunos.map(aluno => `B: ${aluno.nome}`))

        getTurma('C').then(alunos => {
            nomes = nomes.concat(alunos.map(aluno => `C: ${aluno.nome}`))
            console.log(nomes)
        })
    })    
})

//assim é bem melhor
Promise.all([getTurma('A'), getTurma('B'), getTurma('C')]) //chama as 3 funções, e espera as 3 chegarem
    .then(turmas => [].concat(...turmas)) //navega nos 3 retornos, concatenando todas (...turmas) no mesmo array
    .then(alunos => alunos.map(aluno => aluno.nome)) //faz um map no array unificado, pegando apenas os nomes
    .then(nomes => console.log(nomes)) // imprime os nomes

getTurma('D').catch(e => console.log(e.message))
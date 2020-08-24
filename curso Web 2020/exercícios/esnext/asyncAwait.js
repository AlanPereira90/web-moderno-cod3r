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

// recurso do ES8
// Objetivo de simplificar o uso de promises...
let obterAlunos = async () => {

    //explicito que são chamadas sincronas
    const turmaA = await getTurma('A')
    const turmaB = await getTurma('B')
    const turmaC = await getTurma('C')

    turmas = [].concat(turmaA, turmaB, turmaC) //já retorna as 3 dentro de um único array
    return turmas
} // retorna um objeto AsyncFunction

obterAlunos() //faz o then no objeto
    .then(alunos => alunos.map(aluno => aluno.nome)) //navega no array, para cada aluno faz um map e pega o nome
    .then(nomes => console.log(nomes)) //imprime os nomes
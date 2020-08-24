//aula MUITO importante
function falarDepoisDe(segundos, frase){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(frase) //resolve aceita um unico parametro (se precisar retornar varias coisas, usar obj)
        }, segundos * 1000);
    })
}

//sempre que o retorno da função for uma promisse, 
//usar o then para capturar o retorno, e cacth para capturar a rejeição
falarDepoisDe(5,'Oi Alan')
    .then(frase => frase.concat('!'))
    .then(outraFrase => console.log(outraFrase))
    .catch(e => console.log(e))
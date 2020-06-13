const escola = 'cod3r'

console.log(escola.charAt(4)) //quarto caractere da cadeia 
console.log(escola.charAt(5)) //apesar de não existir, não gera erro, apenas retorna vazio

console.log(escola.charCodeAt(3)) //retorna o codigo HTML do caractere na tabela UNICODE

console.log(escola.indexOf('r'))// retorna a posição do caractere na cadeia

console.log(escola.substring(1)) //retorna tudo a partir do indice 1
console.log(escola.substring(0, 3)) //retorna 3 caracteres a partir do indice 0

console.log('Escola '.concat(escola).concat('!')) //concatenação
console.log('Escola ' + escola + '!') //outra forma de concatenação

console.log(escola.replace('3', 'e')) //substitui o numero 3 pela letra e

console.log('Alan,Carol,Davi,Ana,Júlia'.split(','))// utiliza a ',' como separador e retorna um array
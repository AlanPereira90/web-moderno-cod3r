let isAtivo = false

console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo) //dupla negacao para verificar se o valor representa verdadeiro ou falso

console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1) //qualquer numero diferente de 0
console.log(!!' ') //espaço ou qualquer caractere
console.log(!![]) //array, memso que vazio
console.log(!!{}) //objeto, mesmo que vazio
console.log(!!Infinity) //infinito
console.log(!!(isAtivo = true)) //resultado da atribuição

console.log('os falsos...')
console.log(!!0)//numero 0
console.log(!!'')//string vazia
console.log(!!null)//nulo
console.log(!!NaN)//not a number
console.log(!!undefined)//indefinido
console.log(!!(isAtivo = false))//resultado da atribuição

console.log('pra finalizar')
console.log(!!('' || null || 0 || ' ')) //resultado da operação

let nome = ''
console.log(nome||'desconhecido') //se nome for falso, imprime o desconhecido

nome = 'Alan'
console.log(nome||'desconhecido') //aqui o nome é true
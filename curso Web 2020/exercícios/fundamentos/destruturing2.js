const [a] = [10] //variavel a, recebe o elemento de mesma posição do array
console.log(a)

const [n1, n2, n3] = [10, 9, 6]
console.log(n1, n2, n3)

const [a1, , a2, a3] = [3, 5, 6, 7] // posso ignorar posições
console.log(a1, a2, a3)

const [, [, nota]] = [[1,2],[3,4]] //array dentro de array
console.log(nota)

//não é muito útil, muito difícil leitura
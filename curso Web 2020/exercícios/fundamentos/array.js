const valores = [7.7, 8.9, 6.3, 9.2]

console.log(valores[0], valores[3]) 
console.log(valores[4]) //se acesso um indice que não existe, retorna undefined

valores[4] = 10 //possos atribuir valor em um indice específico
console.log(valores[4])

console.log(valores.length) //tamanho do array

valores.push({id: 3}, false, null, 'teste') //array é heterogêneo, embora não seja uma boa prática
console.log(valores)

console.log(valores.pop()) //retira o ultimo elemento e retorna

delete valores[0] //retira o elemento de indice 0
console.log(valores)

console.log(typeof valores)
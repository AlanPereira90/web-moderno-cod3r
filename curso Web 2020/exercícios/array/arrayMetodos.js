const pilotos = ['Vettel','Alonso','Raikkonen','Massa']

pilotos.pop() //remove o último elemento
console.log(pilotos)

pilotos.push('Verstappen')//adiciona na ultima posição
console.log(pilotos)

pilotos.shift() //remove o primeiro elemento
console.log(pilotos)

pilotos.unshift('Hamilton') //adiciona na primeira posição
console.log(pilotos)

//splice pode adicionar e remover elementos
//adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa') //indice 2, remove 0, adiciona bottas e massa
console.log(pilotos)

//remover
pilotos.splice(3, 1)//indice 3, remove 1
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) //novo array a partir do índice 2
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) //índice 1 a 4, exceto o 4
console.log(algunsPilotos2)
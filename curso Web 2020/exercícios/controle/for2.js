const notas = [9.7, 8.1, 4.4, 8.6, 7.4]

for (let i in notas){
    console.log(`nota = ${notas[i]}`)
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 22,
    peso: 65
}

for (let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}
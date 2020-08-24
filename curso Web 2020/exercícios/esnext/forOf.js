for (let letra of 'Cod3r'){
    console.log(letra)
}

//comparação
for (let i in 'Cod3r'){
    console.log('Cod3r'[i])
}

//enquanto for in navega por indices, for of navega por valores

const assuntosEcma = ['Map','Set','Promisse']
for (let i in assuntosEcma){
    console.log(i)
}

for (let assunto of assuntosEcma){
    console.log(assunto)
}

const assuntosMap = new Map([
    ['Map', {abordado: true}],
    ['Set', {abordado: true}],
    ['Promisse', {abordado: false}]
])

for (let assunto of assuntosMap){
    console.log(assunto)
}

for (let chave of assuntosMap.keys()){
    console.log(chave)
}

for (let valor of assuntosMap.values()){
    console.log(valor)
}

for (let [ch, vl] of assuntosMap.entries()){
    console.log(ch, vl)
}

const s = new Set(['A', 'B', 'C'])
for (let letra of s){
    console.log(letra)
}
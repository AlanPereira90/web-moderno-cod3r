//estrutura de conjunto não indexada. não aceita repetição
const times = new Set()
times.add('Vasco')
times.add('Palmeiras').add('Flamengo')
times.add('Santos')
times.add('Vasco')

console.log(times)
console.log(times.size)
console.log(times.has('Vasco'))
times.delete('Flamengo')
console.log(times.has('Flamengo'))

const nomes = ['Alan', 'Carol', 'Davi', 'Ana', 'Ana']
const nomesSet = new Set(nomes)
console.log(nomesSet)
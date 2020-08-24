// rest(juntar)/spread(espalhar)

//como usar spread com obj
const funcionario = {nome: 'Maria', salario: 1234.99}
const clone = {ativo: true, ...funcionario}
console.log(clone)

//usar spread com array
const grupoA = ['João','Pedro','Glória']
const grupoFinal = ['Maria',...grupoA, 'Rafaela']
console.log(grupoFinal)
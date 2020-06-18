var numero = 1
{
    let numero = 2
    console.log(`dentro = ${numero}`)//declaracao com let se limita ao escopo, por isso não vai sobrepor
}
console.log(`fora = ${numero}`)
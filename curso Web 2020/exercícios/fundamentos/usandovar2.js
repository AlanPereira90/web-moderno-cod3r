var numero = 1
{
    var numero = 2 //declaracao com var sobrepoe, mesmo estando dentro do escopo das {}
    console.log(`dentro = ${numero}`)
}
console.log(`fora = ${numero}`)
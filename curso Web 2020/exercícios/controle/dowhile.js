function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min //random retorna entre 0 e 1
    return Math.floor(valor)
}

let opcao = -1

do {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opção escolhida foi ${opcao}`)
} while (opcao != -1)

console.log('Até a próxima')
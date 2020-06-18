//function faz destruturing no array decebido
//não enxergo aplicação para isso
function rand([min = 0, max = 1000]){
    if (min > max){
        [min, max] = [max, min] //inverte os atributos recebidos
    }
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([50,40]))
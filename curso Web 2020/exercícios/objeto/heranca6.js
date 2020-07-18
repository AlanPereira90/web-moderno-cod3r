function Aula(nome, videoID){
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula('Aula 1',123)
const aula2 = new Aula('Aula 2',124)

console.log(aula1, aula2)

//simulando o new
function novo(f, ...params){
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params)

    return obj
}

const aula3 = novo(Aula, 'Aula 3', 125)
console.log(aula3)
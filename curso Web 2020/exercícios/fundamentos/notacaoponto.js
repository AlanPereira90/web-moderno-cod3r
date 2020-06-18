//notacao ponto, é usada pra acessar um atributo de um objeto

console.log(Math.ceil(6.1)) 

const obj1 = {}
obj1.nome = 'Bola'

console.log(obj1.nome)

function Obj(nome){
    // this. atribui valores a propriedades do chamador
    this.nome = nome 
    this.exec = () => {
        console.log('Exec...')
    }
}

const obj2 = new Obj('Alan')
console.log(obj2.nome)
obj2.exec()

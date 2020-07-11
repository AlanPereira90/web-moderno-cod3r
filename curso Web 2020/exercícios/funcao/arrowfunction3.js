let comparaComThis = function(param){
    console.log(param === this)
}

comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj)

comparaComThis(global)
comparaComThis(obj)

//no arrow, o this aponta para o objeto corrente, neste caso, é o modulo
let comparaComThisArrow = (param) => console.log(this === param)

comparaComThisArrow(global)
comparaComThisArrow(module.exports)

//arrow function não substitui o escopo do this, nem com o bind
comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)
comparaComThisArrow(module.exports)
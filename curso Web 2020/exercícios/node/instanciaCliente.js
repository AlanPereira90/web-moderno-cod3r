const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

const contadorC = require('./instanciaNova')()
const contadorD = require('./instanciaNova')()

//contador A e B são a mesma instancia, pois o node faz cache dos modulos
contadorA.inc()
contadorA.inc()
console.log(contadorB.valor)

//contador C e D não são a mesma instancia, pois é uma factory, que cria instâncias independetes
contadorC.inc()
contadorC.inc()
console.log(contadorD.valor)
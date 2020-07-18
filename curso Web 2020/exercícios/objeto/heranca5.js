console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

//se String/Array,Object é uma funcion, posso acessar o prototype e criar funções
String.prototype.reverse = function () {
    return this.split('').reverse().join('')
}

console.log('Escola cod3r'.reverse())

Array.prototype.first = function() {
    return this[0]
}
console.log(['A','l','a','n'].first())

//posso sobrescrever uma fn que já existe, mas isso é caca, não fazer isso
String.prototype.toString = function () {
    return 'Lascou tudo'
}
console.log('Escola cod3r'.reverse())

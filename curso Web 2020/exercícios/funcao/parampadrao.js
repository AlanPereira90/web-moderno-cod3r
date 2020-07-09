function soma(a,b,c){
  a = a || 1
  b = b || 1
  c = c || 1
  
  return a + b + c
}

console.log(soma(4))
console.log(soma())
console.log(soma(2,3))
console.log(soma(1,2,3))

console.log(soma(0,0,0)) //nhaca, porque 0 retorna false

function soma2(a,b,c){
    a = a !== undefined ? a : 1 //estratégia 1
    b = 1 in arguments ? b : 1 //estratégia 2
    c = isNaN(c) ? 1 : c //estratégia 3 (melhor opção por evitar stringsa)

    return a + b + c
}

console.log(soma2(4))
console.log(soma2())
console.log(soma2(2,3))
console.log(soma2(1,2,3))

console.log(soma2(0,0,0)) 


//pode-se usar valor padrao a partir do es2015

function soma3(a = 1, b = 1, c = 1){
    return a + b + c
}

console.log(soma3(4))
console.log(soma3())
console.log(soma3(2,3))
console.log(soma3(1,2,3))

console.log(soma3(0,0,0)) 
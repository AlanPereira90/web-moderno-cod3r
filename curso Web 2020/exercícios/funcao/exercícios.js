//ex 1
function ex1(a, b){
    console.log(`soma = ${a + b}`)
    console.log(`subtracao = ${a - b}`)
    console.log(`multiplicação = ${a * b}`)
    console.log(`divisão = ${a / b}`)
}
ex1(3,4)

//ex2
function triangulo(ladoA, ladoB, ladoC){
    
    if (ladoA == ladoB && ladoA == ladoC){
        console.log('Equilátero')
    } else if (ladoA != ladoB && ladoA != ladoC && ladoB != ladoC){
        console.log('Escaleno')
    } else {
        console.log('Isósceles')
    }
}
triangulo(1,2,3)
triangulo(2,2,4)
triangulo(2,2,2)

//ex3
function exponenciar(base, expoente){
    return Math.pow(base,expoente)
}
console.log(exponenciar(2,16))

//ex4
function divisaoInt(dividendo, divisor){
    resultado = Math.trunc(dividendo / divisor)
    resto = dividendo % divisor

    console.log(`resultado = ${resultado}; resto = ${resto}`)
}
divisaoInt(10,3)

//ex5
function formataReal(valor){
    return `R$ ${valor.toFixed(2).replace('.',',')}`
}
console.log(formataReal(0.1 + 0.2))

//ex6
function jurosSimples(capital, taxa = 0.1, tempo = 12){
  return (capital * taxa * tempo).toFixed(2)
}

function jurosComposto(capital, taxa = 0.1, tempo = 12){
  return (capital * Math.pow(1 + taxa, tempo)).toFixed(2)
}

console.log(jurosSimples(100, 0.1, 12))
console.log(jurosComposto(100, 0.1, 12))

//ex7
function bhaskara(ax2, bx, c){
   
    let delta = Math.pow(bx,2) - (4 * ax2 * c)
    console.log(delta)

    if (delta < 0){
        return 'Delta negativo'
    } else {
        let result = []

        let aux

        aux = (-bx + Math.sqrt(delta)) / 2 * ax2
        result.push(aux)

        aux = (-bx - Math.sqrt(delta)) / 2 * ax2
        result.push(aux)

        return result
    }
}
console.log(bhaskara(3, -5, 12))
console.log(bhaskara(1, 2, -15))

//ex8
function recordesBasquete(pontuacoes = []){

    let melhorPontuacao = pontuacoes[0]
    let qtdRecordes = 0

    let piorPontuacao = pontuacoes[0]
    let idxPiorPontuacao = 0

    for(x in pontuacoes){
        if (pontuacoes[x] > melhorPontuacao){
            qtdRecordes++
            melhorPontuacao = pontuacoes[x]
        }

        if (pontuacoes[x] < piorPontuacao){
            idxPiorPontuacao = parseInt(x)
            piorPontuacao = pontuacoes[x]            
        }
    }

    return [qtdRecordes, idxPiorPontuacao + 1]
}
console.log(recordesBasquete([10, 20, 20, 8, 25, 3, 0, 30, 1]))

//ex9
function arredondaNota(nota){
    if (!nota || nota < 0 || nota > 100){
        return 'Nota Invalida'
    } else {
        if (nota < 38){
            return nota
        } else {
            if (nota % 5 >= 3){
                return nota + (5 - (nota % 5))
            } else {
                return nota
            }
        }
    }
}
console.log(arredondaNota(72))
console.log(arredondaNota(38))
console.log(arredondaNota(34))
console.log(arredondaNota(74))

//ex10
function divisivelPorTres(numero){
    if (!numero){
        return 'numero invalido'
    } else {
        return (numero % 3 == 0)
    }
}
console.log(divisivelPorTres(9))
console.log(divisivelPorTres(10))
console.log(divisivelPorTres())

//ex11
function anoBissexto(ano){
    if (!ano){
        'ano inválido'
    } else if (ano % 400 == 0){
        return true
    } else if (ano % 100 == 0){
        return false
    } else {
        return ano % 4 == 0
    }
}
console.log(anoBissexto(400))
console.log(anoBissexto(100))
console.log(anoBissexto(8))
console.log(anoBissexto(9))
console.log(anoBissexto(2020))

//ex12
function fatorial(numero){

    let auxNum = numero
    let resultado = 1

    while (auxNum > 0){
        resultado *= auxNum
        auxNum--
    }

    return resultado
}
console.log(fatorial(7))

//ex13
function diaUtil(dia){
    switch (dia) {
        case 1: case 7:
            return 'Fim de Semana'
            break
        case 2: case 3: case 4: case 5: case 6:
            return 'Dia Útil'
            break
        default:
            return 'Dia Inválido'
            break
    }
}
console.log(diaUtil())
console.log(diaUtil(1))
console.log(diaUtil(7))
console.log(diaUtil(3))
console.log(diaUtil(5))

//ex14
function fruta(nome){

    switch (nome){
        case 'maçã':
            return 'Não vendemos essa fruta aqui'
            break
        case 'kiwi':
            return 'Estamos com escassez de kiwi'
            break
        case 'melancia':
            return 'aqui está, são 3 reais o kilo'
            break
        default: 
            return 'erro! opção inválida'
            break
    }
}
console.log(fruta('maçã'))
console.log(fruta('kiwi'))
console.log(fruta('melancia'))
console.log(fruta('jaca'))

//ex15
function comprarCarro(tipo){
    switch (tipo){
        case 'hatch':
            return 'compra efetuada com sucesso'
        case 'sedan': case 'motocicleta': case 'caminhonete':
            return 'tem certeza que não prefere este modelo?'
        default:
            return 'modelo inválido'
    }
}
console.log(comprarCarro('hatch'))
console.log(comprarCarro('sedan'))
console.log(comprarCarro('motocicleta'))
console.log(comprarCarro('caminhonete'))
console.log(comprarCarro('furgão'))

//ex16
function calcular(numA= 0, operador, numB = 0){

    switch (operador){

        case '+':
            return numA + numB
        case '-':
            return numA - numB
        case '*': case 'x':
            return numA * numB
        case '/': 
            return numA / numB
        default:
            return 'operação inválida'
    }
}
console.log(calcular(2,'+',2))
console.log(calcular(2,'-',2))
console.log(calcular(2,'*',2))
console.log(calcular(2,'/',2))
console.log(calcular(2,'a',2))

//ex17
function novoSalario(salarioAtual, plano){
    switch (plano){
        case 'A':
            return (salarioAtual * 1.1).toFixed(2)
        case 'B':
            return (salarioAtual * 1.15).toFixed(2)
        case 'C':
            return (salarioAtual * 1.2).toFixed(2)
        default:
            return 'Plano Inválido'
    }
}
console.log(novoSalario(100,'A'))
console.log(novoSalario(100,'B'))
console.log(novoSalario(100,'C'))
console.log(novoSalario(100,'D'))

//ex18
function extenso(numero){

    switch(numero){
        case 0:
            return 'Zero'
        case 1:
            return 'Um'
        case 2:
            return 'Dois'
        case 3:
            return 'Três'
        case 4: 
            return 'Quatro'
        case 5:
            return 'Cinco'
        case 6:
            return 'Seis'
        case 7:
            return 'Sete'
        case 8:
            return 'Oito'
        case 9:
            return 'Nove'
        case 10:
            return 'Dez'
        default:
            return 'Limites excedidos'
    }
}
console.log(extenso(7))
console.log(extenso(-1))
console.log(extenso(11))

//ex19
function calculoLanche(codigo, quantidade = 1){
    
    switch (codigo){
        case 100:
            return quantidade * 3
        case 200:
            return quantidade * 4
        case 300:
            return quantidade * 5.5
        case 400:
            return quantidade * 7.5
        case 500:
            return quantidade * 3.5
        case 600:
            return quantidade * 2.8
        default:
            return 'Inválido'
    }
}
console.log(calculoLanche(500,2))

//ex20
function cedulas(valor){

    let faltante = valor
    let cedulas100 = 0
    let cedulas50 = 0
    let cedulas20 = 0
    let cedulas10 = 0
    let cedulas5 = 0
    let cedulas2 = 0
    let cedulas1 = 0

    cedulas100 = Math.trunc(faltante/100)
    faltante -= (cedulas100*100)

    cedulas50 = Math.trunc(faltante/50)
    faltante -= (cedulas50*50)

    cedulas20 = Math.trunc(faltante/20)
    faltante -= (cedulas20*20)

    cedulas10 = Math.trunc(faltante/10)
    faltante -= (cedulas10*10)

    cedulas5 = Math.trunc(faltante/5)
    faltante -= (cedulas5*5)

    cedulas2 = Math.trunc(faltante/2)
    faltante -= (cedulas2*2)

    cedulas1 = Math.trunc(faltante/1)
    faltante -= (cedulas1*1)
    
    let texto = ''

    texto += cedulas100 ? `${cedulas100} notas de R$ 100.00. ` : ''
    texto += cedulas50 ? `${cedulas50} notas de R$ 50.00. ` : ''
    texto += cedulas20 ? `${cedulas20} notas de R$ 20.00. ` : ''
    texto += cedulas10 ? `${cedulas10} notas de R$ 10.00. ` : ''
    texto += cedulas5 ? `${cedulas5} notas de R$ 5.00. ` : ''
    texto += cedulas2 ? `${cedulas2} notas de R$ 2.00. ` : ''
    texto += cedulas1 ? `${cedulas1} notas de R$ 1.00. ` : ''

    return texto    
}
console.log(cedulas(123))

//ex21
function valorConvenio(idade){

    let valorInicial = 100

    if (idade < 10 ){
        return valorInicial + 80
    } else if (idade >= 10 && idade <= 30){
        return valorInicial + 50
    } else if (idade > 30 && idade <= 60){
        return valorInicial + 95
    } else {
        return valorInicial + 130
    }
}
console.log(valorConvenio(10))
console.log(valorConvenio(29))
console.log(valorConvenio(70))

//ex22
function calcularAnuidade(mes, valor){
  return (valor * Math.pow(1 + 0.05, mes-1)).toFixed(2)
}
console.log(calcularAnuidade(3,100))

//ex23
function mediaNotas(codigoAluno, nota1, nota2, nota3){
    arrayNotas = [nota1, nota2, nota3].sort()

    media = 0

    for (i in arrayNotas){
        if (i=0){
            media += arrayNotas[i] * 0.4
        } else {
            media += arrayNotas[i] * 0.3
        }
    }
    return `Aluno ${codigoAluno} 
            Nota1: ${nota1}
            Nota2: ${nota2}
            Nota3: ${nota3}
            Media: ${media.toFixed(2)}
            ${media >= 5 ? 'Aprovado' : 'Reprovado'}`
}
console.log(mediaNotas('555',10,8,7))
console.log(mediaNotas('555',5,3,3))

//ex24
function helloWorld(){

    count = 0

    while (count < 11){
        console.log('Hello World!')
        count++
    }
}
helloWorld()

//ex25
function umAteCinquenta(){
  
    for (let i = 1; i<=50; i++){
        console.log(i)
    }
}
umAteCinquenta()

//ex26
function paresDeUmaCem(){

    let result = []
    for (let i = 1; i<=100; i++){
        if (i % 2 == 0){
            result.push(i)
        }
    }
    return result
}
console.log(paresDeUmaCem())

//ex28
function paresEImpares(valores = []){

    let pares = 0
    let impares = 0

    for(i in valores){

        if (valores[i] % 2 == 0){
            pares++
        } else {
            impares ++
        }
    }

    return `pares: ${pares}. ímpares: ${impares}`
}
console.log(paresEImpares([3,4,22,6,7,98]))

//ex29
function intervalo10e20(valores = []){

    let dentro = 0
    let fora = 0

    for(i in valores){

        if (valores[i] >= 10 && valores[i] <= 20){
            dentro++
        } else {
            fora++
        }
    }
    return `Dentro do Intervalo: ${dentro}. Fora do Intervalo: ${fora}`
}
console.log(intervalo10e20([13,10,99,3,-10,19,20,25]))

//ex30
function maiorEMenor(valores = []){

    let quant = valores.length
    
    if (quant == 0){
       return 'Array vazio'
    } else {
        valores = valores.sort((a,b) => a-b)

        return `Maior valor: ${valores[quant-1]}. Menor valor: ${valores[0]}`
    }    
}
console.log(maiorEMenor([3,90,56,72,1,99]))

//ex31
function negativos(valores = []){

    let count = 0
    for(i in valores){
        if (valores[i] < 0){
            count++
        }
    }
    return `${count} números negativos no conjunto`
}
console.log(negativos([10,13,-1,46,-5]))

//ex32
function media(valores = []){

    let quant = valores.length
    let soma = 0

    for (i in valores){
        soma += valores[i]
    }

    return `Média: ${(soma/quant).toFixed(2)}`
}
console.log(media([8,6,10,1]))

//ex33
let inteiros = [1,2,3,4]
let strings = ['a','b','c','d']
let double = [1.1,2.2,3.3,4.4]

console.log(inteiros.concat(strings, double))
console.log(strings.concat(double))

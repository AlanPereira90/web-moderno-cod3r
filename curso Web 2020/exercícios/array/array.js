console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia','Carlos','Ana') //notação ñ recomendada
console.log(aprovados)

aprovados = ['Bia','Carlos','Ana'] //notação literal, recomendada
console.log(aprovados[0])//acesso através do índice

aprovados[3] = 'Paulo' //forma caca de adicionar
aprovados.push('Abia') //forma ideal de adicionar, empre na última posição

console.log(aprovados.length)

aprovados[9] = 'Rafael' //preenche cria o intervalo vazio = undefined
console.log(aprovados.length)

console.log(aprovados)

aprovados.sort()
console.log(aprovados)

delete aprovados[1] //remove do array
console.log(aprovados[1])
console.log(aprovados)

aprovados = ['Bia','Carlos','Ana']
aprovados.splice(1, 1, 'Elemento 1') // a partir do carlos, exclui 1 e inclui Elemento 1
console.log(aprovados)
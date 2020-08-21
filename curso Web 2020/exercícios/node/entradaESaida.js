const anonimo = process.argv.indexOf('-a') !== -1 //passado na chamada da execução

if(anonimo){
    process.stdout.write('Fala anônimo!\n')
    process.exit()
} else {
    process.stdout.write('Informe o seu nome: ')
    process.stdin.on('data', (data) => {
        const nome = data.toString().replace('\n','')
        console.log(`Fala ${nome}!`)
        process.exit()
    })
}
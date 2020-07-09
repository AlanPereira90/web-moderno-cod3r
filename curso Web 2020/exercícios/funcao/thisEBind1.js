const pessoa = {
    saudacao: "Bom dia!",
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar()

const falar = pessoa.falar
falar() //conflito entre funcional e OO, ao armazenar a função na const, mudo o contexto, 
        //e o this muda

const falarDePessoa = pessoa.falar.bind(pessoa) //com o bind eu defino o this do contexto
falarDePessoa()
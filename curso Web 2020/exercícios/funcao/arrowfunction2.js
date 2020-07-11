function Pessoa(){
    this.idade = 0

    setInterval(() => {
        this.idade++
        console.log(this.idade) //na arrow function o this mantem o escopo de onde ela foi declarada
    }, 1000)
}

new Pessoa
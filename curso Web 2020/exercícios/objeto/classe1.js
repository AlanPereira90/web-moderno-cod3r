class Lancamento {

    constructor(nome = 'Genérico', valor = 0){

        this.nome = nome,
        this.valor = valor
    }
}

class CicloFinanceiro {

    constructor(mes, ano){
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    addLancamentos(...lancamentos){
        lancamentos.forEach(l => this.lancamentos.push(l))
    }

    sumario(){
        let valorConsolidado = 0
        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}

const lanc1 = new Lancamento('Salário', 45000)
const lanc2 = new Lancamento('Luz', -200)

const contas = new CicloFinanceiro(7,2020)
contas.addLancamentos(lanc1, lanc2)
console.log(contas.sumario())


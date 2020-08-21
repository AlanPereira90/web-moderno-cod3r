const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * 17 * * 5', () => {
    console.log(`Executando tarefa 1: ${new Date().getSeconds()}`)
})

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1,5)]//segunda a sexta
regra.hour = 17
regra.second = 7

const tarefa2 = schedule.scheduleJob(regra, () => {
    console.log(`Executando tarefa 2: ${new Date().getSeconds()}`)
})

setTimeout(() => {
    tarefa1.cancel()
    tarefa2.cancel()
    console.log('Terefas encerradas')
},30000);

//setImmediate
//setInterval
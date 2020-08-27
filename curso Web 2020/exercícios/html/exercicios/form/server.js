const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const { response } = require('express')

app.use(bodyParser.urlencoded({extended: true}))

app.post('/usuarios', (req, res) => {
    console.log(req.body)
    res.send('<h1>Parabéns. Usuário Incluído!</h1>')
})

app.post('/usuarios/:id', (req, res) => {
    console.log(req.params.id)
    console.log(req.body)
    res.send('<h1>Parabéns. Usuário Alterado!</h1>')
})

app.listen(3003, () => console.log('Listening on 3003 port'))
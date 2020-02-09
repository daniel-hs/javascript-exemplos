const porta = 3003

const express = require('express')
const app = express()


// app.get('/produtos', (req, res, next) => {
//     console.log('Middleware 1...')
//     //Necessario colocar o next para sair da execução
//     next()
// })

// //Qualquer url
// app.use((req, res, next) => {
//     //Converte para JSON
//     res.send( {
//         nome: 'Notebook',
//         preco: 123.45
//     })
// })

app.get('/produtos', (req, res, next) => {
    //Converte para JSON
    res.send( {
        nome: 'Notebook',
        preco: 123.45
    })
})

app.listen(porta, () => {
    console.log(`Servidor está executando na porta ${porta}`)
})
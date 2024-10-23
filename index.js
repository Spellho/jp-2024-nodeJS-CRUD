const express = require('express')
const routes =  require('./src/routes/pessoa')

const app = express()

app.use(express.json())

app.use(routes)

const PORT = 3000

app.listen(PORT, () => {
    console.info(`Servidor rodando na porta ${PORT}`)
})
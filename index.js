const express = require('express')
const routes =  require('./src/routes/pessoa')

const database = require('./src/config/database')

const app = express()
app.use(express.json())
app.use(routes)

const PORT = 3000

database.db
    .sync({ force: false })
    .then((_) => {
        console.info("Banco conectado com sucesso")
        app.listen(PORT, () => {
            console.info(`Servidor rodando na porta ${PORT}`)
        })
    })
    .catch((e) => {
        console.error(`Conexão falhou: ${e}`)
    })

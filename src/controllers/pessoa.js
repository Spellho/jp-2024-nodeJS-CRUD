const ServicePessoa = require('../services/pessoa')

class ControllerPessoa {
    async GetPessoas(req, res) {
        try {
            const pessoas = await ServicePessoa.GetPessoas()
            res.send({msg:pessoas})
        } catch (error) {
            res.status(500).send({msg:error.message})
        }
    }

    async CreatePessoa(req, res) {
        try {
            const { name, password, email } = req.body

            const pessoa = await ServicePessoa.CreatePessoa(name, password, email)
            res.send({msg:pessoa})
        } catch (error) {
            res.status(500).send({msg:error.message})
        }
    }

    async UpdatePessoa(req, res) {
        try {
            const id = req.params.id
            const { name, password, email } = req.body
            const pessoa = await ServicePessoa.UpdatePessoa(id, name, password, email)
            res.send({msg:pessoa})
        } catch (error) {
            res.status(500).send({msg:error.message})
        }
    }

    async DeletePessoa(req, res) {
        try {
            const id = req.params.id
            await ServicePessoa.DeletePessoa(id)
            res.status(204).send()
        } catch (error) {
            res.status(500).send({msg:error.message})
        }
    }
}

module.exports = new ControllerPessoa()
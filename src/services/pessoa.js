const ModelPessoa = require('../models/pessoa')

class ServicePessoa {
    async GetPessoas() {
        return ModelPessoa.findAll()
    }

    async CreatePessoa(name, password, email) {
        if(!name || !password || !email) {
            throw new Error("Todos os dados são obrigatórios!")
        }
        return ModelPessoa.create({ name, password, email })
    }

    async UpdatePessoa(id, name, password, email) {
        if(!id) {
            throw new Error("Favor informar o id")
        }
        const pessoa = await ModelPessoa.findByPk(id)
        if(!pessoa) {
            throw new Error("Pessoa não encontrada")
        }
        pessoa.name = name || pessoa.name
        pessoa.password = password || pessoa.password
        pessoa.email = email || pessoa.email

        pessoa.save()
        return pessoa
    }

    async DeletePessoa(id) {
        if(!id) {
            throw new Error("Favor informar o id")
        }
        return ModelPessoa.destroy({ where: { id } })
    }
}

module.exports = new ServicePessoa()
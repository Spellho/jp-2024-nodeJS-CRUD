const express = require('express')
const controllerPessoa = require('../controllers/pessoa')

const router = express.Router()

router.get('/', controllerPessoa.GetPessoas)
router.post('/', controllerPessoa.CreatePessoa)
router.put('/:id', controllerPessoa.UpdatePessoa)
router.delete('/:id', controllerPessoa.DeletePessoa)

module.exports = router
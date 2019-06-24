const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const servidor = express()
const controller = require('./ProdutosController')
const PORT = 3000

servidor.use(cors())
servidor.use(bodyParser.json())

servidor.get('/', (request, response) => {
  response.send('Olá, mundo!')
})

servidor.get('/produtos', async (request, response) => {
  controller.getAll()
    .then(produtos => response.send(produtos))
})

servidor.get('/produtos/:produtoId', (request, response) => {
  const produtoId = request.params.produtoId
  controller.getById(produtoId)
    .then(produto => {
      if(!produto){ // pokemon === null || pokemon === undefined
        response.sendStatus(404) // pokemon nao encontrada
      } else {
        response.send(produto) // Status default é 200
      }
    })
    .catch(error => {
      if(error.name === "CastError"){
        response.sendStatus(400) // bad request - tem algum parametro errado
      } else {
        response.sendStatus(500) // deu ruim, e nao sabemos oq foi
      }
    })
})

servidor.post('/produtos', (request, response) => {
  controller.add(request.body)
    .then(produto => {
      const _id = produto._id
      response.send(_id)
    })
    .catch(error => {
      if(error.name === "ValidationError"){
        response.sendStatus(400) // bad request
      } else {
        response.sendStatus(500)
      }
    })
})


servidor.listen(PORT)
console.info(` Servidor rodando na porta ${PORT}`)







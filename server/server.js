const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const servidor = express()
const controller = require('./SalasController')
const PORT = 3000

servidor.use(cors())
servidor.use(bodyParser.json())

servidor.get('/', (request, response) => {
  response.send('Olá, mundo!')
})

servidor.post('/salas', (request, response) => {
  console.log("CHEGUEI");
  
  controller.add(request.body)
    .then(sala => {
      const _id = sala._id
      response.send(_id) 
    })
    .catch(error => {
      if(error.name === "ValidationError"){
        console.log(error);
        // response.sendStatus(400) // bad request
      } else {
        response.sendStatus(500)
      }
    })
})

servidor.post('/perguntas', (request, response) => {
  console.log("Perguntas Feitas");
  
  controller.addPerguntas(request.body)
    .then(sala => {
      const _id = sala._id
      response.send(_id) 
    })
    .catch(error => {
      if(error.name === "ValidationError"){
        console.log(error);
        // response.sendStatus(400) // bad request
      } else {
        response.sendStatus(500)
      }
    })
})
servidor.get('/perguntas', async (request, response) => {
  controller.get()
    .then(perguntas => response.send(perguntas))
})

servidor.listen(PORT)
console.info(` Servidor rodando na porta ${PORT}`)
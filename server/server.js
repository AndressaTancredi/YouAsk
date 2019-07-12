const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const servidor = express()
const controller = require('./SalasController')
const PORT = 3000

//Midleware
const logger = (request, response, next) => {
  console.log(`${new Date().toISOString()} Request type: ${request.method} to ${request.originalUrl}`)

  response.on('finish', () => {
    console.log(`${response.statusCode} ${response.statusMessage};`)
  })
  next()
}

servidor.use(cors())
servidor.use(bodyParser.json())
servidor.use(logger)

servidor.get('/', (request, response) => {
  response.send('Olá, mundo!')
})

//GET de Salas - funcionando!
servidor.get('/salas', async (request, response) => {
  controller.getSalas()
    .then(sala => response.send(sala))
})

//GET por Nome - 
servidor.get('/salas/:nomeDoEvento',(request, response) => {
  controller.getByName(request.params.nomeDoEvento)
    .then(sala => response.send(sala))
        .catch(error => {
      if(error.name === "CastError"){
        response.sendStatus(400)
      } else {
        response.sendStatus(500)
      }
    })
})

//POST de Salas - funcionando!
servidor.post('/salas', (request, response) => {
  console.log("Sala Criada!");
  controller.addSalas(request.body)
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

//POST de Perguntas - funcionando!
servidor.post('/perguntas', (request, response) => {
  controller.addPerguntas(request.body)
    .then(pergunta => {
    const _id = pergunta._id
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
    console.log("Pergunta Feita!");
})

//GET de Perguntas - Funcionando!
servidor.get('/perguntas', async (request, response) => {
  controller.getPerguntas()
    .then(perguntas => response.send(perguntas))
})

//DELETE de Perguntas - Funcionando!
servidor.delete('/perguntas/:id', (request, response) => {
  console.log("Pergunta Deletada!");
  controller.remove(request.params.id)
    .then(pergunta=> {
      if(pergunta === null || pergunta === undefined){ // if(!pergunta) 
        response.sendStatus(404) // not found
      } else {
        response.sendStatus(204)
      }
    })
    .catch(error => {
      if(error.name === "CastError"){
        response.sendStatus(400) //bad request
      } else {
        response.sendStatus(500)
      } 
    })
})

servidor.listen(PORT)
console.info(` Servidor rodando na porta ${PORT}`)
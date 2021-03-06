const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const servidor = express()
const controller = require('./SalasController')
const path = require("path");
const PORT = 8080

servidor.disable('etag');

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

servidor.use(express.static(path.join(__dirname, 'frontend')));
servidor.use("/css", express.static(__dirname + '/css'));
servidor.use("/img", express.static(__dirname + '/img'));
servidor.use("/js", express.static(__dirname + '/js'));
servidor.use("/pag", express.static(__dirname + '/pag'));

servidor.get('/', (request, response) => {
  response.sendFile('index.html', { root: 'frontend' })
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

//DELETE de Perguntas - Funcionando no POSTMAN nas não no FRONT
servidor.delete('/perguntas/:id', (request, response) => {
  controller.remove(request.params.id)
    .then(perguntas=> {
      if(perguntas === null || perguntas === undefined){ // if(!pergunta) 
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

servidor.post('/salas/adicionarperguntas/:salaName', (request, response) => {
  console.log("entrou salas controller")

  const salaName = request.params.salaName
    controller.addPergunta(salaName, request.body)
    .then(sala => {
      const nomeDaSala = sala.nomeDoEvento
      response.send({ nomeDaSala })
    })
    .catch(error => {
      if(error.name === "ValidationError"){
        response.sendStatus(400)
      } else {
        console.log(error)
        response.sendStatus(500)
      }
    })
})
servidor.patch('/deletaperguntas/:sala_id/:pergunta_id', (request, response) => {
  const sala_id = request.params.sala_id
  const pergunta_id = request.params.pergunta_id
  controller.update(sala_id, pergunta_id)
    .then(treinador => {
      if(!treinador) { response.sendStatus(404) }
      else { response.send(treinador) }
    })
    .catch(error => {
      if(error.name === "MongoError" || error.name === "CastError"){
        response.sendStatus(400)
      } else {
        response.sendStatus(500)
      }
    })
})

servidor.listen(PORT)
console.info(` Servidor rodando na porta ${PORT}`)
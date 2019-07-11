
const { connect } = require('./SalasRepository')
const  { SalaModel, PerguntasModel }  = require('./SalasSchema')
//Andressa

connect() // para conectar no mongoDB

  const add = (sala) => {
    const novaSala = new SalaModel(sala)
    return novaSala.save()
  }
  const addPerguntas = (perguntas) => {
    const novaPergunta = new PerguntasModel(perguntas)
    return novaPergunta.save()
  }

  const get = () => {
    return SalaModel.find((error, perguntas) => {
      return perguntas
    })
  }

  // const remove = (id) => {
  //   return PerguntasModel.findByIdAndDelete(id)
  // }
  
  // const update = (id, pergunta) => {
  //   return PerguntasModel.findByIdAndUpdate(
  //     id,
  //     { $set: pergunta },
  //     { new: true },
  //   )
  // }
  
  module.exports = {
    add,
    addPerguntas,
    get
  }
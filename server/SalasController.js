
const { connect } = require('./SalasRepository')
const  { SalaModel, PerguntasModel }  = require('./SalasSchema')

//Preciso fazer destructuring  aqui?

connect() // para conectar no mongoDB

  const addSalas = (sala) => {
    const novaSala = new SalaModel(sala)
    return novaSala.save()
  }
  const getSalas = () => {
    return SalaModel.find((error, sala) => {
      return sala
    })
  }

  const addPerguntas = (perguntas) => {
    const novaPergunta = new PerguntasModel(perguntas)
    return novaPergunta.save()
  }

  const getPerguntas = () => {
    return PerguntasModel.find((error, perguntas) => {
      return perguntas
    })
  }

  const remove = (id) => {
    return PerguntasModel.findByIdAndDelete(id)
  }
  
  // const update = (id, pergunta) => {
  //   return PerguntasModel.findByIdAndUpdate(
  //     id,
  //     { $set: pergunta },
  //     { new: true },
  //   )
  // }
  
  module.exports = {
    addSalas,
    addPerguntas,
    getPerguntas,
    getSalas,
    remove,
  }
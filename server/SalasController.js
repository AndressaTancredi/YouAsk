
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

  const getByName = (nomeDoEvento) => {
    // TODO: essa solucao nao e robusta, melhorar procurando pelo (paraneaue)
    return SalaModel.findOne({nomeEvento: nomeDoEvento })
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

  const update = (sala_id, pergunta_id) => {
    return SalaModel.findByIdAndUpdate(
      { _id: sala_id },
      { $pull: { 'sala.perguntas': { _id: pergunta_id } } }
    )};

  const addPergunta = async (salaName, pergunta) => {
    const sala = await getByName(salaName)
    const novoPergunta = new PerguntasModel(pergunta)
  
    sala.perguntas.push(novoPergunta)
    return sala.save()
  }
/*   const addPergunta = async (salaId, pergunta) => {
    const sala = await getById(salaId)
    const novoPergunta = new PerguntasModel(pergunta)
  
    sala.perguntas.push(novoPergunta)
    return sala.save()
  }
 */
  const getById = (salaId) => {

    return SalaModel.findById(salaId)
  }

  module.exports = {
    addSalas,
    addPerguntas,
    getPerguntas,
    getSalas,
    getByName,
    update,
    addPergunta,
    getById
  }
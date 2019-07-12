const mongoose = require("mongoose");
// cada schema equivale collection
const Schema = mongoose.Schema;

const PerguntaSchema = new Schema({  
  nome: { type: String },
  perguntas: { type: String},
});

const SalaSchema = new Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
  nome: { type: String, required: true },
  nomeEvento: { type: String, required: true },
  email: { type: String, required: true },
  senha: { type: String, required: true },
  perguntas: [PerguntaSchema]
});

const SalaModel = mongoose.model("salas", SalaSchema);
const PerguntasModel = mongoose.model("perguntas", PerguntaSchema);

module.exports = {SalaModel, PerguntasModel }
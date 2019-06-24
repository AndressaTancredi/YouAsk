const mongoose = require("mongoose");
// cada schema equivale collection
const Schema = mongoose.Schema;
const ProdutosSchema = new Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
  tipo: { type: String, required: true },
  marca: { type: String, required: true },
  valor: { type: Number, required: true },
  dataCompra: { type: Number, required: true },
  dataVencimento: { type: Number, required: true },
  nota: { type: String },
})

const produtosModel = mongoose.model("produtos", ProdutosSchema);

module.exports = produtosModel;
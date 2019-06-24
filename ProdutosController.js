const { connect } = require('./ProdutosRepository')
const produtosModel = require('./ProdutosSchema')

connect() // para conectar no mongoDB

const calcularVencimento = dates => {
    const diff = date.dataInicio.valueOf() - dataFim.valueOf();
  }
  
  const getAll = async () => {
    return produtosModel.find((error, pokemons) => {
      return produtos
    })
  }
  
  const getById = (id) => {
    return produtosModel.findById(id)
  }
  
  const add = (produto) => {
    const novoProduto = new produtosModel(produto)
    return novoProduto.save()
  }
  
  const remove = (id) => {
    return produtosModel.findByIdAndDelete(id)
  }
  
  const update = (id, produto) => {
    return produtosModel.findByIdAndUpdate(
      id,
      { $set: produto },
      { new: true },
    )
  }
  
  module.exports = {
    getAll,
    getById,
    add,
    remove,
    update
  }
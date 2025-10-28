const mongoose = require('monngoose')

const pessoaSchema = new mongoose.Schema(
    {
      nome: {type: String, required: true},
      idade: {type: Number, required: true}
    },
    {timestamps: true
    }
  )
  
  module.exports = mongoose.model("Pessoa", pessoaSchema)
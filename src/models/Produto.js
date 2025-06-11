import mongoose from 'mongoose';

const produtoSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true
  },
  preco: {
    type: Number,
    required: true
  },
  imagem: {
    type: String,
    required: true
  },
  vendedorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  lojaId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Loja',
    required: true
  }
});

const Produto = mongoose.model('Produto', produtoSchema);

export default Produto;

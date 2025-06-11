import mongoose from 'mongoose';

const lojaSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  categoria: {
    type: String,
    required: true,
  },
  vendedorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  imagem: {
    type: String,
    required: true,
  },
  avaliacao: {
    type: Number,
    default: 0,
  },
});

const Loja = mongoose.model('Loja', lojaSchema);

export default Loja;

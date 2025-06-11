
import Produto from '../models/Produto.js';

export const criarProduto = async ({ nome, preco, imagem, vendedorId, lojaId }) => {
  const produto = new Produto({ nome, preco, imagem, vendedorId, lojaId });
  await produto.save();
  return { data: produto };


export const listarProdutos = async () => {
  const produtos = await Produto.find().populate('vendedorId').populate('lojaId');
  return { data: produtos };
};

export const atualizarParcialProduto = async (id, atualizacoes, userId) => {
  const produto = await Produto.findById(id);

  if (!produto) {
    return { error: 'Produto não encontrado' };
  }

  if (produto.vendedorId.toString() !== userId) {
    return { error: 'Acesso negado: você não é o dono do produto' };
  }

  Object.assign(produto, atualizacoes);
  await produto.save();
  return { data: produto };
};

export const substituirProduto = async (id, novoProduto, userId) => {
  const produto = await Produto.findById(id);

  if (!produto) {
    return { error: 'Produto não encontrado' };
  }

  if (produto.vendedorId.toString() !== userId) {
    return { error: 'Acesso negado: você não é o dono do produto' };
  }

  const { nome, preco, imagem, lojaId } = novoProduto;

  produto.nome = nome;
  produto.preco = preco;
  produto.imagem = imagem;
  produto.lojaId = lojaId;

  await produto.save();
  return { data: produto };
};

export const deletarProduto = async (id, userId) => {
  const produto = await Produto.findById(id);

  if (!produto) {
    return { error: 'Produto não encontrado' };
  }

  if (produto.vendedorId.toString() !== userId) {
    return { error: 'Acesso negado: você não é o dono do produto' };
  }

  await Produto.findByIdAndDelete(id);
  return { data: true };
};

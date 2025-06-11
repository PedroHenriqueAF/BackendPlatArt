import Loja from '../models/Loja.js';

export const criarLoja = async (dados) => {
  const novaLoja = new Loja(dados);
  await novaLoja.save();
  return novaLoja;
};

export const listarLojas = async () => {
  return Loja.find();
};

export const buscarLojaPorId = async (id) => {
  return Loja.findById(id);
};

export const substituirLoja = async (id, dados) => {
  return Loja.findByIdAndUpdate(id, dados, { new: true, runValidators: true });
};

export const atualizarLoja = async (id, dadosParciais) => {
  return Loja.findByIdAndUpdate(id, dadosParciais, { new: true, runValidators: true });
};

export const deletarLoja = async (id) => {
  return Loja.findByIdAndDelete(id);
};

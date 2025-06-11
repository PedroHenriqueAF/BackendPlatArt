import Produto from '../models/Produto.js'; // ajuste o caminho conforme sua estrutura

export const criarProduto = async ({ nome, preco, imagem, vendedorId }) => {
  try {
    const novoProduto = new Produto({ nome, preco, imagem, vendedorId });
    const produtoSalvo = await novoProduto.save();
    return { success: true, data: produtoSalvo };
  } catch (error) {
    console.error('Erro em criarProduto:', error);
    throw error;
  }
};

export const listarProdutos = async () => {
  try {
    const produtos = await Produto.find();
    return { success: true, data: produtos };
  } catch (error) {
    console.error('Erro em listarProdutos:', error);
    throw error;
  }
};

export const atualizarParcialProduto = async (id, vendedorId, atualizacoes) => {
  try {
    const produto = await Produto.findById(id);
    if (!produto) {
      return { success: false, message: 'Produto não encontrado' };
    }
    if (produto.vendedorId.toString() !== vendedorId.toString()) {
      return { success: false, message: 'Acesso negado: você não é o dono do produto' };
    }

    Object.assign(produto, atualizacoes);
    const produtoAtualizado = await produto.save();
    return { success: true, data: produtoAtualizado };
  } catch (error) {
    console.error('Erro em atualizarParcialProduto:', error);
    throw error;
  }
};

export const substituirProduto = async (id, vendedorId, dadosNovos) => {
  try {
    const produto = await Produto.findById(id);
    if (!produto) {
      return { success: false, message: 'Produto não encontrado' };
    }
    if (produto.vendedorId.toString() !== vendedorId.toString()) {
      return { success: false, message: 'Acesso negado: você não é o dono do produto' };
    }

    produto.nome = dadosNovos.nome;
    produto.preco = dadosNovos.preco;
    produto.imagem = dadosNovos.imagem;

    const produtoAtualizado = await produto.save();
    return { success: true, data: produtoAtualizado };
  } catch (error) {
    console.error('Erro em substituirProduto:', error);
    throw error;
  }
};

export const deletarProduto = async (id, vendedorId) => {
  try {
    const produto = await Produto.findById(id);
    if (!produto) {
      return { success: false, message: 'Produto não encontrado' };
    }
    if (produto.vendedorId.toString() !== vendedorId.toString()) {
      return { success: false, message: 'Acesso negado: você não é o dono do produto' };
    }

    await Produto.findByIdAndDelete(id);
    return { success: true };
  } catch (error) {
    console.error('Erro em deletarProduto:', error);
    throw error;
  }
};

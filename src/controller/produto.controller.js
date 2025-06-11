import * as produtoService from '../services/produto.service.js';

const criarProduto = async (req, res) => {
  try {
    const { nome, preco, imagem, lojaId } = req.body;

    if (!nome || !preco || !imagem || !lojaId) {
      return res.status(400).json({ message: 'Campos nome, preco, imagem e lojaId são obrigatórios' });
    }

    const vendedorId = req.userId;

    const result = await produtoService.criarProduto({
      nome,
      preco,
      imagem,
      vendedorId,
      lojaId
    });

    return res.status(201).json({
      message: 'Produto criado com sucesso',
      produto: result.data
    });
  } catch (error) {
    console.error('Erro ao criar produto:', error);
    return res.status(500).json({ message: 'Erro ao criar produto' });
  }
};

const listarProdutos = async (req, res) => {
  try {
    const result = await produtoService.listarProdutos();
    return res.status(200).json({ produtos: result.data });
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao listar produtos' });
  }
};

const atualizarParcialProduto = async (req, res) => {
  try {
    const { id } = req.params;
    const atualizacoes = req.body;

    const result = await produtoService.atualizarParcialProduto(id, atualizacoes, req.userId);

    if (result.error) {
      return res.status(403).json({ message: result.error });
    }

    return res.status(200).json({ produto: result.data });
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao atualizar produto' });
  }
};

const substituirProduto = async (req, res) => {
  try {
    const { id } = req.params;
    const novoProduto = req.body;

    const result = await produtoService.substituirProduto(id, novoProduto, req.userId);

    if (result.error) {
      return res.status(403).json({ message: result.error });
    }

    return res.status(200).json({ produto: result.data });
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao substituir produto' });
  }
};

const deletarProduto = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await produtoService.deletarProduto(id, req.userId);

    if (result.error) {
      return res.status(403).json({ message: result.error });
    }

    return res.status(200).json({ message: 'Produto deletado com sucesso' });
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao deletar produto' });
  }
};

export default {
  criarProduto,
  listarProdutos,
  atualizarParcialProduto,
  substituirProduto,
  deletarProduto
};

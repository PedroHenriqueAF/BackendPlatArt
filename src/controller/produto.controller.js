import * as produtoService from '../services/produto.service.js';

const criarProduto = async (req, res) => {
  try {
    const { nome, preco, imagem } = req.body;

    if (!nome || !preco || !imagem) {
      return res.status(400).json({ message: 'Campos nome, preco e imagem são obrigatórios' });
    }

    const vendedorId = req.userId; // extraído do token via middleware

    const result = await produtoService.criarProduto({
      nome,
      preco,
      imagem,
      vendedorId
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
    console.error('Erro ao listar produtos:', error);
    return res.status(500).json({ message: 'Erro ao listar produtos' });
  }
};

const atualizarParcialProduto = async (req, res) => {
  try {
    const produto = await produtoService.atualizarParcialProduto(req.params.id, req.userId, req.body);

    if (!produto.success) {
      return res.status(404).json({ message: produto.message });
    }

    return res.status(200).json({ produto: produto.data });
  } catch (error) {
    console.error('Erro ao atualizar parcialmente produto:', error);
    return res.status(500).json({ message: 'Erro ao atualizar parcialmente o produto' });
  }
};

const substituirProduto = async (req, res) => {
  try {
    const { nome, preco, imagem } = req.body;

    if (!nome || !preco || !imagem) {
      return res.status(400).json({ message: 'nome, preco e imagem são obrigatórios' });
    }

    const result = await produtoService.substituirProduto(req.params.id, req.userId, {
      nome,
      preco,
      imagem
    });

    if (!result.success) {
      return res.status(404).json({ message: result.message });
    }

    return res.status(200).json({ produto: result.data });
  } catch (error) {
    console.error('Erro ao substituir produto:', error);
    return res.status(500).json({ message: 'Erro ao substituir o produto' });
  }
};

const deletarProduto = async (req, res) => {
  try {
    const result = await produtoService.deletarProduto(req.params.id, req.userId);

    if (!result.success) {
      return res.status(404).json({ message: result.message });
    }

    return res.status(200).json({ message: 'Produto deletado com sucesso' });
  } catch (error) {
    console.error('Erro ao deletar produto:', error);
    return res.status(500).json({ message: 'Erro ao deletar o produto' });
  }
};

export default {
  criarProduto,
  listarProdutos,
  atualizarParcialProduto,
  substituirProduto,
  deletarProduto
};

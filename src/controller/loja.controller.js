import * as lojaService from '../services/loja.service.js';

const criarLoja = async (req, res) => {
  try {
    
    const { nome, categoria, imagem } = req.body;
    if (!nome || !categoria || !imagem) {
      return res.status(400).json({ message: 'Campos obrigatórios: nome, categoria e imagem.' });
    }
    const vendedorId = req.userId;
    const loja = await lojaService.criarLoja({ nome, categoria, imagem, vendedorId });
    return res.status(201).json({ message: 'Loja criada', loja });
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao criar loja.' });
  }
};

const listarLojas = async (req, res) => {
  try {
    const lojas = await lojaService.listarLojas();
    return res.status(200).json({ lojas });
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao listar lojas.' });
  }
};

const buscarLojaPorId = async (req, res) => {
  try {
    const loja = await lojaService.buscarLojaPorId(req.params.id);
    if (!loja) return res.status(404).json({ message: 'Loja não encontrada.' });
    return res.status(200).json({ loja });
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao buscar loja.' });
  }
};

const substituirLoja = async (req, res) => {
  try {
    const { id } = req.params;
    const vendedorId = req.userId;

    const lojaAtual = await lojaService.buscarLojaPorId(id);
    if (!lojaAtual) return res.status(404).json({ message: 'Loja não encontrada.' });
    if (lojaAtual.vendedorId.toString() !== vendedorId) {
      return res.status(403).json({ message: 'Acesso negado: você não é o dono da loja.' });
    }

    const { nome, categoria, imagem } = req.body;
    if (!nome || !categoria || !imagem) {
      return res.status(400).json({ message: 'Campos obrigatórios: nome, categoria e imagem.' });
    }

    const lojaAtualizada = await lojaService.substituirLoja(id, { nome, categoria, imagem });
    return res.status(200).json({ message: 'Loja atualizada com sucesso.', loja: lojaAtualizada });
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao atualizar loja.' });
  }
};

const atualizarLoja = async (req, res) => {
  try {
    const { id } = req.params;
    const vendedorId = req.userId;

    const lojaAtual = await lojaService.buscarLojaPorId(id);
    if (!lojaAtual) return res.status(404).json({ message: 'Loja não encontrada.' });
    if (lojaAtual.vendedorId.toString() !== vendedorId) {
      return res.status(403).json({ message: 'Acesso negado: você não é o dono da loja.' });
    }

    const lojaAtualizada = await lojaService.atualizarLoja(id, req.body);
    return res.status(200).json({ message: 'Loja atualizada com sucesso.', loja: lojaAtualizada });
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao atualizar loja.' });
  }
};

const deletarLoja = async (req, res) => {
  try {
    const { id } = req.params;
    const vendedorId = req.userId;

    const loja = await lojaService.buscarLojaPorId(id);
    if (!loja) return res.status(404).json({ message: 'Loja não encontrada.' });
    if (loja.vendedorId.toString() !== vendedorId) {
      return res.status(403).json({ message: 'Acesso negado: você não é o dono da loja.' });
    }

    await lojaService.deletarLoja(id);
    return res.status(200).json({ message: 'Loja deletada com sucesso.' });
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao deletar loja.' });
  }
};

export default {
  criarLoja,
  listarLojas,
  buscarLojaPorId,
  substituirLoja,
  atualizarLoja,
  deletarLoja
};

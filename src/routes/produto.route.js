import verifyToken from '../middleware/jwt.token.middleware.js';
import checkVendedor from '../middleware/checkVendedor.js';
import produtoController from '../controller/produto.controller.js';
import express from 'express';

const router = express.Router();

router.post('/', verifyToken, checkVendedor, produtoController.criarProduto); // apenas vendedores
router.get('/', produtoController.listarProdutos); // público
router.patch('/:id', verifyToken, produtoController.atualizarParcialProduto);
router.put('/:id', verifyToken, produtoController.substituirProduto);
router.delete('/:id', verifyToken, produtoController.deletarProduto);

export default router;

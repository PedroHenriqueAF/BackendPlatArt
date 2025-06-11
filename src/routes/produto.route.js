import express from 'express';
import produtoController from '../controller/produto.controller.js';
import verifyToken from '../middleware/jwt.token.middleware.js';

const router = express.Router();

router.post('/', verifyToken, produtoController.criarProduto); // protegido
router.get('/', produtoController.listarProdutos); // público
router.patch('/:id', verifyToken, produtoController.atualizarParcialProduto);
router.put('/:id', verifyToken, produtoController.substituirProduto);
router.delete('/:id', verifyToken, produtoController.deletarProduto);




export default router;

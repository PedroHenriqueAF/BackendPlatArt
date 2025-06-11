import express from 'express';
import lojaController from '../controller/loja.controller.js';
import verifyToken from '../middleware/jwt.token.middleware.js';
import checkVendedor from '../middleware/checkVendedor.js';

const router = express.Router();

router.post('/', verifyToken, checkVendedor, lojaController.criarLoja); // só vendedor
router.get('/', lojaController.listarLojas); // público
router.get('/:id', lojaController.buscarLojaPorId); // público

router.put('/:id', verifyToken, lojaController.substituirLoja); // só vendedor dono
router.patch('/:id', verifyToken, lojaController.atualizarLoja); // só vendedor dono
router.delete('/:id', verifyToken, lojaController.deletarLoja); // só vendedor dono

export default router;


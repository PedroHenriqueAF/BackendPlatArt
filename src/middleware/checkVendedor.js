// src/middleware/checkVendedor.js
import User from '../models/User.js';

const checkVendedor = async (req, res, next) => {
  try {
    const user = await User.findById(req.userId);

    if (!user) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }

    if (user.tipo !== 'vendedor') {
      return res.status(403).json({ message: 'Apenas vendedores podem realizar essa ação' });
    }

    next();
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao verificar tipo de usuário' });
  }
};

export default checkVendedor;

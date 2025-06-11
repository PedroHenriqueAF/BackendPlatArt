import * as userService from '../services/user.service.js';

const register = async (req, res) => {
  try {
    const { nome, tipo, password } = req.body;
    if (!nome || !tipo || !password) {
      return res.status(400).json({ message: 'Campos nome, tipo e senha são obrigatórios' });
    }

    const result = await userService.registerUser({ nome, tipo, password });

    if (!result.success) {
      return res.status(400).json({ message: result.message });
    }

    return res.status(201).json({
      message: 'Usuário registrado com sucesso',
      user: result.data
    });
  } catch (error) {
    console.error('Erro no controller register:', error);
    return res.status(500).json({ message: 'Erro ao registrar usuário' });
  }
};

const login = async (req, res) => {
  try {
    const { nome, password } = req.body;
    if (!nome || !password) {
      return res.status(400).json({ message: 'Nome e senha são obrigatórios' });
    }

    const result = await userService.loginUser({ nome, password });

    if (!result.success) {
      return res.status(400).json({ message: result.message });
    }

    return res.status(200).json({
      message: 'Login realizado com sucesso',
      token: result.data.token,
      user: result.data.user
    });
  } catch (error) {
    console.error('Erro no controller login:', error);
    return res.status(500).json({ message: 'Erro ao fazer login' });
  }
};

const getProfile = async (req, res) => {
  try {
    const result = await userService.getUserById(req.userId);
    if (!result.success) {
      return res.status(404).json({ message: result.message });
    }

    return res.status(200).json({ user: result.data });
  } catch (error) {
    console.error('Erro no controller getProfile:', error);
    return res.status(500).json({ message: 'Erro ao obter perfil do usuário' });
  }
};

export default { register, login, getProfile };

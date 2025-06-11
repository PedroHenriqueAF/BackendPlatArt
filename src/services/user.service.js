import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

// exemplo de controle de ID incremental (substitua por lógica real em produção)
let nextId = 1;

export const registerUser = async (userData) => {
  try {
    const existing = await User.findOne({ nome: userData.nome });
    if (existing) {
      return { success: false, message: 'Nome já cadastrado' };
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(userData.password, salt);

    const user = new User({
      id: nextId++,
      nome: userData.nome,
      tipo: userData.tipo,
      password: hashedPassword
    });

    const savedUser = await user.save();

    return {
      success: true,
      data: {
        id: savedUser.id,
        nome: savedUser.nome,
        tipo: savedUser.tipo
      }
    };
  } catch (error) {
    console.error('Erro em registerUser:', error);
    throw error;
  }
};

export const loginUser = async (credentials) => {
  try {
    const user = await User.findOne({ nome: credentials.nome }).select('+password');
    if (!user) {
      return { success: false, message: 'Usuário não encontrado' };
    }

    const isMatch = await bcrypt.compare(credentials.password, user.password);
    if (!isMatch) {
      return { success: false, message: 'Senha inválida' };
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

    return {
      success: true,
      data: {
        token,
        user: {
          id: user.id,
          nome: user.nome,
          tipo: user.tipo
        }
      }
    };
  } catch (error) {
    console.error('Erro em loginUser:', error);
    throw error;
  }
};

export const getUserById = async (mongoId) => {
  try {
    const user = await User.findById(mongoId).select('-password');
    if (!user) {
      return { success: false, message: 'Usuário não encontrado' };
    }

    return { success: true, data: user };
  } catch (error) {
    console.error('Erro em getUserById:', error);
    throw error;
  }
};

import User from "../models/User.js";

// Serviço de registro
export const registerUser = async ({ id, nome, tipo }) => {
    const existingUser = await User.findOne({ id });
    if (existingUser) {
        throw new Error("ID já cadastrado");
    }

    const newUser = new User({
        id,
        nome,
        tipo
    });

    return await newUser.save();
};

// Serviço de autenticação (exemplo simples por id e nome)
export const authenticateUser = async ({ id, nome }) => {
    const user = await User.findOne({ id, nome });
    if (!user) {
        throw new Error("Usuário não encontrado ou credenciais inválidas");
    }
    return user;
};

// Buscar usuário por ID
export const getUserById = async (id) => {
    return await User.findOne({ id });
};

// Buscar usuário por nome
export const getUserByNome = async (nome) => {
    return await User.findOne({ nome });
};
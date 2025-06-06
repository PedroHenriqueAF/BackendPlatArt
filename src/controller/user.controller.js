import * as userService from '../services/user.service.js';

// POST /register
const register = async (req, res) => {
    try {
        const { id, nome, tipo } = req.body;
        const user = await userService.registerUser({ id, nome, tipo });
        res.status(201).json(user);
        console.log("Usuário registrado com sucesso:", user)
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// POST /login
const login = async (req, res) => {
    try {
        const { id, nome } = req.body;
        const user = await userService.authenticateUser({ id, nome });
        res.status(200).json(user);
        console.log("Usuário autenticado com sucesso:") 
    } catch (error) {
        res.status(401).json({ error: error.message });
    }
};

// GET /:identifier
const getUserByIdentifier = async (req, res) => {
    try {
        const identifier = req.params.identifier;
        // Tenta buscar por id (número) ou nome (string)
        let user;
        if (!isNaN(identifier)) {
            user = await userService.getUserById(Number(identifier));
        } else {
            user = await userService.getUserByNome(identifier);
        }
        if (!user) {
            return res.status(404).json({ error: 'Usuário não encontrado' });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export default {
    register,
    login,
    getUserByIdentifier,
};
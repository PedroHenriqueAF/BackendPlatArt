import express from "express";
import dotenv from "dotenv";
import db from "./database/configdb.js";
import userRoute from "./routes/user.route.js";
import produtoRoute from "./routes/produto.route.js";
import lojaRoute from "./routes/loja.route.js";
import cors from 'cors';
import User from './models/User.js'; // Importado para mostrar no Banco do Mongo Express



dotenv.config();
db.connect();

const app = express();
const PORT = process.env.PORT || 3000;

const corsOptions = {
  origin: [
    'https://plataforma-artesanal-rg5o.vercel.app',
    'http://localhost:5173', // ajuste para a porta do seu frontend local
  ],
  methods: ['GET', 'PUT', 'POST', 'DELETE'],
  credentials: true,
  optionsSuccessStatus: 204
};

app.use(cors(corsOptions));

app.use(express.json());



app.use("/users", userRoute);
app.use("/produtos", produtoRoute);
app.use("/lojas", lojaRoute);

 // app.use('/tasks', taskRoutes); // rota protegida

app.get("/", (req, res) => {
    res.send({message: 'Backend is running!'});
});



app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}/`);
});

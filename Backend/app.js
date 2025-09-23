import cors from 'cors';
import express from 'express';  
import dotenv from 'dotenv';

const app = express();
dotenv.config();

import { enviarEmail } from './src/infra/email.js';
const port = process.env.PORT || 3000;

app.use('/bootstrap', express.static('./node_modules/bootstrap/dist'));
app.use(cors({
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Servidor ON");
});

app.post('/enviarEmail', (req, res) => {
    const emailDestino = "joao.reni@magvia.com.br";
    // const emailDestino = "pedroutumi@gmail.com";
    const { nome, telefone, mensagem, email } = req.body;
    const assunto = `Contato pelo site da Magvia - ${nome} - ${telefone} - ${email}`;

    const msg = `
    Nome: ${nome}
    Telefone: ${telefone}
    Email: ${email}
    Mensagem: ${mensagem}
    `

    enviarEmail(emailDestino, assunto, msg, email);
    res.json({message: "Email chegou"});
});

app.listen(port, () => {
    console.log("Servidor rodando na porta", port);
});
const cors = require('cors');
const express = require('express');
const app = express();
const dotenv = require('dotenv');

dotenv.config();

const enviarEmail = require('./config/email');
const port = process.env.PORT || 3000;

app.use('/bootstrap', express.static('./node_modules/bootstrap/dist'));
app.use(cors({
    // origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    // credentials: true
}));
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Servidor ON");
});

app.post('/enviarEmail', (req, res) => {
    // const emailDestino = "joao.reni@magvia.com.br";
    const emailDestino = "pedroutumi@gmail.com";
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
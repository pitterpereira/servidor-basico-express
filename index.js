// Requisita o módulo express, insalado via npm
const express = require('express');

const app = express();

// Middleware - seleciona a biblioteca para o parsing de conteúdo
app.use(express.urlencoded({extended: true}));

// Quando uma solicitação GET é feita para a home, responde enviando o arquivo index.html
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

// Inicia o servidor na porta 3000
app.listen(3000, () => {
    console.log('Servidor rodando!');
});


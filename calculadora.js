const express = require('express');

const app = express();

app.use(express.urlencoded({extended: true}));

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

// Post para a própria página
app.post("/", (req, res) => {
    var num = Number(req.body.num1) + Number(req.body.num2);
    res.send("O resultado é: " + num);
});

app.post("/subtracao", (req, res) => {
    var num = Number(req.body.num1) - Number(req.body.num2);
    res.send("O resultado é: " + num);
});

app.listen(3000, () => {
    console.log('Servidor rodando!');
});


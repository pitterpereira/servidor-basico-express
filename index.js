const express = require('express');

const app = express();

app.use(express.urlencoded({extended: true}));

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.listen(3000, () => {
    console.log('Servidor rodando!');
});


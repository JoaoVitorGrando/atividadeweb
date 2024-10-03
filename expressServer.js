const express = require('express');
const app = express();

const PORT = 3000;
app.get('/', (req, res) => {
    res.send('<h1>Bem-vindo à minha página!</h1>');
});

app.get('/api/data', (req, res) => {
    res.json({
        nome: 'Seu Nome',
        idade: 25,
        ocupacao: 'Desenvolvedor'
    });
});

app.listen(PORT, () => {
    console.log(`Servidor Express rodando em http://localhost:${PORT}`);
});

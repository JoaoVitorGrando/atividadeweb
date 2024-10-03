// server.js
const http = require('http');
const gerarNumeroAleatorio = require('./utils');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    if (req.url === '/') {
        res.end('Bem-vindo!');
    } else if (req.url === '/numero') {
        const numero = gerarNumeroAleatorio();
        res.end(`Número aleatório: ${numero}`);
    } else if (req.url.startsWith('/saudacao/')) {
        const nome = req.url.split('/')[2]; // Extrai o nome da URL
        res.end(`Olá, ${nome}!`);
    } else {
        res.writeHead(404);
        res.end('Página não encontrada');
    }
});

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});

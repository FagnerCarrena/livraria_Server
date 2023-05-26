const express = require('express');
const rotas = require('./roteador');

const app = express();

app.use(rotas)

const port = 8000

app.listen(port, ()=>{
    console.log(`Escutando a porta ${port}`)});

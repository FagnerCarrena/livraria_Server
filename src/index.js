const express = require('express');
const rotaLivro = require('./rotas/roteador');

const app = express();

app.use(express.json())


app.use( rotaLivro)
const port = 8000

app.listen(port, ()=>{
    console.log(`Escutando a porta ${port}`)});

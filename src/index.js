const express = require("express");
const rotaLivro = require('./rotas/roteador');
const rotaFavorito = require('./rotas/favoritos');

const cors = require("cors")
const app = express();

app.use(express.json())
app.use(cors({origin:"*"}))

app.use( rotaFavorito)

app.use(rotaLivro );


const port = 8000

app.listen(port, ()=>{
    console.log(`Escutando a porta ${port}`)});

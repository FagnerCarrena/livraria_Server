const express = require("express")
const { getFavorito, deletaFavorito, postFavorito }= require("../controladores/favorito")

const rotas = express()




rotas.get('/favoritos', getFavorito )

rotas.post('/favoritos/:id', postFavorito )

rotas.delete('/favoritos/:id', deletaFavorito )

module.exports = rotas;
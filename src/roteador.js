const express = require('express');

const rotas = express();

rotas.get('/', (req,res)=>{
 res.send("ola mundo")
})

module.exports = rotas;
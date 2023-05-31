const fs = require("fs")


function getFavorito(req,res) {

    try {
        const livros =  JSON.parse(fs.readFileSync("./src/favoritos.json"))
        res.send(livros)
        
    } catch (error) {
        res.status(500)
        res.send(error.message)
        
    }
       }

function deletaFavorito(req, res){
    try {
        const id = req.params.id;
    
    
        if(id && Number(id)){
            let livrosAtuais = JSON.parse(fs.readFileSync("./src/favoritos.json"))
        
            const exclusao = livrosAtuais.filter((livro=> livro.id != id))
        
            fs.writeFileSync("./src/favoritos.json", JSON.stringify(exclusao))
        
            res.send("Favorito excluido com sucesso")
        }else{
            res.status(422).send("Id inválido")
    
        }
    
    
    } catch (error) {
        res.status(500).send(error.message)
    
    }


}

function postFavorito(req, res){
  
    try {
       
        const id = req.params.id;
            const livrosFavorito =  JSON.parse(fs.readFileSync("./src/favoritos.json"))
            const livros = JSON.parse(fs.readFileSync("./src/livros.json"))
           

            const livroInserido = livros.find(livro=> livro.id === id)
            
            const novaListaFavorito = [...livrosFavorito, livroInserido]
        
            fs.writeFileSync("./src/favoritos.json", JSON.stringify(novaListaFavorito))
            res.status(201).send("Favorito inserido com sucesso")


        
        
       
    
    
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
    
    } 

module.exports = {
    getFavorito,
    deletaFavorito,
    postFavorito
}
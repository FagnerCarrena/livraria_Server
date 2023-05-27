//const { getTodoslivros, getLivroPorId } = require("../servicos/livro")
const fs = require("fs")


function getLivros(req,res) {

    try {
        const livros =  JSON.parse(fs.readFileSync("./src/livros.json"))
        res.send(livros)
        
    } catch (error) {
        res.status(500)
        res.send(error.message)
        
    }
       }


function getLivro(req,res) {
    try {
        const id = req.params.id
        const livros = JSON.parse(fs.readFileSync("./src/livros.json"))
        const livroFiltrado = livros.filter(livro=> livro.id === id)[0]
        
         

            const livro = livroFiltrado
            res.send(livro)
            
        } catch (error) {
            res.send(error)
        }
           }    
function postLivros(req, res){
try {
    const livroNovo = req.body;
   

    const livros = JSON.parse(fs.readFileSync("./src/livros.json"))
    const novaListaLivro = [...livros, livroNovo]

    fs.writeFileSync("./src/livros.json", JSON.stringify(novaListaLivro))
    res.status(201).send("Livro inserido com sucesso")

} catch (error) {
    res.status(500)
    res.send(error.message)
}

} 

function alteracao(req, res){
try {
const id = req.params.id;
const body = req.body;

let livrosAtuais = JSON.parse(fs.readFileSync("./src/livros.json"))
const indiceModificado = livrosAtuais.findIndex(livro=> livro.id === id)

const conteudoMudado = {...livrosAtuais[indiceModificado], ...body}

livrosAtuais[indiceModificado] = conteudoMudado;

fs.writeFileSync("./src/livros.json", JSON.stringify(livrosAtuais))

res.send("item modificado com sucesso")

} catch (error) {
    res.status(500).send(error.message)
}
}

function deletar(req, res){
try {
    const id = req.params.id;

    let livrosAtuais = JSON.parse(fs.readFileSync("./src/livros.json"))

    const exclusao = livrosAtuais.filter((livro=> livro.id != id))

    fs.writeFileSync("./src/livros.json", JSON.stringify(exclusao))

    res.send("item excluido com sucesso")

} catch (error) {
    res.status(500).send(error.message)

}

}






module.exports = {
    getLivros,
    getLivro,
    postLivros,
    alteracao,
    deletar
}

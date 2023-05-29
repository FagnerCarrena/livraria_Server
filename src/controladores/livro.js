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
        const id = req.params.id;


    if(id && Number(id)){

    const livros = JSON.parse(fs.readFileSync("./src/livros.json"))
    const livroFiltrado = livros.filter(livro=> livro.id === id)[0]
    const livro = livroFiltrado
    res.send(livro)
}else{
    res.status(422).send("Id inválido")
}
 } catch (error) {
            res.send(error.message)
        }
           }  

function postLivros(req, res){
try {
    const livroNovo = req.body;

    if(livroNovo.nome){

        const livros = JSON.parse(fs.readFileSync("./src/livros.json"))
        const novaListaLivro = [...livros, livroNovo]
    
        fs.writeFileSync("./src/livros.json", JSON.stringify(novaListaLivro))
        res.status(201).send("Livro inserido com sucesso")
    }else{
        res.status(422).send("O Campo nome é obrigatório")
    }
   


} catch (error) {
    res.status(500)
    res.send(error.message)
}

} 

function alteracao(req, res){
try {
const id = req.params.id;
const body = req.body;

if(id && Number(id)){
    let livrosAtuais = JSON.parse(fs.readFileSync("./src/livros.json"))
    const indiceModificado = livrosAtuais.findIndex(livro=> livro.id === id)
    
    const conteudoMudado = {...livrosAtuais[indiceModificado], ...body}
    
    livrosAtuais[indiceModificado] = conteudoMudado;
    
    fs.writeFileSync("./src/livros.json", JSON.stringify(livrosAtuais))
    
    res.send("item modificado com sucesso")
}else{
    res.status(422).send("Id inválido")
}


} catch (error) {
    res.status(500).send(error.message)
}
}

function deletar(req, res){
try {
    const id = req.params.id;


    if(id && Number(id)){
        let livrosAtuais = JSON.parse(fs.readFileSync("./src/livros.json"))
    
        const exclusao = livrosAtuais.filter((livro=> livro.id != id))
    
        fs.writeFileSync("./src/livros.json", JSON.stringify(exclusao))
    
        res.send("item excluido com sucesso")
    }else{
        res.status(422).send("Id inválido")

    }


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

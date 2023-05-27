const { Router } = require("express")

const { getLivros, getLivro, postLivros, alteracao, deletar} = require("../controladores/livro");


const router = Router()
router.get('/livros', getLivros )
router.get('/livros/:id', getLivro )
router.post('/livros', postLivros )
router.patch('/livros/:id', alteracao )
router.delete('/livros/:id', deletar )



module.exports = router;
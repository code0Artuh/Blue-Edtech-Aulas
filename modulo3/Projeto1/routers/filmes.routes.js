const express = require("express"); //import do express
const router = express.Router(); //define app como express
const Filmes = require("../model/filmes"); // import do modelo pessoa

router.get('/', (req,res) => {
    res.status(200).json({message:"rota pessoas ok"});
});

router.get('/listar', async (req,res) => {
    await Filmes.find({}).then((filmes) => { //pega todo mundo do banco
        console.log(filmes);
        res.status(200).json(filmes);
    }).catch((err) => {
        res.status(204).json({message:"Nada foi encontrado"});
        console.error(err);
    });
});

router.get('/byid/:id', async (req,res) => {
    const id = req.params.id//recebendo nome por parametro
    await Filmes.findOne({ _id:id }).then((filmes) => { //findOne retorna o primeiro que der match com o item passado
        console.log(filmes);
        if(filmes == null){ //validando se retorna null 
            res.status(404).json({message: "nao foi encontrado"});
        }else{
            res.status(200).json(filmes);
        }
    }).catch((err) => {
        res.status(404).json({message:"Nada foi encontrado"});
        console.error(err);
    });
});

router.post('/add', async (req,res) => { //add nova pessoa no banco
    if(!req.body.nome || !req.body.genero || !req.body.lancamento){
        res.status(400).json({message:"Preencha todos os campos"});
    };

    await Filmes.create(req.body).then(() => {
        res.status(200).json({message: "cadastrado com sucesso"});
    }).catch((err) => {
        res.status(400).json({message: "algo esta errado"});
        console.error(err);
    })
});

router.put('/edit/:id', async (req,res) => { //edita pessoa no banco
    const id = req.params._id;
    if(!id){res.status(404).json({message:"Não encontrado!"})}else
    if(!req.body.nome || !req.body.genero || !req.body.lancamento){
        res.status(400).json({message:"Preencha todos os campos"});
    };
    await Filmes.findByIdAndUpdate(req.params.id, req.body).then(() => {
        res.status(200).json({message: "alterado com sucesso"});
    }
    ).catch((err) => {
        res.status(400).json({message: "algo esta errado"});
        console.error(err);
    }
)});

router.delete('/delete/:id', async (req,res) => { //edita pessoa no banco
    const id = req.params._id;
    if(!id){res.status(404).json({message:"Não encontrado!"})}
    await Filmes.findByIdAndDelete(req.params.id).then(() => {
        res.status(200).json({message: "deletado com sucesso"});
    }
    ).catch((err) => {
        res.status(400).json({message: "algo esta errado"});
        console.error(err);
    }
)});

module.exports = router;
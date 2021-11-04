const express = require("express"); //import do express
const router = express.Router(); //define app como express
const Jogos = require("../model/jogos"); // import do modelo pessoa

router.get('/', (req,res) => {
    res.status(200).json({message:"rota jogos ok"});
});

router.get('/listar', async (req,res) => {
    await Jogos.find({}).then((jogos) => { //pega todo mundo do banco
        console.log(jogos);
        res.status(200).json(jogos);
    }).catch((err) => {
        res.status(204).json({message:"Nada foi encontrado"});
        console.error(err);
    });
});

router.get('/byid/:id', async (req,res) => {
    const id = req.params.id;  //recebendo nome por parametro
    await Jogos.findOne({ _id:id }).then((jogos) => { //findOne retorna o primeiro que der match com o item passado
        console.log(jogos);
        if(jogos == null){ //validando se retorna null 
            res.status(404).json({message: "nao foi encontrado"});
        }else{
            res.status(200).json(jogos);
        }
    }).catch((err) => {
        res.status(404).json({message:"Nada foi encontrado"});
        console.error(err);
    });
});

router.post('/add', async (req,res) => { //add nova pessoa no banco
    if(!req.body.nome || !req.body.genero || !req.body.plataforma){
        res.status(400).json({message:"Preencha todos os campos"});
    };
    await Jogos.create(req.body).then(() => {
        res.status(200).json({message: "cadastrado com sucesso"});
    }).catch((err) => {
        res.status(400).json({message: "algo esta errado"});
        console.error(err);
    })
});

router.put('/edit/:id', async (req,res) => { //edita pessoa no banco
    const id = req.params._id;
    if(!id){res.status(404).json({message:"Não encontrado!"})}else
    if(!req.body.nome || !req.body.genero || !req.body.plataforma){
        res.status(400).json({message:"Preencha todos os campos"});
    };

    await Jogos.findByIdAndUpdate(req.params.id, req.body).then(() => {
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
    await Jogos.findByIdAndDelete(req.params.id).then(() => {
        res.status(200).json({message: "deletado com sucesso"});
    }
    ).catch((err) => {
        res.status(400).json({message: "algo esta errado"});
        console.error(err);
    }
)});

module.exports = router;
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

router.post('/add', async (req,res) => { //add nova pessoa no banco
    await Filmes.create(req.body).then(() => {
        res.status(200).json({message: "cadastrado com sucesso"});
    }).catch((err) => {
        res.status(400).json({message: "algo esta errado"});
        console.error(err);
    })
});

router.put('/edit/:id', async (req,res) => { //edita pessoa no banco
    await Filmes.findByIdAndUpdate(req.params.id, req.body).then(() => {
        res.status(200).json({message: "alterado com sucesso"});
    }
    ).catch((err) => {
        res.status(400).json({message: "algo esta errado"});
        console.error(err);
    }
)});

router.put('/delete/:id', async (req,res) => { //edita pessoa no banco
    await Filmes.findByIdAndDelete(req.params.id).then(() => {
        res.status(200).json({message: "deletado com sucesso"});
    }
    ).catch((err) => {
        res.status(400).json({message: "algo esta errado"});
        console.error(err);
    }
)});

module.exports = router;
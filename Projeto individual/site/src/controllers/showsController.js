var showsModel = require("../models/showsModel");

function listar(req, res) {
    var nome_artista = req.params.nome_artistaVar
    var idUser = req.params.idUser
    console.log(nome_artista, idUser)

    showsModel.listar( idUser, nome_artista ).then(function(resultado){
        // precisamos informar que o resultado voltará para o front-end como uma resposta json
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

function trazer_historico(req, res) {
    var idUser = req.params.idUser
    console.log(idUser)

    showsModel.trazer_historico( idUser).then(function(resultado){
        // precisamos informar que o resultado voltará para o front-end como uma resposta json
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}



module.exports = {
    trazer_historico,
    listar
}
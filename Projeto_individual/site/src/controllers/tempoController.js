var tempoModel = require("../models/tempoModel");

function gerar_tempo(req, res) {
    var idUser = req.params.idUser
    console.log(idUser)

    tempoModel.gerar_tempo(idUser).then(function(resultado){
        // precisamos informar que o resultado voltará para o front-end como uma resposta json
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}


module.exports = {
    gerar_tempo
}
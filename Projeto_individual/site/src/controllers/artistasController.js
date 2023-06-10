var artistasModel = require("../models/artistasModel");

function procurarArtistas(req, res) {
    var nome_artista = req.params.nome_artistaVar
    console.log(nome_artista)

    artistasModel.procurarArtistas( nome_artista ).then(function(resultado){
        // precisamos informar que o resultado voltará para o front-end como uma resposta json
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

function addArtista(req, res) {
    var idUser = req.body.idUserServer;
    var nome_artista = req.body.nome_artistaServer

    console.log(idUser, nome_artista)

    if (idUser == undefined) {
        res.status(400).send("Seu artista está undefined!");
    } else if (nome_artista == undefined) {
        res.status(400).send("Sua id está undefiniied!");
    } else {

        artistasModel.addArtista(idUser, nome_artista)
            .then(
                function (resultado) {
                    console.log(`\nResultados encontrados: ${resultado.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

                    if (resultado.length == 1) {
                        console.log(resultado);
                        res.json(resultado[0]);
                    } 
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function trazer_artistas(req, res) {
    var idUser = req.params.idUser
    console.log(idUser)

    artistasModel.trazer_artistas( idUser).then(function(resultado){
        // precisamos informar que o resultado voltará para o front-end como uma resposta json
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}



module.exports = {
    trazer_artistas,
    procurarArtistas,
    addArtista
}
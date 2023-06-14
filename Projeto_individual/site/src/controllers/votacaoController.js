var votacaoModel = require("../models/votacaoModel");

var sessoes = [];

function votar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var escolhaUsuario = req.body.escolhaUsuarioServer
    var idUser = req.body.idUserServer;

    // Faça as validações dos valores
    if (escolhaUsuario == undefined) {
        res.status(400).send("Seu artista está undefined!");
    } else if (idUser == undefined) {
        res.status(400).send("Seu id está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        votacaoModel.votar(escolhaUsuario, idUser)
            .then(
                function (resultado) {
                    console.log("resultado")
                    console.log(resultado)
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function buscarUltimasMedidas(req, res) {

    const limite_linhas = 7

    var idShow = req.params.idShow;

    console.log(`Recuperando as ultimas ${limite_linhas} medidas`);

    votacaoModel.buscarUltimasMedidas(idShow, limite_linhas).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    votar,
    buscarUltimasMedidas
}
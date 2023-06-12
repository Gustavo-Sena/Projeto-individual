var graficoModel = require("../models/graficoModel");

function buscarUltimasMedidas(req, res) {

    const limite_linhas = 7

    var idShow = req.params.idShow;

    console.log(`Recuperando as ultimas ${limite_linhas} medidas`);

    graficoModel.buscarUltimasMedidas(idShow, limite_linhas).then(function (resultado) {
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

function buscarUltimasMedidas2(req, res) {

    const limite_linhas = 7

    var idArtista = req.params.idArtista;

    console.log(`Recuperando as ultimas ${limite_linhas} medidas`);

    graficoModel.buscarUltimasMedidas2(idArtista, limite_linhas).then(function (resultado) {
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
    buscarUltimasMedidas,
    buscarUltimasMedidas2
}
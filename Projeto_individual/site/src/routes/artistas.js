var express = require("express");
var router = express.Router();

var artistasController = require("../controllers/artistasController");

router.get("/procurarArtistas/:nome_artistaVar", function(req, res) {
    // função a ser chamada quando acessar /artistas/listar
    artistasController.procurarArtistas(req, res);
});

router.get("/trazer_artistas/:idUser", function(req, res) {
    // função a ser chamada quando acessar /artistas/trazer_historico
    artistasController.trazer_artistas(req, res);
});

router.post("/addArtista", function (req, res) {
    artistasController.addArtista(req, res);
})


module.exports = router
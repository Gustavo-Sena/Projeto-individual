var express = require("express");
var router = express.Router();

var tempoController = require("../controllers/tempoController");

router.get("/gerar_tempo/:idUser", function(req, res) {
    // função a ser chamada quando acessar /shows/listar
    tempoController.gerar_tempo(req, res);
});

module.exports = router
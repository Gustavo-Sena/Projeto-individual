var express = require("express");
var router = express.Router();

var showsController = require("../controllers/showsController");

router.get("/listar/:nome_artistaVar/:idUser", function(req, res) {
    // função a ser chamada quando acessar /shows/listar
    showsController.listar(req, res);
});

router.get("/trazer_historico/:idUser", function(req, res) {
    // função a ser chamada quando acessar /shows/trazer_historico
    showsController.trazer_historico(req, res);
});


module.exports = router
var express = require("express");
var router = express.Router();

var showsController = require("../controllers/showsController");

router.get("/procurarShow/:nome_artistaVar", function(req, res) {
    // função a ser chamada quando acessar /shows/listar
    showsController.procurarShow(req, res);
});

router.get("/trazer_historico/:idUser", function(req, res) {
    // função a ser chamada quando acessar /shows/trazer_historico
    showsController.trazer_historico(req, res);
});

router.post("/addShow", function (req, res) {
    showsController.addShow(req, res);
})


module.exports = router
var express = require("express");
var router = express.Router();

var votacaoController = require("../controllers/votacaoController");

router.post("/votar", function (req, res) {
    votacaoController.votar(req, res);
})

router.get("/ultimas/:idShow", function (req, res) {
    votacaoController.buscarUltimasMedidas(req, res);
});

module.exports = router;
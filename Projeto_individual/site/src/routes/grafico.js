var express = require("express");
var router = express.Router();

var graficoController = require("../controllers/graficoController");

router.get("/ultimas/:idShow", function (req, res) {
    graficoController.buscarUltimasMedidas(req, res);
});

router.get("/ultimas2/:idArtista", function (req, res) {
    graficoController.buscarUltimasMedidas2(req, res);
});


module.exports = router;
var express = require("express");
var router = express.Router();

var ingressoController = require("../controllers/ingressoController");

router.post("/cadastrarIngresso", function (req, res) {
    ingressoController.cadastrarIngresso(req, res);
})

module.exports = router;
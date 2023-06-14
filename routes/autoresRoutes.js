var express = require("express");
var AutorController = require("../controller/autoresController.js");
var router = express.Router();

router.get("/autores", AutorController.buscarAutor);
router.post("/autores", AutorController.cadastrarAutor);

module.exports = router;

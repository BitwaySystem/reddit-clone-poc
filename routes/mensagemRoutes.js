var express = require("express");
var MensagemController = require("../controller/mensagemController.js");
var router = express.Router();

router.get("/mensagens", MensagemController.buscarMensagem);
router.post("/mensagens", MensagemController.criarMensagem);
router.put("/mensagens/:id", MensagemController.atualizarMensagem);
router.delete("/mensagens/:id", MensagemController.deletarMensagem);
router.patch("/mensagens/upvote/:id", MensagemController.maisUmVoto);
router.patch("/mensagens/downvote/:id", MensagemController.menosUmVoto);

module.exports = router;

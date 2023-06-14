var express = require("express");
var router = express.Router();

var autoresRoutes = require("./autoresRoutes.js");
var mensagemRoutes = require("./mensagemRoutes.js");

/* GET home page. */
router.get("/", function (req, res, next) {
    res.render("index", { title: "Express" });
});

router.use(
    "/api/", //
    autoresRoutes, //
    mensagemRoutes
);

module.exports = router;

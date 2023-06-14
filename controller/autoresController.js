var autorModel = require("../models/Autor.js");

class AutorController {
    static buscarAutor = (req, res) => {
        const nomeAutor = req.query.nomeCompleto;
        autorModel
            .find({ nomeCompleto: { $regex: new RegExp(nomeAutor, "i") } })
            .then((autores) => {
                if (autores && autores.length > 0) {
                    res.status(200).json(autores);
                } else {
                    res.status(404).json({ erro: "Autor não encontrado" });
                }
            })
            .catch((err) => {
                res.status(500).json({ error: err.message });
            });
    };

    static cadastrarAutor = (req, res) => {
        let autor = new autorModel(req.body);
        autor
            .save()
            .then((autor) => res.status(201).json(autor.toJSON()))
            .catch((err) => {
                res.status(500).json({
                    error: `Erro ao salvar autor.: ${err}`,
                });
            });
    };
}

module.exports = AutorController;

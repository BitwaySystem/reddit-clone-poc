var mongoose = require("mongoose");

const mensagemSchema = new mongoose.Schema({
    id: { type: String },
    autor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "autores",
        required: true,
    },
    titulo: { type: String, required: true },
    texto: { type: String, required: true },
    votos: { type: Number },
});

const mensagens = mongoose.model("mensagens", mensagemSchema);

module.exports = mensagens;

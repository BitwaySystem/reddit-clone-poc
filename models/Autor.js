var mongoose = require("mongoose");

const autorSchema = new mongoose.Schema({
    id: { type: String },
    nomeCompleto: { type: String, required: true },
});

const autores = mongoose.model("autores", autorSchema);

module.exports = autores;

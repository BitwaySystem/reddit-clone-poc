var mensagemModel = require("../models/Mensagem.js");

class MensagemController {
    static async criarMensagem(req, res) {
        try {
            let mensagem = new mensagemModel(req.body);
            mensagem.votos = 0;
            await mensagem.save();
            res.status(201).json(mensagem);
        } catch (err) {
            res.status(500).json({
                erro: `Erro ao salvar postar a mensagem: ${err.message}`,
            });
        }
    }

    static async buscarMensagem(req, res) {
        try {
            const titulo = req.query.titulo;
            const mensagens = await mensagemModel
                .find({ titulo: { $regex: new RegExp(titulo, "i") } })
                .populate("autor", "nomeCompleto");
            if (mensagens && mensagens.length > 0) {
                res.status(200).json(mensagens);
            } else {
                res.status(404).json({ erro: "Título não encontrado" });
            }
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    static async atualizarMensagem(req, res) {
        try {
            const { id } = req.params;
            const mensagemAtualizada = await mensagemModel.findByIdAndUpdate(
                id,
                req.body,
                { new: true }
            );
            if (mensagemAtualizada) {
                res.status(200).json(mensagemAtualizada);
            } else {
                res.status(404).json({ erro: "Mensagem não encontrada" });
            }
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    static async deletarMensagem(req, res) {
        try {
            const { id } = req.params;
            const mensagemDeletada = await mensagemModel.findByIdAndRemove(id);
            if (mensagemDeletada) {
                res.status(204).json({
                    success: `Mensagem com id ${id} foi deletada`,
                });
            } else {
                res.status(404).json({ erro: "Mensagem não encontrada" });
            }
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    static async maisUmVoto(req, res) {
        try {
            const { id } = req.params;
            const mensagem = await mensagemModel.findByIdAndUpdate(
                id,
                { $inc: { votos: 1 } },
                { new: true }
            );
            res.status(200).json(mensagem);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    static async menosUmVoto(req, res) {
        try {
            const { id } = req.params;
            const mensagem = await mensagemModel.findByIdAndUpdate(
                id,
                { $inc: { votos: -1 } },
                { new: true }
            );
            res.status(200).json(mensagem);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
}

module.exports = MensagemController;

const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    titulo: String,
    foto: String,
    texto: String,
    criadoEm: { type: Date, default: Date.now() },
    usuario: {
        type: mongoose.Schema.Types.ObjectID,
        ref: 'Usuario'
    }
});

module.exports = mongoose.model('Post', PostSchema)
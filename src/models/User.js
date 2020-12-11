const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    nome: String,
    email: {
        type: String,
        unique: true
    },
    senha: String,
    telefone: String
});

module.exports = mongoose.model('User', UserSchema)
const Post = require('../models/Post');
const Usuario = require('../models/User');

module.exports = {

    async index(request, response) {
        const posts = await Post.find();

        posts.sort(function(a,b){
            return new Date(b.criadoEm) - new Date(a.criadoEm);
        });

        return response.status(200).json(posts);
    },

    async store(request, response) {
        const {
            titulo,
            foto,
            texto,
            usuarioId
        } = request.body;

        const usuario = await Usuario.findById(usuarioId)

        try {

            const post = await Post.create({
                titulo: titulo,
                foto: foto,
                texto: texto,
                usuario: usuario
            })

            return response.status(201).json(post)

        } catch (e) {
            return response.status(500).json({error: "Erro ao cadastrar postagem."})
        }

    }

};
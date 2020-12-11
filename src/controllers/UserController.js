const User = require('../models/User');

module.exports = {

    async index(request, response) {
        const usuarios = await User.find();
        return response.status(200).json(usuarios);
    },

    async update(request, response) {
        const {
            nome,
            email,
            senha,
            telefone
        } = request.body;

        User.findOne({email: email, senha: senha}, function (err, usuario) {
            if (!err) {

                if (!usuario)
                    return response.status(400).json({error: "Usuário não encontrado no sistema."})

                usuario.nome = nome
                usuario.senha = senha
                usuario.telefone = telefone

                usuario.save(function (err) {

                    if (!err) {
                        return response.status(200).json(usuario)
                    } else {
                        console.log(err)
                        return response.status(400).json({error: "Erro ao atualizar informações do usuário."})
                    }

                });

            } else {
                console.log(err)
                return response.status(400).json({error: "Erro ao atualizar informações do Usuário."})
            }
        });

    },

    async store(request, response) {
        const {
            nome,
            email,
            senha,
            telefone
        } = request.body;

        try {
            const usuario = await User.create({
                nome: nome,
                email: email,
                senha: senha,
                telefone: telefone
            })

            return response.status(201).json(usuario)

        } catch (e) {
            return response.status(500).json({error: "Erro ao cadastrar usuário"})
        }

    },

    async delete(request, response) {
        let { email } = request.body;

        try {
            const usuario = await User.findOne({email: email})

            if(usuario) {
                await usuario.deleteOne()
                return response.status(200).json({
                    message: "Usuário " + email + " excluído do sistema."
                })
            } else {
                return response.status(400).json({error: "Usuário não encontrado no sistema."})
            }

        } catch (error) {
            console.log(error)
            return response.status(500).json({error: "Erro ao excluir o usuário."})
        }

    }

};
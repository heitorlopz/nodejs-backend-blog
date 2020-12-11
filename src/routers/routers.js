const { Router } = require('express');

const UserController = require('../controllers/UserController')
const PostController = require('../controllers/PostController')

const routes = Router()

routes.get("/api", async (request, response) => {
    const data = [];

    routes.stack.forEach(middleware => {
        if (middleware.route) {
            data.push(`${Object.keys(middleware.route.methods)[0].toUpperCase()}  ${middleware.route.path}`);
        }
    });

    response.status(200).json(data)

})

routes.post('/usuarios', UserController.store)
routes.get('/usuarios', UserController.index)
routes.put('/usuarios', UserController.update)
routes.delete('/usuarios', UserController.delete)

routes.post('/posts', PostController.store)
routes.get('/posts', PostController.index)

module.exports = routes
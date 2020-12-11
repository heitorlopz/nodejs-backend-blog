# nodejs-backend-blog

Para executar o projeto: rodar "yarn", em seguida "yarn start". Para modificar a porta, modificar o arquivo ".env".

Tem-se no endpoint "/api" todos os endpoints do backend contidos no projeto.
- get /api - mostra todos os endpoints
- post /usuarios - cadastra um novo usuário
- get /usuarios - lista todos os usuários cadastrados
- put /usuarios - atualiza um usuario
- delete /usuarios - deleta um usuario
- post /posts -> cria uma postagem
- get /posts -> lista todas as postagens

Além disso, é importante salientar que:
- Para cada postagem está sendo referenciado o usuário que a criou.
- Não se pode criar um usuário com o e-mail de um outro que já foi cadastrado.
- Todo o backend está conectado ao MongoDB, na nuvem.

const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    () => {
        console.log("Conectado com o banco");
    })
    .catch((err) => console.log(err));

const express = require('express')

const route = express.Router()
/*req e res = requisição da rota e o responsi, é a resposta*/

route.get('/', (req, res) => res.render("index"))
/* (/ )é o que você está pedindo que apareça o navegador e o que vai responder deve ser o que fica no res.render*/

route.get('/create-pass', (req, res) => res.render("create-pass"))

route.get('/room', (req, res) => res.render("room"))


module.exports = route
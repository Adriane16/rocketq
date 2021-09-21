const express = require('express')

const route = express.Router()
// req e res = requisição da rota e o response, é a resposta

route.get('/', (req, res) => res.render("index"))
// "(/ )" é o que você está pedindo que apareça o navegador e o que vai responder deve ser o que fica no res.render

route.get('/create-pass', (req, res) => res.render("create-pass"))

route.get('/room', (req, res) => res.render("room"))

// formato que o formulario de dentro da modal tem que passar a informação:
// route.post('/room/:romm/:question/:action', (req,res) => res.render())
// parametros recebidos.
// get é pegar, abrir a rota no navegador. 
// post: pegando dados do formulário. 
//  passando variavel no ejs, usa-se: <% = %>

module.exports = route
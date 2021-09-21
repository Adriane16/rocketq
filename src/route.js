const express = require('express')

const questionController = require ('./controllers/questionController')
const roomController = require ('./controllers/roomCrontoller')

const route = express.Router()
// req e res = requisição da rota e o response, é a resposta

route.get('/', (req, res) => res.render("index", {page: 'enter-room'}))
// "(/ )" é o que você está pedindo que apareça o navegador e o que vai responder deve ser o que fica no res.render

route.get('/create-pass', (req, res) => res.render("index", {page: 'create-pass'}))

route.get('/room/:room', (req, res) => res.render("room"))

// formato que o formulario de dentro da modal tem que passar a informação:

route.post('/question/:room/:question/:action', questionController.index)

route.post('/create-room', roomController.create)
// 
// (req,res) => res.render())
// parametros recebidos.
// get é pegar, abrir a rota no navegador. 
// post: pegando dados do formulário. 
//  passando variavel no ejs, usa-se: <% = %>

module.exports = route
const express = require('express')
const route = require ('./route')
const path = require('path')

// iniciando o express 
const server = express() 

//quem vai ser o responsavel (view engine)
server.set('view engine', 'ejs')

server.use(express.static("public"))

// path pega o caminho da pasta e junta. o dirname se torna src
server.set('views', path.join(__dirname, 'views'))

server.use(expresse.urlencoded({extended:true}))

// use o arquivo route
server.use(route)

// funcionalidade que chama(server listen) (função= ajuda a ela funcionar e realizar algum codigo)
server.listen(3000, () => console.log("RODANDO"))





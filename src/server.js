const express = require('express')
const route = require ('./route')
const path = require('path')

const server = express() /*iniciando o express */

server.set('view engine', 'ejs') /*quem vai ser o responsavel (view engine)*/

server.use(express.static("public"))

server.set('views', path.join(__dirname, 'views')) /*path pega o caminho da pasta e junta. o dirname se torna src*/

server.use(route) /*use o arquivo route*/

server.listen(3000, () => console.log("RODANDO")) /* funcionalidade que chama(server listen) (função= ajuda a ela funcionar e realizar algum codigo)*/





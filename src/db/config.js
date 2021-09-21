const sqlite3 = require ("sqlite3");
const { open } = require("sqlite")

module.exports = () => 

    open({
        filename: './src/db/rocketq.sqlite',
        driver: sqlite3.Database, 
    });

    // open: abrir a caixinha
    // filename: qual o nome desse arquivo de dados
    // driver: quem comanda o bando de dados.
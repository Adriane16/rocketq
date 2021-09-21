// bd: planilha em tabelas

// importando config
const Database = require ("./config") 


// guardando as funções 
const initDb = {

    // async: sempre estar junto com o await em uma função.(gemeos siameses, um não existe sem o outro.)
    async init(){

        // await: esperar "Quando o database terminar ai você pode rodar"
        const db = await Database()

        // depende da linha acima
        await db.exec(` CREATE TABLE rooms (
            id INTEGER PRIMARY KEY,
            pass TEXT
        )`);

        await db.exec(`CREATE TABLE questions(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            titulo TEXT,
            read INT 
        )`);
           
        await db.close()
        // fecha nossa caixa de dados
    }
}

//INTERGER: inteiro PRIMARY KEY: chave primária 
// Aqui está executando essa função
initDb.init();


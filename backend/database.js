const sqlite3 = require('sqlite3').verbose()
module.exports = {

createDbContext: function () {
    return new sqlite3.Database('./database.db', (err) => {
        if (err) {
            console.error(err.message);
        } 
    });
},

createDB: function () {
    const db = this.createDbContext()

    db.run(`CREATE TABLE IF NOT EXISTS character (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT,
    cor TEXT,
    nomeTransformado TEXT,
    corTransformado TEXT,
    nivel INTEGER,
    classe TEXT,
    subclasse1 TEXT,
    subclasse2 TEXT,
    raca TEXT,
    nacionalidade TEXT,
    tipoEnergia TEXT,
    vitalidade INTEGER,
    vitalidadeMax INTEGER,
    vigor INTEGER,
    vigorMax INTEGER,
    energia INTEGER,
    energiaMax INTEGER,
    sanidade INTEGER,
    sanidadeMax INTEGER,
    humanidade INTEGER,
    humanidadeMax INTEGER,
    mentor TEXT,
    maestria INTEGER,
    forca INTEGER,
    destreza INTEGER,
    inteligencia INTEGER,
    energiaSpl INTEGER,
    carisma INTEGER,
    vontade INTEGER,
    afinidade INTEGER,
    sorte INTEGER,
    equipamentos TEXT,
    habilidades TEXT
    )`, (err) => {
    if (err) {
        console.error(err.message);
    } else {
        console.log('Table "character" created or already exists.');
    }
    });
}

}
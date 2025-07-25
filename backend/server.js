const express = require('express')
const database = require('./database');
const cors = require("cors");

const app = express()
const port = 4000

app.use(express.static(__dirname))
app.use(express.json()); // For parsing application/json
app.use(express.urlencoded({ extended: true }))
app.use(cors());

database.createDB()

app.get('/api/character/get/:id', (req, res) => {
    let db = database.createDbContext()
    
    let query = "SELECT * FROM character WHERE id = ?"
    db.all(query, [req.params.id], async (err, rows) => {
        res.json({data: rows})
    })

    db.close()
})

app.get('/api/character/all', (req, res) => {
    let db = database.createDbContext()
    
    let query = "SELECT nome FROM character"
    db.all(query, async (err, rows) => {
        res.json({data: rows})
    })

    db.close()
}) 

app.post('/api/character/post', async (req, res) => {
    let db = database.createDbContext()
    let query = "INSERT INTO character (nome, nivel, cor, classe, subclasse1, subclasse2, raca, nacionalidade, tipoEnergia, vitalidade, vigor, energia, sanidade, humanidade, mentor, maestria, forca, destreza, inteligencia, energiaSpl, carisma, vontade, sorte, vitalidadeMax, vigorMax, energiaMax, sanidadeMax, humanidadeMax) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)"

    db.all(query, [
        req.body.nome, 
        req.body.nivel, 
        req.body.cor,
        req.body.classe,
        req.body.subclasse1,
        req.body.subclasse2,
        req.body.raca,
        req.body.nacionalidade,
        req.body.tipoEnergia,
        req.body.vitalidade,
        req.body.vigor,
        req.body.energia,
        req.body.sanidade,
        req.body.humanidade,
        req.body.mentor,
        req.body.maestria,
        req.body.forca,
        req.body.destreza,
        req.body.inteligencia,
        req.body.energiaSpl,
        req.body.carisma,
        req.body.vontade,
        req.body.sorte,
        req.body.vitalidade,
        req.body.vigor,
        req.body.energia,
        req.body.sanidade,
        req.body.humanidade,
    ])
    res.send("ok")
    db.close()
})

app.put('/api/character/update/:id', (req, res) => {
    let db = database.createDbContext()
    let query = `
    UPDATE 
        character 
    SET 
        nivel=?, 
        vitalidade=?, 
        vitalidadeMax=?, 
        vigor=?, 
        vigorMax=?, 
        energia=?, 
        energiaMax=?, 
        sanidade=?,
        sanidadeMax=?,
        humanidade=?,
        humanidadeMax=?,
        forca=?,
        destreza=?,
        inteligencia=?,
        energiaSpl=?,
        carisma=?,
        vontade=?,
        afinidade=?,
        sorte=?,
        equipamentos=?,
        informacao=?,
        habilidades=?,
        status=?
    WHERE 
        id=?
    `
    
    db.all(query, [req.body.nivel, req.body.vitalidade, req.body.vitalidadeMax, req.body.vigor, req.body.vigorMax, req.body.energia, req.body.energiaMax, req.body.sanidade, req.body.sanidadeMax, req.body.humanidade, req.body.humanidadeMax, req.body.forca, req.body.destreza, req.body.inteligencia, req.body.energiaSpl, req.body.carisma, req.body.vontade, req.body.afinidade, req.body.sorte, req.body.equipamentos, req.body.informacao, req.body.habilidades, req.body.status, req.params.id])
    res.send('ok')
    db.close()
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

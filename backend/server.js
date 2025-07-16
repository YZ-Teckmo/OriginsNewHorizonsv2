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
    let query = "INSERT INTO character (nome, nivel) VALUES (?, ?)"
    db.all(query, [req.body.nome, req.body.nivel])
    res.send("ok")
    db.close()
})

app.put('/api/character/update', (req, res) => {
    res.send("Ainda to fazendo isso, pera ae meu")
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

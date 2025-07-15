const express = require('express')
const database = require('./database');

const app = express()
const port = 4000

app.use(express.static(__dirname))
app.use(express.json()); // For parsing application/json
app.use(express.urlencoded({ extended: true }))

database.createDB()

app.get('/api/character/get/:id', (req, res) => {
    let db = database.createDbContext()
    
    let query = "SELECT * FROM character WHERE id = ?"
    db.all(query, [req.params.id], async (err, rows) => {
        const character = await rows[0]
        res.json({data: rows})
    })

    db.close()
})

app.get('/api/character/all', (req, res) => {
    res.send("Ainda to fazendo isso, pera ae meu")
}) 

app.post('/api/character/post', (req, res) => {
    res.send("Ainda to fazendo isso, pera ae meu")
})

app.put('/api/character/update', (req, res) => {
    res.send("Ainda to fazendo isso, pera ae meu")
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

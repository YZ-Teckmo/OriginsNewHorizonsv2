const nome = document.getElementById("nome")
const nivel = document.getElementById("nivel")
const sendBtn = document.getElementById("btn-submit")
const display = document.getElementById("display-data")

window.addEventListener("DOMContentLoaded", async () => {
    updateDisplay()
})

sendBtn.addEventListener("click", async () => {
    const url = "http://localhost:4000/api/character/update"

    fetch(url, {
        method: 'PUT',  
        headers: {"Content-Type": "application/json"}, 
        body: JSON.stringify({
            nome: nome.value,
            nivel: nivel.value
        })
    })

    updateDisplay()
})

async function updateDisplay() {
    const url = "http://localhost:4000/api/character/get/1"
    await fetch(url, {method:'GET'})
    .then(res => res.json())
    .then(json => json.data[0])
    .then(character => {
        display.textContent = character.nome + " " + character.nivel
    })
}
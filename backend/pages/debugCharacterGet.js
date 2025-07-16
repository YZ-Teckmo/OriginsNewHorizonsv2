const nome = document.getElementById("nome")
const level = document.getElementById("level")
const nacionalidade = document.getElementById("nacionalidade")

window.addEventListener('DOMContentLoaded', async () => {
    const url = "http://localhost:4000/api/character/get/1"
    await fetch(url, {method:'GET'})
    .then(res => res.json())
    .then(json => json.data[0])
    .then(character => {
        nome.textContent = character.nome
        level.textContent = character.nivel
        nacionalidade.textContent = character.nacionalidade
    })
})
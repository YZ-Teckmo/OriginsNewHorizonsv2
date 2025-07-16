const btnSubmit = document.getElementById("btn-submit")
const nomeInput = document.getElementById('nome')
const nivelInput = document.getElementById('nivel')

btnSubmit.addEventListener('click', () => {
    const url = "http://localhost:4000/api/character/post"

    fetch(url, {
        method: 'POST',  
        headers: {"Content-Type": "application/json"}, 
        body: JSON.stringify({
            nome: nomeInput.value,
            nivel: nivelInput.value
        })
    })
})
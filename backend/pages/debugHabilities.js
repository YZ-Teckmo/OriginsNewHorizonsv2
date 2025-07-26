const nome = document.getElementById("nome")
const habNome = document.getElementById("habNome")
const habDesc = document.getElementById("habDesc")
const habDados = document.getElementById("habDados")
const btnHabCriar = document.getElementById("btnHabCriar")
const habLista = document.getElementById("habLista")


window.addEventListener("DOMContentLoaded", async () => { 
const url = "http://localhost:4000/api/character/get/1"
    await fetch(url, {method:'GET'})
    .then(res => res.json())
    .then(json => json.data[0])
    .then(character => {
        nome.textContent = character.nome

        let habilidades = JSON.parse(character.habilidades)
        
        habilidades.forEach(hab => {
            let li = document.createElement('li')
            li.textContent = `Nome: ${hab.nome} Descrição: ${hab.descricao} Dados: ${hab.dices}`
            
            let btn = document.createElement('button')
            btn.textContent = "Rodar"
            btn.addEventListener('click', () => {
                let result = rollDices(hab.dices)
                console.log(result)
            })
            
            li.appendChild(btn)
            habLista.appendChild(li)
        });

        
    })
})

btnHabCriar.addEventListener("click", async () => {
    const url = "http://localhost:4000/api/character/updateHability/1"
    await fetch(url, {
        method:'PUT', 
        headers: {"Content-Type": "application/json"}, 
        body: JSON.stringify({
            habs: [
                {
                nome: habNome.value,
                descricao: habDesc.value,
                dices: habDados.value
                }
            ]
        }) 
    })
})



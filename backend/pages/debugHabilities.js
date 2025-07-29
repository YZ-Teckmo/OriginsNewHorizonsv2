const nome = document.getElementById("nome")
const habNome = document.getElementById("habNome")
const habDesc = document.getElementById("habDesc")
const habDados = document.getElementById("habDados")
const btnHabCriar = document.getElementById("btnHabCriar")
const habLista = document.getElementById("habLista")


window.addEventListener("DOMContentLoaded", async () => { 
    renderHabs()
})

btnHabCriar.addEventListener("click", async () => {

    let saveHabs = {habs: []}
    habLista.childNodes.forEach(element => {
        let nome = element.childNodes[0].textContent.split(':')[1]
        let desc = element.childNodes[1].textContent.split(':')[1]
        let dices = element.childNodes[2].textContent.split(':')[1]
        let habObj = {nome: nome, descricao: desc, dices: dices}
        saveHabs.habs.push(habObj)
    });

    saveHabs.habs.push({nome: habNome.value, descricao: habDesc.value, dices: habDados.value})

    const url = "http://localhost:4000/api/character/updateHability/1"
    await fetch(url, {
        method:'PUT', 
        headers: {"Content-Type": "application/json"}, 
        body: JSON.stringify(saveHabs) 
    })

    renderHabs()
})

async function renderHabs(){
    habLista.innerHTML = ""

    const url = "http://localhost:4000/api/character/get/1"
    await fetch(url, {method:'GET'})
    .then(res => res.json())
    .then(json => json.data[0])
    .then(character => {
        nome.textContent = character.nome

        let habilidades = JSON.parse(character.habilidades)

        habilidades.forEach(hab => {
            let li = document.createElement('li')

            let pNome = document.createElement('p')
            pNome.textContent = `Nome: ${hab.nome}`
            li.appendChild(pNome)

            let pDesc = document.createElement('p')
            pDesc.textContent = `Descrição: ${hab.descricao}`
            li.appendChild(pDesc)
            let pDice = document.createElement('p')
            pDice.textContent = `Dados: ${hab.dices}`
            li.appendChild(pDice)

            let btn = document.createElement('button')
            btn.textContent = "Rodar"
            btn.addEventListener('click', () => {
                let result = rollDicesFromString(hab.dices)
                console.log(result)
            })

            li.appendChild(btn)
            habLista.appendChild(li)
        });
    })
}

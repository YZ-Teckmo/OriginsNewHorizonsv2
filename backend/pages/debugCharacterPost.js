const btnSubmit = document.getElementById("btn-submit")
const nomeInput = document.getElementById('nome')
const nivelInput = document.getElementById('nivel')
const cor = document.getElementById('cor')
const classe = document.getElementById('classe')
const subclasse1 = document.getElementById('subclasse1')
const subclasse2 = document.getElementById('subclasse2')
const raca = document.getElementById('raca')
const nacionalidade = document.getElementById('nacionalidade')
const tipoEnergia = document.getElementById('tipo-energia')
const mentor = document.getElementById('mentor')
const maestria = document.getElementById('maestria')

const vitalidade = document.getElementById('vitalidade')
const vigor = document.getElementById('vigor')
const energia = document.getElementById('energia')
const sanidade = document.getElementById('sanidade')
const humanidade = document.getElementById('humanidade')

const forca = document.getElementById('forca')
const destreza = document.getElementById('destreza')
const inteligencia = document.getElementById('inteligencia')
const energiaSpl = document.getElementById('energia')
const carisma = document.getElementById('carisma')
const vontade = document.getElementById('vontade')
const afinidade = document.getElementById('afinidade')
const sorte = document.getElementById('sorte')



btnSubmit.addEventListener('click', () => {
    const url = "http://localhost:4000/api/character/post"

    fetch(url, {
        method: 'POST',  
        headers: {"Content-Type": "application/json"}, 
        body: JSON.stringify({
            nome: nomeInput.value,
            nivel: nivelInput.value,
            cor: cor.value,
            classe: classe.value,
            subclasse1: subclasse1.value,
            subclasse2: subclasse2.value,
            raca: raca.value, 
            nacionalidade: nacionalidade.value,
            tipoEnergia: tipoEnergia.value,
            vitalidade: vitalidade.value,
            vigor: vigor.value,
            energia: energia.value,
            sanidade: sanidade.value,
            humanidade: humanidade.value,
            mentor: mentor.value,
            maestria: maestria.value,
            forca: forca.value,
            destreza: destreza.value,
            inteligencia: inteligencia.value,
            energiaSpl: energiaSpl.value,
            carisma: carisma.value,
            vontade: vontade.value,
            sorte: sorte.value
        })
    })
})
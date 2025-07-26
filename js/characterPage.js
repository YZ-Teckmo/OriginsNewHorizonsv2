const defaultTab = document.getElementById("defaultTab")
const transformedTab = document.getElementById("transformedTab")
const specitalitty = document.getElementById("SplDiv")
const combat = document.getElementById("CombatDiv")
const statuss = document.getElementById("StatsDiv")
const habilities = document.getElementById("HabDiv")
const info = document.getElementById("InfoDiv")

const playerClass = document.getElementById("playerClass")

const charName = document.getElementsByName("char-name")[0]
const charNameTransformed = document.getElementsByName("char-name-transformed")[0]
const charLevel = document.getElementsByName("char-level")
const charMentor = document.getElementsByName("char-mentor")

const charVit = document.getElementsByName("char-vitality")[0]
const charVitMax = document.getElementsByName("char-vitality-max")[0]

const charVig = document.getElementsByName("char-vigor")[0]
const charVigMax = document.getElementsByName("char-vigor-max")[0]

const charEner = document.getElementsByName("char-energy")[0]
const charEnerMax = document.getElementsByName("char-energy-max")[0]

const charSanity = document.getElementsByName("char-sanity")[0]
const charSanityMax = document.getElementsByName("char-sanity-max")[0]

const charHumanity = document.getElementsByName("char-humanity")[0]
const charHumanityMax = document.getElementsByName("char-humanity-max")[0]

const charStrength = document.getElementsByName("char-strength")[0]
const charDex = document.getElementsByName("char-dexterity")[0]
const charInt = document.getElementsByName("char-inteligency")[0]
const charEnerSpl = document.getElementsByName("char-energy-spl")[0]
const charCharisma = document.getElementsByName("char-charisma")[0]
const charWill = document.getElementsByName("char-will")[0]
const charLuck = document.getElementsByName("char-luck")[0]
const charAfinity = document.getElementsByName("char-afinity")[0]

const charAtq = document.getElementsByName("char-atq")[0]
const charAtqSpl = document.getElementsByName("char-atq-spl")[0]
const charDef = document.getElementsByName("char-def")[0]
const charVel = document.getElementsByName("char-vel")[0]
const charFen = document.getElementsByName("char-fen")[0]
const charFep = document.getElementsByName("char-fep")[0]
const charRes = document.getElementsByName("char-res")[0]

const charAppearence = document.getElementsByName("char-appearance")[0]
const charPersonality = document.getElementsByName("char-personality")[0]
const charAnnotations = document.getElementsByName("char-annotations")[0]
const charLore = document.getElementsByName("char-lore")[0]
const charCuriosity = document.getElementsByName("char-curiosity")[0]

window.addEventListener("DOMContentLoaded", async () => {
    const url = "http://localhost:4000/api/character/get/1"
    await fetch(url, {method: 'GET'})
        .then(res => res.json())
        .then(json => json.data[0])
        .then(character => {
            charName.textContent = "Nome: " + character.nome
            charNameTransformed.textContent = "Nome: " + character.NomeTransformado

            charLevel.forEach(element => {
                element.value = character.nivel
            });
            charMentor.forEach(element => {
                element.textContent = "Mentor: " + character.mentor
            })

            charVit.value = character.vitalidade
            charVitMax.value = character.vitalidadeMax
            charVig.value = character.vigor
            charVigMax.value = character.vigorMax
            charEner.value = character.energia
            charEnerMax.value = character.energiaMax
            charSanity.value = character.sanidade
            charSanityMax.value = character.sanidadeMax
            charHumanity.value = character.humanidade
            charHumanityMax.value = character.humanidadeMax

            charStrength.value = character.forca
            charDex.value = character.destreza
            charInt.value = character.inteligencia
            charEnerSpl.value = character.energiaSpl
            charCharisma.value = character.carisma
            charWill.value = character.vontade
            charLuck.value = character.sorte
            charAfinity.value = character.afinidade

            charAtq.textContent = "(ATQ) Ataque: " + (parseInt( charStrength.value)+parseInt(charDex.value))
            charAtqSpl.textContent = "(ATQ ESP) Ataque Especial: " //dai tu me complica
            charDef.textContent = "(DEF) Defesa: " + charStrength.value
            charVel.textContent = "(VEL) Velocidade: " + charDex.value
            charFen.textContent = "(FEN) Efeito Negativo: " + charEnerSpl.value
            charFep.textContent = "(FEP) Efeito Positivo: " + charEnerSpl.value
            charRes.textContent = "(RES) Resistencia: " + charWill.value

            InfoJsonRead(character.informacao)
        })
})

function changeTabRight(page) {
    switch (page) {
        case "speciality":
            specitalitty.style.display = "flex"
            combat.style.display = "none"
            statuss.style.display = "none"
            habilities.style.display = "none"
            info.style.display = "none"
            break
        case "combat":
            specitalitty.style.display = "none"
            combat.style.display = "flex"
            statuss.style.display = "none"
            habilities.style.display = "none"
            info.style.display = "none"
            break
        case "status":
            specitalitty.style.display = "none"
            combat.style.display = "none"
            statuss.style.display = "flex"
            habilities.style.display = "none"
            info.style.display = "none"
            break
        case "habilities":
            specitalitty.style.display = "none"
            combat.style.display = "none"
            statuss.style.display = "none"
            habilities.style.display = "flex"
            info.style.display = "none"
            break
        case "info":
            specitalitty.style.display = "none"
            combat.style.display = "none"
            statuss.style.display = "none"
            habilities.style.display = "none"
            info.style.display = "flex"
            break
    }
}

function changeTabLeft(page) {
    switch (page) {
        case "default":
            defaultTab.style.display = "flex"
            transformedTab.style.display = "none"
            break
        case "transformed":
            defaultTab.style.display = "none"
            transformedTab.style.display = "flex"
            break
    }
}

function tabsBase() {
    defaultTab.style.display = "flex"
    transformedTab.style.display = "none"
    specitalitty.style.display = "flex"
    combat.style.display = "none"
    statuss.style.display = "none"
    habilities.style.display = "none"
    info.style.display = "none"
}

function loadPlayerClass() {
    var classs = "dps"
    if (classs == "dps") {
        playerClass.src = "../assets/images/DPS.png"
    }
    if (classs == "tank") {
        playerClass.src = "../assets/images/TANK.png"
    }
    if (classs == "sup") {
        playerClass.src = "../assets/images/SUP.png"
    }
}

function InfoJsonRead(InfoText){
    const obj = JSON.parse(InfoText)
    charAppearence.value = obj.aparencia
    charPersonality.value = obj.personalidade
    charAnnotations.value = obj.anotacao
    charLore.value = obj.lore
    charCuriosity.value = obj.curiosidade
}


function InfoConvertToJson(){
    return {
        aparencia: charAppearence.value,
        personalidade: charPersonality.value,
        anotacao: charAnnotations.value,
        lore: charLore.value,
        curiosidade: charCuriosity.value,
    }
}

async function updateCharacter() {
    const url = "http://localhost:4000/api/character/update/1"

    await fetch(url, {
        method: 'PUT',  
        headers: {"Content-Type": "application/json"}, 
        body: JSON.stringify({
            nome: charName.value,
            nomeTransformado: charNameTransformed.value,
            cor: "",
            corTransformado: "",
            nivel: parseInt(charLevel[0].value),
            classe: "",
            subclasse1: "",
            subclasse2: "",
            raca: "",
            nacionalidade: "",
            tipoEnergia: "",
            vitalidade: charVit.value,
            vitalidadeMax: charVitMax.value,
            vigor: charVig.value,
            vigorMax: charVigMax.value,
            energia: charEner.value,
            energiaMax: charEnerMax.value,
            sanidade: charSanity.value,
            sanidadeMax: charSanityMax.value,
            humanidade: charHumanity.value,
            humanidadeMax: charHumanityMax.value,
            mentor: charMentor.value,
            maestria: 0,
            forca: charStrength.value,
            destreza: charDex.value,
            inteligencia: charInt.value,
            energiaSpl: charEnerSpl.value,
            carisma: charCharisma.value,
            vontade: charWill.value,
            afinidade: charAfinity.value,
            sorte: charLuck.value,
            equipamentos: "",
            informacao: JSON.stringify(InfoConvertToJson()),
            habilidades: "",
            status: ""
        })
    })
}

function rollEncounter(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

let seed = ""

for (let i = 0; i < 64; i++) {
    seed = seed + rollEncounter(1, 8)
}

let position = 0
let encounterType = ""
switch (parseInt(seed[position])) {
    case 1:
        encounterType = "combatSimple"
        break
    case 2:
        encounterType = "combatChallenger"
        break
    case 3:
        encounterType = "combatMoney"
        break
    case 4:
        encounterType = "interactionSimple"
        break
    case 5:
        encounterType = "interactionSequential"
        break
    case 6:
        encounterType = "interactionTemporary"
        break
    case 7:
        encounterType = "merchantSimple"
        break
    case 8:
        encounterType = "merchantVital"
        break
}
const defaultTab = document.getElementById("defaultTab")
const transformedTab = document.getElementById("transformedTab")
const specitalitty = document.getElementById("SplDiv")
const combat = document.getElementById("CombatDiv")
const statuss = document.getElementById("StatsDiv")
const habilities = document.getElementById("HabDiv")
const info = document.getElementById("InfoDiv")

const playerClass = document.getElementById("playerClass")

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
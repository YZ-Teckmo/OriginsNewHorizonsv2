const initPage = document.getElementById("initPage")
const choicePage = document.getElementById("choicePage")

function skipTab(page) {
    initPage.style.display = "none"
    choicePage.style.display = "block"
}

function tabsBase() {
    initPage.style.display = "block"
    choicePage.style.display = "none"
}

window.addEventListener('DOMContentLoaded', () => {
    tabsBase()
})

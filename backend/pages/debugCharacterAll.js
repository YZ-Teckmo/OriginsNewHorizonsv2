const list = document.getElementById('list')

window.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:4000/api/character/all', {method: 'GET'})
    .then(res => res.json())
    .then(json => json.data)
    .then(data => {
        data.forEach(element => {
            let li = document.createElement("li")
            li.textContent = element.nome
            list.appendChild(li)
        });
    })
})
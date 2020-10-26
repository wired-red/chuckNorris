let button = document.querySelector('button')
let joke = document.querySelector('.joke')

button.addEventListener('click', loadData) 

async function loadData() {
    const res = await fetch('http://api.icndb.com/jokes/random')
    data = await res.json()
    resJoke = data.value.joke

    joke.innerHTML = resJoke
}
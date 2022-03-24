const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
let tweets = [];

eventListeners();

function eventListeners() {
    formulario.addEventListener('submit', agregarTweet);
}

function agregarTweet(e) {
    e.preventDefault();
    console.log('Agregando tweet'); 
}
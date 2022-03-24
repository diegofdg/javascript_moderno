const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
let tweets = [];

eventListeners();

function eventListeners() {
    formulario.addEventListener('submit', agregarTweet);
}

function agregarTweet(e) {
    e.preventDefault();
    const tweet = document.querySelector('#tweet').value;
    
    if(tweet === '') {
        mostrarError('Un mensaje no puede ir vacío');
        return;
    }

    const tweetObj = {
        id: Date.now(),
        tweet
    }

    tweets = [...tweets, tweetObj];
    crearHtml();
    formulario.reset();
}

function mostrarError(error) {
    const mensajeError = document.createElement('p');
    mensajeError.textContent = error;
    mensajeError.classList.add('error');

    const contenido = document.querySelector('#contenido');
    contenido.appendChild(mensajeError);

    setTimeout(()=> {
        mensajeError.remove();
    }, 3000);
}

function crearHtml() {
    limpiarHtml();
    
    if(tweets.length > 0) {
        tweets.forEach( tweet => {
            const li = document.createElement('li');            
            li.innerText = tweet.tweet;
            listaTweets.appendChild(li);
        });
    }
}

function limpiarHtml() {
    while(listaTweets.firstChild) {
        listaTweets.removeChild(listaTweets.firstChild);
    }
}
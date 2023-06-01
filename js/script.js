console.log('JS OK')

// # OPERAZIONI INIZIALI•••••••••••••••••

// Recupero la gallery dal DOM
const gallery = document.querySelector(' .gallery');

// Preparo le immagini (indirizzi delle immagini)
let imageSources = ['img/01.webp', 'img/02.webp', 'img/03.webp', 'img/04.webp', 'img/05.webp'];

// Preparo l'HTML per le immagini
let imageElements = ' ';

// Creo un tag img per ogni imageSorces
for ( let i = 0; i  <  imageSources.length; i ++) {
    imageElements += `<img src= "${imageSources[i]}" alt="figures ${i + 1}" >`;
}

// Inserisco le immagini nel DOM
gallery.innerHTML = imageElements;

// Recupero tutte le immagini 
const images = document.querySelectorAll('#carousel img')

// Preparo la gestione dell'index
let currentIndex = 0;

// Imposto la prima immagine come quella attiva (di partenza)
images[currentIndex].classList.add('active');
// Seleccionamos la imagen del HTML
const img = document.querySelector('.random-image');

// Función para generar un número aleatorio entre min y max (inclusive)
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Generar un número aleatorio del 1 al 151
const randomPokemonId = getRandomInt(1, 151);

// URL de la PokeAPI con el ID aleatorio
const url = `https://pokeapi.co/api/v2/pokemon/${randomPokemonId}`;

// Hacer la petición a la API
fetch(url)
    .then(response => response.json())
    .then(data => {
        // data.sprites contiene varias imágenes, aquí usamos front_default
        img.src = data.sprites.front_default;
        img.alt = data.name; // poner nombre como alt
    })
    .catch(error => console.error('Error al obtener el Pokémon:', error));

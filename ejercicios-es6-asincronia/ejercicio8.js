// 1. Seleccionamos el select y la imagen del DOM
const characterSelect = document.getElementById('character-list');
const characterImage = document.querySelector('.character-image');

// 2. Obtenemos los datos de la API
fetch('https://thronesapi.com/api/v2/Characters')
  .then(response => response.json())
  .then(data => {
    // 3. Recorremos todos los personajes para crear opciones del select
    data.forEach(character => {
      const option = document.createElement('option');
      option.value = character.imageUrl; // guardamos la URL de la imagen como value
      option.textContent = character.fullName; // nombre del personaje
      characterSelect.appendChild(option);
    });
  })
  .catch(error => console.error('Error al obtener personajes:', error));

// 4. Evento para cambiar la imagen al seleccionar un personaje
characterSelect.addEventListener('change', (event) => {
  const selectedImageUrl = event.target.value;
  characterImage.src = selectedImageUrl;
});

const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

// Seleccionamos el input con el atributo data-function
const input = document.querySelector('input[data-function="toFilterStreamers"]');

// Escuchamos el evento 'input' para filtrar en tiempo real
input.addEventListener('input', (event) => {
	const searchTerm = event.target.value.toLowerCase(); // Convertimos a minúsculas para no diferenciar mayúsculas
	const filteredStreamers = streamers.filter(streamer => 
		streamer.name.toLowerCase().includes(searchTerm)
	);
	console.log(filteredStreamers);
});

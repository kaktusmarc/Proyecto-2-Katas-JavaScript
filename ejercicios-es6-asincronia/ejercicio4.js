// 4.1
const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const over18 = ages.filter(age => age > 18);
console.log("1 →", over18);


//  4.2
const evenAges = ages.filter(age => age % 2 === 0);
console.log("2 →", evenAges);


// 4.3
const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const lolPlayers = streamers.filter(s => s.gameMorePlayed === 'League of Legends');
console.log("3 →", lolPlayers);


// 4.4 
const streamersWithU = streamers.filter(s => s.name.includes("u"));
console.log("4 →", streamersWithU);


// 4.5 
const legendsPlayers = streamers
	.filter(s => s.gameMorePlayed.includes("Legends"))
	.map(s => {
		if (s.age > 35) {
			return { ...s, gameMorePlayed: s.gameMorePlayed.toUpperCase() };
		}
		return s;
	});

console.log("5 →", legendsPlayers);

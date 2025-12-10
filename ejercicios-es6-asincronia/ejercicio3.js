// 3.1
const users = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];

const usersNames = users.map(user => user.name);
console.log("1 →", usersNames);


// 3.2 
const modifyNames = users.map(user => 
	user.name.startsWith("A") ? "Anacleto" : user.name
);

console.log("2 →", modifyNames);


// 3.3 
const cities = [
	{isVisited:true, name: 'Tokyo'},
	{isVisited:false, name: 'Madagascar'},
	{isVisited:true, name: 'Amsterdam'},
	{isVisited:false, name: 'Seul'}
];

const visitedCities = cities.map(city => 
	city.isVisited ? city.name + " (Visitado)" : city.name
);

console.log("3 →", visitedCities);

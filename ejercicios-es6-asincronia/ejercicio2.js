// 2.1 
const pointsList = [32, 54, 21, 64, 75, 43];
const copyPointsList = [...pointsList];

console.log("1 →", copyPointsList);


// 2.2
const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const copyToy = {...toy};

console.log("2 →", copyToy);


// 2.3 
const pointsLis2 = [54, 87, 99, 65, 32];
const mergedPoints = [...pointsList, ...pointsLis2];

console.log("3 →", mergedPoints);


// 2.4 
const toyUpdate = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']};
const mergedToy = { ...toy, ...toyUpdate };

console.log("4 →", mergedToy);


//2.5
const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];
const newColors = [...colors.slice(0,2), ...colors.slice(3)];

console.log("5 →", newColors);

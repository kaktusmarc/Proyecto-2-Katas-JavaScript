// 1.1 
const game = {title: 'The Last of Us 2', gender: ['action', 'zombie', 'survival'], year: 2020};

const { title, gender, year } = game;

console.log("1 →", title, gender, year);


//  1.2
const fruits = ['Banana', 'Strawberry', 'Orange'];

const [fruit1, fruit2, fruit3] = fruits;

console.log("2 →", fruit1, fruit2, fruit3);


//1.3
const animalFunction = () => {
    return {name: 'Bengal Tiger', race: 'Tiger'} 
};

const { name, race } = animalFunction();

console.log("3 →", name, race);


// 1.4
const car = {name: 'Mazda 6', itv: [2015, 2011, 2020] };

const { name: carName, itv } = car;
const [itv1, itv2, itv3] = itv;

console.log("4 →", carName, itv1, itv2, itv3);

// 1.1

const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

const ulCountries = document.createElement("ul");
for (const country of countries) {
    const li = document.createElement("li");
    li.textContent = country;
    ulCountries.appendChild(li);
}
document.body.appendChild(ulCountries);

// 1.2

document.querySelector(".fn-remove-me")?.remove();

// 1.3

const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

const divPrint = document.querySelector('[data-function="printHere"]');
const ulCars = document.createElement("ul");

for (const car of cars) {
    const li = document.createElement("li");
    li.textContent = car;
    ulCars.appendChild(li);
}

divPrint.appendChild(ulCars);

// 1.4

const countriesImg = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

const container = document.createElement("div");
document.body.appendChild(container);

for (const item of countriesImg) {
    const div = document.createElement("div");

    const h4 = document.createElement("h4");
    h4.textContent = item.title;

    const img = document.createElement("img");
    img.src = item.imgUrl;

    div.appendChild(h4);
    div.appendChild(img);
    container.appendChild(div);
}

// 1.5 

const btnDeleteLast = document.createElement("button");
btnDeleteLast.textContent = "Eliminar último div";
document.body.appendChild(btnDeleteLast);

btnDeleteLast.addEventListener("click", () => {
    const allDivs = container.querySelectorAll("div");
    if (allDivs.length > 0) allDivs[allDivs.length - 1].remove();
});

// 1.6

const allDivs = container.querySelectorAll("div");

allDivs.forEach(div => {
    const btn = document.createElement("button");
    btn.textContent = "Eliminar este";
    btn.style.display = "block";
    btn.style.marginBottom = "10px";

    div.appendChild(btn);

    btn.addEventListener("click", () => div.remove());
});

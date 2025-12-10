// 2.1 
const divEmpty = document.createElement("div");
document.body.appendChild(divEmpty);

// 2.2 
const divWithP = document.createElement("div");
const pInside = document.createElement("p");
divWithP.appendChild(pInside);
document.body.appendChild(divWithP);

// 2.3 
const divSixP = document.createElement("div");
for (let i = 0; i < 6; i++) {
    const p = document.createElement("p");
    p.textContent = `Párrafo ${i+1}`;
    divSixP.appendChild(p);
}
document.body.appendChild(divSixP);

// 2.4 
const pDynamic = document.createElement("p");
pDynamic.textContent = "Soy dinámico!";
document.body.appendChild(pDynamic);

// 2.5 
const h2 = document.querySelector(".fn-insert-here");
h2.textContent = "Wubba Lubba dub dub";

// 2.6 
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const ul = document.createElement("ul");
for (let app of apps) {
    const li = document.createElement("li");
    li.textContent = app;
    ul.appendChild(li);
}
document.body.appendChild(ul);

// 2.7 
const removeMe = document.querySelectorAll(".fn-remove-me");
removeMe.forEach(el => el.remove());

// 2.8 
const divs = document.querySelectorAll("div");
const pMiddle = document.createElement("p");
pMiddle.textContent = "Voy en medio!";
document.body.insertBefore(pMiddle, divs[1]);

// 2.9 
const insertDivs = document.querySelectorAll(".fn-insert-here");
insertDivs.forEach(div => {
    const pInsideDiv = document.createElement("p");
    pInsideDiv.textContent = "Voy dentro!";
    div.appendChild(pInsideDiv);
});

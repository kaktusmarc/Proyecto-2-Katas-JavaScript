const aldeanos = ["Fibrilio", "Narciso", "Vacarena", "Tendo", "Nendo"];

//4.1 – Saca a "Tendo" por consola atacando su posición
console.log(aldeanos[3]);

//4.2 – Coloca en el último lugar del array a "Cervasio"
aldeanos.push("Cervasio");

//4.3 – Cambia el primer elemento del array por "Bambina"
aldeanos[0] = "Bambina";

//4.4 – Dale la vuelta al array
aldeanos.reverse();

//4.5 – Cambia a "Narciso" por "Canela" usando un método de array
aldeanos.splice(1, 1, "Canela");

//4.6 – Imprime el último elemento sin usar la posición explícita
console.log(aldeanos[aldeanos.length - 1]);
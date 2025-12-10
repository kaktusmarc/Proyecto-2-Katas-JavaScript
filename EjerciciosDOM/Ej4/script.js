// 1.1 Evento CLICK en el botón → muestra info del evento
document.getElementById("btnToClick").addEventListener("click", (event) => {
    console.log("Has hecho click 👉", event);
});


// 1.2 Evento FOCUS en el input con clase .focus → muestra su contenido
document.querySelector(".focus").addEventListener("focus", (event) => {
    console.log("Valor actual en focus:", event.target.value);
});


// 1.3 Evento INPUT en el input con clase .value → muestra lo que se escribe
document.querySelector(".value").addEventListener("input", (event) => {
    console.log("Escribiendo:", event.target.value);
});

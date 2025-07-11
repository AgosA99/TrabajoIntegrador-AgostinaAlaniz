let tareas = [] 

const formulario = document.getElementById("formulario");
const input = document.getElementById("input-texto");
const lista = document.getElementById("lista");

const mostrarLista = () => {
    lista.innerHTML = tareas.map((tarea) =>
        <div class = "tarjeta">${tarea}</div>
    ).join("");
};

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const texto = input.value.trim();
    if (texto === "") return; 

    tareas.push(texto);
    input.value = "";
    mostrarLista();  
})
let tareas = [] 

const formulario = document.getElementById("formulario");
const input = document.getElementById("input-texto");
const lista = document.getElementById("lista");


//Eliminar tarea por índice
const eliminarTarea = (index) => {
  tareas.splice(index, 1);
  mostrarLista();
};

//Funcion mostrar tareas
const mostrarLista = () => {
    lista.innerHTML = tareas.map((tarea, index) =>
    `<div class = "tarjeta">${tarea}
    <br>
    <button onclick="eliminarTarea(${index})">🗑️ Eliminar</button>
    </div>`
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
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
    `<div class = "tarjeta">
    <label>
        <input type="checkbox" onchange="toggleCompletada(${index})" ${tarea.completada ? "checked" : ""}>
        <span class="${tarea.completada ? "tachado" : ""}">${tarea.texto}</span>
    </label>
    <br>
    <button onclick="eliminarTarea(${index})">🗑️ Eliminar</button>
    </div>`
    ).join("");
};

// ✅ Marcar tarea como completada
function toggleCompletada(index) {
    tareas[index].completada = !tareas[index].completada;
    mostrarLista();
}

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    const texto = input.value.trim();
    if (texto === "") return; 

    tareas.push({ texto: texto, completada: false });
    input.value = "";
    mostrarLista();  
})
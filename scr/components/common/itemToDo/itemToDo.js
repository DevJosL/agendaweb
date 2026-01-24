import { modal } from "../../sections/ToDoEditar/FormularioToDoEditar.js";
import { getTODOFromStorage, removeTODOFromStorage, updateTodoPriority } from "../storage/Storage.js";

let itemToDo = (imgA, id ,nombre, descripcion, prioridad) =>{
    let div = document.createElement("div");
    div.className = "item_seleccionado"
    
    let img = document.createElement("img");
    img.src = `./assets/icons/${imgA}.svg`;

    let etiquetaNombre = document.createElement("h3");
    etiquetaNombre.textContent = nombre;

    let etiquetaDescripcion = document.createElement("p");
    etiquetaDescripcion.textContent = descripcion;

    let selectPrioridad = document.createElement("select");
    selectPrioridad.className = "prioridad-select";

    let buttonEditar = document.createElement("button");
    buttonEditar.type = "button";
    buttonEditar.className = "buttonEditar";
    buttonEditar.innerHTML = "EDITAR";
    
    const opciones = ["Alta", "Media", "Baja"];

    opciones.forEach(opcion => {
        let opt = document.createElement("option");
        opt.value = opcion;
        opt.textContent = opcion.toUpperCase();
        
        if (opcion === prioridad) {
            opt.selected = true;
        }
        selectPrioridad.appendChild(opt);
    });

    const actualizarColor = (val) => {
        if(val === "Alta") selectPrioridad.style.borderColor = "red";
        else if(val === "Media") selectPrioridad.style.borderColor = "orange";
        else selectPrioridad.style.borderColor = "green";
    };
    
    actualizarColor(prioridad);

    selectPrioridad.addEventListener("change", (e) => {
        let nuevaPrio = e.target.value;
        actualizarColor(nuevaPrio);
        updateTodoPriority(id, nuevaPrio);
    });

    let buttonEliminar = document.createElement("button");
    buttonEliminar.type = "button";
    buttonEliminar.className = "buttonE";

    let imgDelete = document.createElement("img");
    imgDelete.src = `./assets/icons/delete.svg`;
    imgDelete.alt = "Eliminar";
    buttonEliminar.appendChild(imgDelete);

    div.appendChild(img);
    div.appendChild(etiquetaNombre);
    div.appendChild(etiquetaDescripcion);
    div.appendChild(selectPrioridad);
    div.appendChild(buttonEliminar);
    div.appendChild(buttonEditar);

    buttonEliminar.addEventListener("click", (e) =>{
        e.preventDefault();

        console.log(id);
         removeTODOFromStorage(id);
        div.remove();
        console.log(id + " Eliminado!");
    });

    let modalEditar = modal(id);
    document.body.appendChild(modalEditar);

    buttonEditar.onclick = () => {

        modalEditar.style.display = "flex"
    }

    return div;

}

export{itemToDo};
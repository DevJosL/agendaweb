import { itemToDo } from "../../common/itemToDo/itemToDo.js";
import { getTODOFromStorage } from "../../common/storage/Storage.js";

let todolist = () =>{
    let sectionContactos = document.createElement("sections");
    sectionContactos.className = "todolist";
    let h2 = document.createElement("h2");
    h2.innerHTML = "To Do List";
    sectionContactos.appendChild(h2);

    getTODOFromStorage().forEach((todo) =>{
        sectionContactos.appendChild(itemToDo("agenda",
            todo.nombre, todo.descripcion, todo.prioridad
        ));
    });

    return sectionContactos;
}

export{todolist}
import { Contactos } from "../../sections/contactos/Contactos.js";
import { Formulario } from "../../sections/formulario/Formulario.js";
import { FormularioToDo } from "../../sections/formularioToDo/FormularioToDo.js";
import { todolist } from "../../sections/toDoList/ToDoList.js";

let container = document.getElementById("container")

let viewContacts = function () {
    container.innerHTML = "";
    container.appendChild(Contactos());
}

let viewNewContacts = function (){  
    container.innerHTML = "";
    container.appendChild(Formulario());
};

let viewToDoList = function (){
    container.innerHTML = "";
    container.appendChild(todolist());
}

let viewNewToDo =  function(){
    container.innerHTML = "";
    container.appendChild(FormularioToDo());
}

export {viewContacts, viewNewContacts, viewToDoList, viewNewToDo}
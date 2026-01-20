import { Button } from "./components/common/button/button.js";
import { viewContacts, viewNewContacts, viewToDoList, viewNewToDo } from "./components/layout/nav/NavControllers.js";
import { Contactos } from "./components/sections/contactos/Contactos.js";
import { Formulario } from "./components/sections/formulario/Formulario.js";
import { todolist } from "./components/sections/toDoList/ToDoList.js";

// App
let app = document.getElementById("app");

// Section Menu
let nav = document .getElementById("nav");

// Agregar botones
nav.appendChild(Button(
    "Agenda", 
    "agenda", 
    "users",
    viewContacts
));
nav.appendChild(Button(
    "Crear contacto", 
    "plus", 
    "plus",
    viewNewContacts
));
nav.appendChild(Button("ToDoList", "todolist", "agenda",viewToDoList));
nav.appendChild(Button("Crear Tarea", "plus","plus", viewNewToDo));

// Section Container
let container = document.getElementById("container");

//container.innerHTML = "";
//container.appendChild(Contactos());
//container.appendChild(Formulario());

async function tareas() {
    try {
        let data = await fetch("https://jsonplaceholder.typicode.com/posts");
        let r = await data.json();
        console.log(r);


    } catch (error) {
        console.log(error);
    }
}

tareas();

console.log("Completado.");
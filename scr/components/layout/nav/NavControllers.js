import { Contactos } from "../../sections/contactos/Contactos.js";
import { Formulario } from "../../sections/formulario/Formulario.js";

let container = document.getElementById("container")

let viewContacts = function () {
    container.innerHTML = "";
    container.appendChild(Contactos());
}

let viewNewContacts = function (){  
        container.innerHTML = "";
        container.appendChild(Formulario());
};

export {viewContacts, viewNewContacts}
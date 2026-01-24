import { ContactList } from "../../common/db/db.js";
import { getContactcsFromStorage, saveContatcsToStorage } from "../../common/storage/Storage.js";
let Formulario = () => {
    let sectionFormulario = document.createElement("form");
    sectionFormulario.className = "formulario"

    let h2 = document.createElement("h2");
    h2.innerHTML = "Crear Contacto"

    let nombre = document.createElement("input");
    nombre.type = "text";
    nombre.placeholder = "Nombre";

    let telefono = document.createElement("input");
    telefono.type = "text";
    telefono.placeholder = "Telefono";

    let button = document.createElement("button");
    button.type = "submit";
    button.innerHTML = "Crear";

    sectionFormulario.appendChild(h2);
    sectionFormulario.appendChild(nombre);
    sectionFormulario.appendChild(telefono);
    sectionFormulario.appendChild(button);

    sectionFormulario.addEventListener("submit", (e) => {
        e.preventDefault();

        if (nombre.value == "" || telefono.value == "") {
            alert("LLENE LOS CAMPOS")
        } else {

            let contacto = {
                id: ContactList.length,
                nombre: nombre.value,
                telefono: telefono.value
            };

            console.log(contacto);
            ContactList.push(contacto);
            saveContatcsToStorage(ContactList)
            console.log("STORAGE: ")
            console.log(getContactcsFromStorage());

            nombre.value = "";
            telefono.value = "";
        }

    })

    return sectionFormulario
}

export { Formulario };
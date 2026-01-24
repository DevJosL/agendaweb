import { modalContacto } from "../contactoModal/ContactoModal.js";
import { removeContactsFromStorage } from "../storage/Storage.js";

let ItemContacto = (imgC, nombre, telefono, id, correo, direccion, cumpleannios) => {
    let div = document.createElement("div");
    div.className = "item_seleccionado"

    let img = document.createElement("img");
    img.src = `./assets/icons/${imgC}.svg`;

    let etiquetaNombre = document.createElement("h3");
    etiquetaNombre.textContent = nombre;

    let etiquetaTelefono = document.createElement("p");
    etiquetaTelefono.textContent = telefono;

    let buttonEliminar = document.createElement("button");
    buttonEliminar.type = "button";
    buttonEliminar.className = "buttonE";

    let imgDelete = document.createElement("img");
    imgDelete.src = `./assets/icons/delete.svg`;
    imgDelete.alt = "Eliminar";
    buttonEliminar.appendChild(imgDelete);

    buttonEliminar.addEventListener("click", (e) => {
        e.preventDefault

        removeContactsFromStorage(id);
        div.remove();
        console.log(id + " Eliminado!")
    });

    div.appendChild(img);
    div.appendChild(etiquetaNombre);
    div.appendChild(etiquetaTelefono);
    div.appendChild(buttonEliminar);

    let modalContact = modalContacto(id, correo, direccion, cumpleannios, nombre, telefono, imgC);

    document.body.appendChild(modalContact);

    div.addEventListener("click", (e) => {
        e.preventDefault

        modalContact.style.display = "flex"
    });

    return div;
}

export { ItemContacto };
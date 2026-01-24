import { ItemContacto } from "../../common/itemContacto/ItemContacto.js";
import { getContactcsFromStorage } from "../../common/storage/Storage.js";

let Contactos = () => {
    let sectionContactos = document.createElement("sections");
    sectionContactos.className = "contactos";
    let h2 = document.createElement("h2");
    h2.innerHTML = "Contactos";
    sectionContactos.appendChild(h2);

    getContactcsFromStorage().forEach((contact) =>{
        sectionContactos.appendChild(ItemContacto("user",
             contact.nombre, contact.telefono, contact.id,
             contact.correo, contact.direccion, contact.cumpleannios
        ));
    });

    /* ContactList.forEach((contact) => {
        sectionContactos.appendChild(ItemContacto("user",
            contact.nombre, contact.telefono));
    }); */

    return sectionContactos;
}

export{Contactos}


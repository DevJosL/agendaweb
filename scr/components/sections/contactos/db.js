import { getContactcsFromStorage, saveContatcsToStorage } from "./Storage.js";

let ContactList = getContactcsFromStorage();
saveContatcsToStorage(ContactList);

/* let ContactList = [
    {nombre: "Juan", telefono: "12345678"},
    {nombre: "Maria", telefono: "12345678"},
    {nombre: "Pedro", telefono: "12345678"},
]; */

export {ContactList};

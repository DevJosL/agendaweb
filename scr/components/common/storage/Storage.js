const LOCAL_STORAGE_KEY = "agenda_telefonoica";
const LOCAL_STORAGE_KEYT = "todo_list";

function saveContatcsToStorage(contactos){
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contactos));
}

function getContactcsFromStorage(){
    return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
}

function removeContactsFromStorage(nombre) {
    let contacts = getContactcsFromStorage();

    contacts = contacts.filter(todo => todo.nombre !== nombre);

    saveContatcsToStorage(contacts);
}

function saveTODOToStorage(todolist){
    localStorage.setItem(LOCAL_STORAGE_KEYT,JSON.stringify(todolist));
}

function getTODOFromStorage(){
    return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEYT)) || [];
}

function removeTODOFromStorage(nombre) {
    let todos = getTODOFromStorage();

    todos = todos.filter(todo => todo.nombre !== nombre);

    saveTODOToStorage(todos);
}

function updateTodoPriority(nombre, nuevaPrioridad) {
    let todos = getTODOFromStorage();

    const index = todos.findIndex(todo => todo.nombre === nombre);

    if (index !== -1) {
        todos[index].prioridad = nuevaPrioridad;
        saveTODOToStorage(todos);
    }
}

export{LOCAL_STORAGE_KEY, LOCAL_STORAGE_KEYT,getContactcsFromStorage, saveContatcsToStorage, saveTODOToStorage,
     getTODOFromStorage, removeTODOFromStorage, removeContactsFromStorage, updateTodoPriority};

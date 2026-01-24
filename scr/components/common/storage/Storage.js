const LOCAL_STORAGE_KEY = "agenda_telefonoica";
const LOCAL_STORAGE_KEYT = "todo_list";

function saveContatcsToStorage(contactos) {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contactos));
}

function getContactcsFromStorage() {
    return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
}

function removeContactsFromStorage(id) {
    let contacts = getContactcsFromStorage();
    contacts = contacts.filter(contactos => contactos.id !== id);

    console.log(contacts);
    saveContatcsToStorage(contacts);
}

function saveTODOToStorage(todolist) {
    localStorage.setItem(LOCAL_STORAGE_KEYT, JSON.stringify(todolist));
}

function getTODOFromStorage() {
    return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEYT)) || [];
}

function removeTODOFromStorage(id) {
    let todos = getTODOFromStorage();
    todos = todos.filter(todo => todo.id !== id);

    saveTODOToStorage(todos);
}

function updateTodoPriority(id, nuevaPrioridad) {
    let todo = getTODOFromStorage();
    const index = todo.findIndex(todo => todo.id === id);

    if (index !== -1) {
        todo[index].prioridad = nuevaPrioridad;
        saveTODOToStorage(todo);
    }
}

function updateToDoList(id, newNombre, newDescripcion) {
    let todoList = getTODOFromStorage();
    const index = todoList.findIndex(todo => todo.id === id);

    if (index !== -1){
        todoList[index].nombre = newNombre;
        todoList[index].descripcion = newDescripcion;
        saveTODOToStorage(todoList);
        console.log(`TODO LIST ACUTALIZADO: ${todoList[index]}`)
    }
}

export {
    LOCAL_STORAGE_KEY, LOCAL_STORAGE_KEYT, getContactcsFromStorage, saveContatcsToStorage, saveTODOToStorage,
    getTODOFromStorage, removeTODOFromStorage, removeContactsFromStorage, updateTodoPriority, updateToDoList
};

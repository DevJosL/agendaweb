const LOCAL_STORAGE_KEY = "agenda_telefonoica";

function saveContatcsToStorage(contactos){
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contactos));
}

function getContactcsFromStorage(){
    return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
}

export{LOCAL_STORAGE_KEY, getContactcsFromStorage, saveContatcsToStorage};

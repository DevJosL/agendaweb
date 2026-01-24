import { getTODOFromStorage, saveTODOToStorage } from "../../common/storage/Storage.js";

let FormularioToDo = () => {
    let sectionFormulario = document.createElement("form");
    sectionFormulario.className = "formulario"

    let h2 = document.createElement("h2");
    h2.innerHTML = "Crear Tarea"

    let nombre = document.createElement("input");
    nombre.type = "text";
    nombre.placeholder = "Nombre";

    let descripcion = document.createElement("textarea");
    descripcion.placeholder = "Descripción";
    descripcion.rows = 4;
    descripcion.cols = 30;

    let radioGroup = document.createElement("div");
    radioGroup.className = "radio-group";

    let radioA = document.createElement("input");
    radioA.type = "radio";
    radioA.id = "alta";
    radioA.name = "prioridad";
    radioA.value = "Alta";
    radioA.checked = true;
    let labelA = document.createElement("label");
    labelA.setAttribute("for", "alta");
    labelA.innerHTML = "ALTA";
    radioA.appendChild(labelA);

    let radioM = document.createElement("input");
    radioM.type = "radio";
    radioM.id = "media";
    radioM.name = "prioridad";
    radioM.value = "Media";
    let labelM = document.createElement("label");
    labelM.setAttribute("for", "media");
    labelM.innerHTML = "MEDIA";
    radioM.appendChild(labelM);

    let radioB = document.createElement("input");
    radioB.type = "radio";
    radioB.id = "baja";
    radioB.name = "prioridad";
    radioB.value = "Baja"
    let labelB = document.createElement("label");
    labelB.setAttribute("for", "baja");
    labelB.innerHTML = "BAJA";
    radioB.appendChild(labelB);

    let button = document.createElement("button");
    button.type = "submit";
    button.innerHTML = "Crear";

    radioGroup.appendChild(radioA);
    radioGroup.appendChild(labelA);
    radioGroup.appendChild(radioM);
    radioGroup.appendChild(labelM);
    radioGroup.appendChild(radioB);
    radioGroup.appendChild(labelB);

    sectionFormulario.appendChild(h2);
    sectionFormulario.appendChild(nombre);
    sectionFormulario.appendChild(descripcion);
    sectionFormulario.appendChild(radioGroup);
    sectionFormulario.appendChild(button);

    sectionFormulario.addEventListener("submit", (e) => {
        e.preventDefault();

        let prioridadSeleccionada = document.querySelector('input[name="prioridad"]:checked')?.value;

        if (nombre.value == "" || descripcion.value == "") {
            alert("LLENE LOS CAMPOS")
        } else {

            let listTodo = getTODOFromStorage();

            let todo = {
                id: listTodo.length,
                nombre: nombre.value,
                descripcion: descripcion.value,
                prioridad: prioridadSeleccionada
            };

            console.log(todo);
            listTodo.push(todo);
            saveTODOToStorage(listTodo);
            console.log("STORAGE: ")
            console.log(getTODOFromStorage());

            nombre.value = "";
            descripcion.value = "";
            radioA.checked = true;
        }



    })

    return sectionFormulario
}

export { FormularioToDo }
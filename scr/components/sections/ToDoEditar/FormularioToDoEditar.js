import { getTODOFromStorage, updateToDoList } from "../../common/storage/Storage.js";

let modal = (id) => {

  let modalFondo = document.createElement("div");
  modalFondo.className = "modal";
  modalFondo.style.display = "none";

  let modalContenido = document.createElement("div");
  modalContenido.className = "modal-contenido";

  let cerrar = document.createElement("span");
  cerrar.className = "cerrarM";
  cerrar.innerHTML = "&times;";

  let formulario = document.createElement("form");
  formulario.className = "formulario";
  formulario.id = "formularioEdit"

  let h2 = document.createElement("h2");
  h2.textContent = "Editar Tarea";

  let nombre = document.createElement("input");
  nombre.type = "text";
  nombre.placeholder = "Nombre";

  let descripcion = document.createElement("textarea");
  descripcion.placeholder = "Descripción";
  descripcion.rows = 10;
  descripcion.cols = 50;

  let buttonE = document.createElement("button");
  buttonE.type = "submit";
  buttonE.textContent = "Guardar";

  cerrar.onclick = () => {
    modalFondo.style.display = "none";
  };

  formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    let todoListaa = getTODOFromStorage();

    console.log(id);
    updateToDoList(id, nombre.value, descripcion.value);
    console.log(todoListaa[id]);
    modalFondo.style.display = "none";
    location.reload();
  });

  formulario.appendChild(h2);
  formulario.appendChild(nombre);
  formulario.appendChild(descripcion);
  formulario.appendChild(buttonE);

  modalContenido.appendChild(cerrar);
  modalContenido.appendChild(formulario);
  modalFondo.appendChild(modalContenido);

  return modalFondo;
}

export { modal };
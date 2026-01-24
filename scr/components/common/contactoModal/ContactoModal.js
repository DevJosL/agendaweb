let modalContacto = (id, correo, direccion, cumple, nombre, telefono, img) => {
    let modalFondo = document.createElement("div");
    modalFondo.className = "modalContacto";
    modalFondo.style.display = "none"

    let modalContenido = document.createElement("div");
    modalContenido.className = "modal-contenidoC";

    let cerrar = document.createElement("span");
    cerrar.className = "cerrarM";
    cerrar.innerHTML = "&times;";

    let imgUser = document.createElement("img");
    imgUser.src = `./assets/icons/${img}.svg`;

    let h4Id = document.createElement("h4");
    h4Id.className = "id";
    h4Id.innerHTML = `ID: ${id}`;

    let h4nombre = document.createElement("h4");
    h4nombre.className = "nombre"
    // h4nombre.innerHTML = `Nombre: ${nombre}`

    let labelNombre = document.createElement("span");
    labelNombre.textContent = "Nombre: ";

    let valueNombre = document.createElement("span");
    valueNombre.textContent = nombre;

    h4nombre.appendChild(labelNombre);
    h4nombre.appendChild(valueNombre);


    let h4telefono = document.createElement("h4");
    h4telefono.className = "telefono"
    // h4telefono.innerHTML = `Telefóno: ${telefono}`

    let labelTelefon = document.createElement("span");
    labelTelefon.textContent = "Telefóno: ";

    let valueTelefono = document.createElement("span");
    valueTelefono.textContent = telefono;

    h4telefono.appendChild(labelTelefon);
    h4telefono.appendChild(valueTelefono);

    let h4Correo = document.createElement("h4");
    h4Correo.className = "correo";
    // h4Correo.innerHTML = `Correo: ${correo}`;

    let labelCorreo = document.createElement("span");
    labelCorreo.textContent = "Correo: ";

    let valueCorreo = document.createElement("span");
    valueCorreo.textContent = correo;

    h4Correo.appendChild(labelCorreo);
    h4Correo.appendChild(valueCorreo);

    let h4Dire = document.createElement("h4");
    h4Dire.className = "direccion";
    // h4Dire.innerHTML = `Dirección: ${direccion}`;

    let labelDir = document.createElement("span");
    labelDir.textContent = "Dirección: ";

    let valueDir = document.createElement("span");
    valueDir.textContent = direccion;

    h4Dire.appendChild(labelDir);
    h4Dire.appendChild(valueDir);

    let h4cumple = document.createElement("h4");
    h4cumple.className = "cumplea";
    // h4cumple.innerHTML = `Cumpleaños: ${cumple}`;
    
    let labelCumple = document.createElement("span");
    labelCumple.textContent = "Cumpleaños: ";

    let valueCumple = document.createElement("span");
    valueCumple.textContent = cumple;

    h4cumple.appendChild(labelCumple);
    h4cumple.appendChild(valueCumple);

    modalContenido.appendChild(cerrar);
    modalContenido.appendChild(imgUser);
    modalContenido.appendChild(h4Id);
    modalContenido.appendChild(h4nombre);
    modalContenido.appendChild(h4telefono);
    modalContenido.appendChild(h4Correo);
    modalContenido.appendChild(h4Dire);
    modalContenido.appendChild(h4cumple);
    modalFondo.appendChild(modalContenido);


    cerrar.addEventListener("click", (e) => {
        e.preventDefault();

        modalFondo.style.display = "none";
    });

    return modalFondo
}

export { modalContacto }
let login = function () {

    let login = document.createElement("section");

    let h3 = document.createElement("h3");
    h3.innerHTML = "Login"

    let user = document.createElement("input");
    user.type = "text";
    user.placeholder = "Usuario";

    let password = document.createElement("input");
    password.type = "password";
    password.placeholder = "Password";
    
    let button = document.createElement("button")
    button.type = "button"
    button.innerHTML = "Iniciar Sesión"

    login.appendChild(h3);
    login.appendChild(user);
    login.appendChild(password);
    login.appendChild(button);

    button.addEventListener("click", (e) =>{
        e.preventDefault

        window.location.href= "scr/app.html"

    });

    return login;
}

export {login}
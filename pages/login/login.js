export function login(){
    let div = document.createElement('div');
    div.className = "login";

    let span = document.createElement('span');
    span.className = "span";
    span.textContent = "Geeta."
    div.appendChild(span);

    let span2 = document.createElement('span');
    span2.className = "span2"
    span2.textContent = "Create your fashion in your own way"
    div.appendChild(span2);

    let h3 = document.createElement('h3');
    h3.className = "h3"
    h3.textContent = "Each men and women has their own style, Geeta help you to create your unique style."
    div.appendChild(h3);

    let boton1 = document.createElement('a');
    boton1.href ="../../pages/login2/login2.html";
    boton1.className = "boton1"
    boton1.textContent = "LOG IN"
    div.appendChild(boton1);

    let span4 = document.createElement('span');
    span4.className = "span4"
    span4.textContent = "-- OR --"
    div.appendChild(span4);

    let boton2 = document.createElement('a');
    boton2.href = "../../pages/register/register.html";
    boton2.className = "boton2"
    boton2.textContent = "REGISTER"
    div.appendChild(boton2);

    return div;
}

document.body.appendChild(login());
export function banner2() {

    let div = document.createElement('div');
    div.className = "div-banner2";


    let contenido = document.createElement('div');
    contenido.className = "contenido";


    let h2 = document.createElement('h2');
    h2.textContent = "Geeta.";
    h2.className = "h2";
    contenido.appendChild(h2);


    let parrafo1 = document.createElement('p');
    parrafo1.textContent = "Create your fashion in your own way";
    parrafo1.className = "p2"; 
    contenido.appendChild(parrafo1);


    let parrafo2 = document.createElement('p');
    parrafo2.textContent = "Each men and women has their own style, Geeta help you to create your unique style.";
    parrafo2.className = "p1"; 
    contenido.appendChild(parrafo2);


    let boton1 = document.createElement('a');
    boton1.textContent = "Log IN";
    boton1.href = "#login"; 
    boton1.className = "boton1";
    contenido.appendChild(boton1);

  
    let textoOr = document.createElement('spam');
    textoOr.textContent = "-- OR --";
    textoOr.className = "or";
    contenido.appendChild(textoOr);

  
    let boton2 = document.createElement('a');
    boton2.textContent = "Register";
    boton2.href = "#register"; 
    boton2.className = "boton2";
    contenido.appendChild(boton2);

  
    div.appendChild(contenido);

    return div;
}
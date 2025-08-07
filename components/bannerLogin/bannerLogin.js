export function banner2() {
    // Contenedor principal
    let div = document.createElement('div');
    div.className = "div-banner2";

    // Contenedor interno para aplicar grid
    let contenido = document.createElement('div');
    contenido.className = "contenido";

    // Título
    let h2 = document.createElement('h2');
    h2.textContent = "Geeta.";
    h2.className = "h2";
    contenido.appendChild(h2);

    // Primer párrafo (bold)
    let parrafo1 = document.createElement('p');
    parrafo1.textContent = "Create your fashion in your own way";
    parrafo1.className = "p2"; // Aquí corregí: antes era p1 con clase p2
    contenido.appendChild(parrafo1);

    // Segundo párrafo
    let parrafo2 = document.createElement('p');
    parrafo2.textContent = "Each men and women has their own style, Geeta help you to create your unique style.";
    parrafo2.className = "p1"; // Aquí también invertido en tu código
    contenido.appendChild(parrafo2);

    // Botón 1
    let boton1 = document.createElement('a');
    boton1.textContent = "Log IN";
    boton1.href = "#login"; // Agrega el destino que desees
    boton1.className = "boton1";
    contenido.appendChild(boton1);

    // Texto OR
    let textoOr = document.createElement('spam');
    textoOr.textContent = "-- OR --";
    textoOr.className = "or";
    contenido.appendChild(textoOr);

    // Botón 2
    let boton2 = document.createElement('a');
    boton2.textContent = "Register";
    boton2.href = "#register"; // Agrega el destino que desees
    boton2.className = "boton2";
    contenido.appendChild(boton2);

    // Añadir contenido al div principal
    div.appendChild(contenido);

    return div;
}
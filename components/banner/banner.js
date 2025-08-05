export function banner(){
    let div = document.createElement('div')
    div.className = "div-banner"

    let span = document.createElement('span')
    span.textContent = "Geeta."
    div.appendChild(span)


    let aBoton = document.createElement('a')
    aBoton.href = "pages/login/login.html";
    aBoton.className = "a-boton"
    aBoton.textContent = "SHOP NOW"
    div.appendChild(aBoton)

    return div;
}
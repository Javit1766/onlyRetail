export function login() {
    // Contenedor principal
    let container = document.createElement('div');
    container.className = "login-container";

    // --- Banner 2 (versión original) ---
    let banner2Div = document.createElement('div');
    banner2Div.className = "login";

    let span = document.createElement('span');
    span.className = "span";
    span.textContent = "Geeta.";
    banner2Div.appendChild(span);

    let span2 = document.createElement('span');
    span2.className = "span2";
    span2.textContent = "Create your fashion in your own way";
    banner2Div.appendChild(span2);

    let h3 = document.createElement('h3');
    h3.className = "h3";
    h3.textContent = "Each men and women has their own style, Geeta help you to create your unique style.";
    banner2Div.appendChild(h3);

    let botonLogin = document.createElement('a');
    botonLogin.href = "#";
    botonLogin.className = "boton1";
    botonLogin.textContent = "LOG IN";
    banner2Div.appendChild(botonLogin);

    let span4 = document.createElement('span');
    span4.className = "span4";
    span4.textContent = "-- OR --";
    banner2Div.appendChild(span4);

    let botonRegister = document.createElement('a');
    botonRegister.href = "../../pages/register/register.html";
    botonRegister.className = "boton2";
    botonRegister.textContent = "REGISTER";
    banner2Div.appendChild(botonRegister);

    // --- Banner 3 (login2) ---
    let banner3Div = document.createElement("div");
    banner3Div.className = "login2 hidden"; // Oculto por defecto

    let leftSection = document.createElement("div");
    leftSection.className = "left-section";

    let backArrow = document.createElement("span");
    backArrow.innerHTML = "←";
    backArrow.className = "back-arrow";
    leftSection.appendChild(backArrow);

    let title = document.createElement("h1");
    title.textContent = "Welcome Back!";
    leftSection.appendChild(title);

    let description = document.createElement("p");
    description.textContent =
        "Yay! You're back! Thanks for shopping with us. We have exciting deals and promotions going on, grab your pick now!";
    leftSection.appendChild(description);

    let loginText = document.createElement("h3");
    loginText.textContent = "LOG IN";
    leftSection.appendChild(loginText);

    let rightSection = document.createElement("div");
    rightSection.className = "right-section";

    let emailLabel = document.createElement("label");
    emailLabel.textContent = "Email address";
    rightSection.appendChild(emailLabel);

    let emailInput = document.createElement("input");
    emailInput.type = "email";
    emailInput.placeholder = "Enter your email";
    rightSection.appendChild(emailInput);

    let passwordLabel = document.createElement("label");
    passwordLabel.textContent = "Password";
    rightSection.appendChild(passwordLabel);

    let passwordInput = document.createElement("input");
    passwordInput.type = "password";
    passwordInput.placeholder = "Enter your password";
    rightSection.appendChild(passwordInput);

    let loginBtn2 = document.createElement("button");
    loginBtn2.className = "login-btn";
    loginBtn2.textContent = "LOG IN";
    rightSection.appendChild(loginBtn2);

    banner3Div.appendChild(leftSection);
    banner3Div.appendChild(rightSection);

    // --- Evento para cambiar banners ---
    botonLogin.addEventListener('click', () => {
        banner2Div.classList.add("hidden");
        banner3Div.classList.remove("hidden");
    });

    // --- Evento para regresar con flecha ---
    backArrow.addEventListener('click', () => {
        banner3Div.classList.add("hidden");
        banner2Div.classList.remove("hidden");
    });

    // Agregar ambos banners al contenedor principal
    container.appendChild(banner2Div);
    container.appendChild(banner3Div);

    return container;
}

// Insertar en el body
document.body.appendChild(login());

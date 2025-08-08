export function login2() {
    // Contenedor principal
    const container = document.createElement("div");
    container.className = "login-container";

    // Sección morada
    const leftSection = document.createElement("div");
    leftSection.className = "left-section";

    const backArrow = document.createElement("span");
    backArrow.innerHTML = "←";
    backArrow.className = "back-arrow";
    leftSection.appendChild(backArrow);

    const title = document.createElement("h1");
    title.textContent = "Welcome Back!";
    leftSection.appendChild(title);

    const description = document.createElement("p");
    description.textContent =
        "Yay! You're back! Thanks for shopping with us. We have excited deals and promotions going on, grab your pick now!";
    leftSection.appendChild(description);

    const loginText = document.createElement("h3");
    loginText.textContent = "LOG IN";
    leftSection.appendChild(loginText);

    // Sección blanca
    const rightSection = document.createElement("div");
    rightSection.className = "right-section";

    // Email
    const emailLabel = document.createElement("label");
    emailLabel.textContent = "Email address";

    const emailInputWrapper = document.createElement("div");
    emailInputWrapper.className = "input-wrapper";
    emailInputWrapper.innerHTML = `
        <span class="icon"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"/></svg></span>
        <input type="email" placeholder="Enter your email">
        <span class="icon"><svg xmlns="<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M480-280q17 0 28.5-11.5T520-320q0-17-11.5-28.5T480-360q-17 0-28.5 11.5T440-320q0 17 11.5 28.5T480-280Zm-40-160h80v-240h-80v240Zm40 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg></span>
    `;

    // Password
    const passwordLabel = document.createElement("label");
    passwordLabel.textContent = "Password";

    const passwordInputWrapper = document.createElement("div");
    passwordInputWrapper.className = "input-wrapper";
    passwordInputWrapper.innerHTML = `
        <span class="icon"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M240-80q-33 0-56.5-23.5T160-160v-400q0-33 23.5-56.5T240-640h40v-80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720v80h40q33 0 56.5 23.5T800-560v400q0 33-23.5 56.5T720-80H240Zm0-80h480v-400H240v400Zm240-120q33 0 56.5-23.5T560-360q0-33-23.5-56.5T480-440q-33 0-56.5 23.5T400-360q0 33 23.5 56.5T480-280ZM360-640h240v-80q0-50-35-85t-85-35q-50 0-85 35t-35 85v80ZM240-160v-400 400Z"/></svg></span>
        <input type="password" placeholder="Enter your password">
    `;

    // Opciones
    const optionsRow = document.createElement("div");
    optionsRow.className = "options-row";
    optionsRow.innerHTML = `
        <label> <span class="icon"><svg xmlns="<svg xmlns="http://www.w3.org/2000/svg" height="15px" viewBox="0 -960 960 960" width="20px" fill="#1f1f1f"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg> Remember me</label>
        <a href="#">Forgot Password?</a>
    `;

    // Botón login
    const loginBtn = document.createElement("button");
    loginBtn.textContent = "LOG IN";
    loginBtn.className = "login-btn";

    // Crear cuenta
    const createAccount = document.createElement("p");
    createAccount.className = "create-account";
    createAccount.innerHTML = `Not registered yet? <a href="#">Create an Account</a>`;

    // Agregar elementos al formulario
    rightSection.appendChild(emailLabel);
    rightSection.appendChild(emailInputWrapper);
    rightSection.appendChild(passwordLabel);
    rightSection.appendChild(passwordInputWrapper);
    rightSection.appendChild(optionsRow);
    rightSection.appendChild(loginBtn);
    rightSection.appendChild(createAccount);

    // Agregar secciones al contenedor
    container.appendChild(leftSection);
    container.appendChild(rightSection);

    return container;
}

document.body.appendChild(login2());
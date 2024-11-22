document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    // Validação básica
    if (email === "admin@exemplo.com" && password === "123456") {
        message.style.color = "green";
        message.textContent = "Login bem-sucedido!";
        
        // Redireciona para sua página criada
        setTimeout(() => {
            window.location.href = "pgn2.html"; // Substitua pelo nome da sua página
        }, 1000); // Aguarda 1 segundo antes do redirecionamento
    } else {
        message.style.color = "red";
        message.textContent = "E-mail ou senha incorretos.";
    }
});

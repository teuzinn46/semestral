function mostrarNotificacao() {
    const notificacao = document.getElementById("notificacao");

    // Adiciona a classe para mostrar a notificação
    notificacao.classList.add("mostrar");

    // Remove a notificação após 3 segundos
    setTimeout(() => {
        notificacao.classList.remove("mostrar");
    }, 3000);
}

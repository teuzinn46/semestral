function mostrarNotificacao() {
    const notificacao = document.getElementById("notificacao");

    
    notificacao.classList.add("mostrar");

    
    setTimeout(() => {
        notificacao.classList.remove("mostrar");
    }, 3000);
}

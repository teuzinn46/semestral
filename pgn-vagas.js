/* Função para abrir e fechar o dropdown */
function toggleDropdown() {
    const dropdown = document.querySelector('.dropdown');
    dropdown.classList.toggle('show'); // Alterna a classe 'show' para abrir/fechar o dropdown
}

/* Fecha o dropdown se clicar fora dele */
window.onclick = function(event) {
    if (!event.target.matches('.dropdown-button')) {
        const dropdowns = document.getElementsByClassName("dropdown");
        for (let i = 0; i < dropdowns.length; i++) {
            const openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
function goBack(){
    window.history.back();
}

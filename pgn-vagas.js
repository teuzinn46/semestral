document.querySelector(".select-selected").addEventListener("click", function() {
    this.nextElementSibling.classList.toggle("show");
});

document.querySelectorAll(".select-items div").forEach(item => {
    item.addEventListener("click", function() {
        document.querySelector(".select-selected").innerText = this.innerText;
        this.parentElement.classList.remove("show");
    });
});

window.addEventListener("click", function(e) {
    if (!e.target.matches('.select-selected')) {
        document.querySelectorAll(".select-items").forEach(dropdown => {
            dropdown.classList.remove("show");
        });
    }
});

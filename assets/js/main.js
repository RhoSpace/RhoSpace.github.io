//Elimina o agrega clase intercaladamente al hacer click para crear un navbar en responsive
let togglebtn = document.getElementById("toggle");
let menuactive = document.getElementById("list");

togglebtn.addEventListener("click", function () {
    if (menuactive.className == "nav__list") {
        menuactive.classList.add("action");
    } else {
        menuactive.classList.remove("action");
    }
});

window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
        menuactive.classList.remove("action");
    }
});
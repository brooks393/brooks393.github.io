
const menu = document.querySelector(mobile-menu);
const menuLinks = document.querySelector('.nav-menu');

menu.addEventListener("click", () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})

function alertButton() {
    alert("hello world")
}
function games() {
    alert("games")
}

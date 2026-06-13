const menuBtn = document.querySelector("#menu-btn");
const navMenu = document.querySelector("#nav-menu");

menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("open");
});

document.querySelector("#lastModified").textContent =
`Last Modified: ${document.lastModified}`;
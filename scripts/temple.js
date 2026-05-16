// Footer Dynamic Year
document.getElementById("year").textContent = new Date().getFullYear();

// Last Modified Date
document.getElementById("lastModified").textContent = document.lastModified;

// Hamburger Menu
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("open");

    // Toggle icon
    if (menuBtn.textContent === "☰") {
        menuBtn.textContent = "✖";
    } else {
        menuBtn.textContent = "☰";
    }
});
document.addEventListener("DOMContentLoaded", () => {
    // Responsive Mobil Hamburg Menu Toggle
    const menuToggle = document.getElementById("menu-toggle");
    const mainNav = document.getElementById("main-nav");

    if (menuToggle && mainNav) {
        menuToggle.addEventListener("click", () => {
            mainNav.classList.toggle("open");
        });
    }

    // Dynamic Footer Injections
    const yearEl = document.getElementById("current-year");
    const modifiedEl = document.getElementById("last-modified");

    if (yearEl) yearEl.textContent = new Date().getFullYear();
    if (modifiedEl) modifiedEl.textContent = document.lastModified;
});
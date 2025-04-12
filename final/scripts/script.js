// last modified

document.addEventListener("DOMContentLoaded", () => {
    const footerDate = document.getElementById("last-updated");
    const now = new Date();
    const formattedDate = now.toLocaleDateString("es-ES", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    footerDate.textContent = `Última modificación: ${formattedDate}`;
});

// Menú responsve
const toggleBtn = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

toggleBtn.addEventListener("click", () => {
navLinks.classList.toggle("active");
});

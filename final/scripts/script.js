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
/* menu  */

// Última modificación en el footer (ya está)
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


// Filtros de productos
const filterButtons = document.querySelectorAll(".filter-btn");
const productCards = document.querySelectorAll(".product-card");

filterButtons.forEach(button => {
button.addEventListener("click", () => {
    const category = button.getAttribute("data-category");

    filterButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    productCards.forEach(card => {
        if (category === "all") {
            card.style.display = "block";
        } else {
            card.style.display = card.classList.contains(category) ? "block" : "none";
        }
    });
});
});



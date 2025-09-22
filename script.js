document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.querySelector(".menu-toggle");
    const menu = document.querySelector("header .menu");

    toggleButton.addEventListener("click", function () {
        menu.classList.toggle("show"); // Agrega o quita la clase que activa la animación
        toggleButton.classList.toggle("open"); // Para la animación del icono hamburguesa
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const botonWhatsApp = document.querySelector(".whatsapp-flotante");
    const footer = document.querySelector("footer"); // Asegúrate de que el footer tiene la etiqueta correcta

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                botonWhatsApp.classList.add("hidden"); // Oculta el botón cuando el footer aparece
            } else {
                botonWhatsApp.classList.remove("hidden"); // Muestra el botón cuando el footer no está visible
            }
        });
    });

    observer.observe(footer);
});


document.addEventListener("DOMContentLoaded", function () {
    const botonWhatsApp = document.querySelector(".whatsapp-flotante");
    const footer = document.querySelector("footer");
    const laPaz = document.querySelector(".lapaz");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                botonWhatsApp.classList.add("hidden");
            } else {
                botonWhatsApp.classList.remove("hidden");
            }
        });
    });

    observer.observe(laPaz);
    observer.observe(footer);
});

let currentIndex = 0;
const images = document.querySelectorAll(".galeria img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

// Abrir el Lightbox con una imagen específica
function openLightbox(index) {
    currentIndex = index;
    lightbox.style.display = "flex";
    lightboxImg.src = images[currentIndex].src;
    document.addEventListener("keydown", handleKeyPress); // Agregar eventos del teclado
}

// Cerrar el Lightbox
function closeLightbox() {
    lightbox.style.display = "none";
    document.removeEventListener("keydown", handleKeyPress); // Remover eventos del teclado
}

// Cambiar imagen (con flechas del lightbox)
function changeImage(direction) {
    currentIndex += direction;
    if (currentIndex < 0) {
        currentIndex = images.length - 1; // Ir a la última imagen
    } else if (currentIndex >= images.length) {
        currentIndex = 0; // Volver a la primera imagen
    }
    lightboxImg.src = images[currentIndex].src;
}

// Manejar teclas del teclado
function handleKeyPress(event) {
    if (event.key === "ArrowRight") {
        changeImage(1); // Flecha derecha: siguiente imagen
    } else if (event.key === "ArrowLeft") {
        changeImage(-1); // Flecha izquierda: imagen anterior
    } else if (event.key === "Escape") {
        closeLightbox(); // Esc: cerrar el lightbox
    }
}

lightbox.addEventListener("click", function (event) {
    if (event.target === lightbox) {
        closeLightbox();
    }
});

function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({
        behavior: 'smooth',
        block: "center"
    });
}







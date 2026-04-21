// script.js — Portafolio de Luis Fuentes (Semana 3)
// Interactividad básica con JavaScript y manipulación del DOM

// ============================================================
// 1. MENSAJE DE BIENVENIDA AL CARGAR LA PÁGINA
// ============================================================
window.addEventListener("load", function () {
    const mensaje = document.getElementById("mensaje-bienvenida");
    if (mensaje) {
        mensaje.style.display = "block"; // Muestra el mensaje
        mensaje.textContent = "👋 ¡Bienvenido a mi portafolio! Soy Luis Fuentes.";
    }
});

// ============================================================
// 2. CAMBIAR TEXTO DEL PÁRRAFO AL HACER CLIC
// ============================================================
const btnCambiarTexto = document.getElementById("btn-cambiar-texto");

if (btnCambiarTexto) {
    btnCambiarTexto.addEventListener("click", function () {
        const parrafo = document.getElementById("texto-dinamico");
        if (parrafo.textContent.includes("Python")) {
            // Cambia al texto alternativo
            parrafo.textContent = "🚀 Mi meta es combinar la administración de empresas con el desarrollo de software para crear soluciones innovadoras.";
            btnCambiarTexto.textContent = "Mostrar texto original";
        } else {
            // Vuelve al texto original
            parrafo.textContent = "Actualmente estoy fortaleciendo mis habilidades en Python.";
            btnCambiarTexto.textContent = "¿Cuál es mi meta?";
        }
    });
}

// ============================================================
// 3. MOSTRAR / OCULTAR CONTENIDO CON UN BOTÓN (toggle)
// ============================================================
const btnToggle = document.getElementById("btn-toggle-info");

if (btnToggle) {
    btnToggle.addEventListener("click", function () {
        const infoExtra = document.getElementById("info-extra");
        const estaVisible = infoExtra.style.display === "block";

        if (estaVisible) {
            infoExtra.style.display = "none";        // Oculta el contenido
            btnToggle.textContent = "Ver mis habilidades";
        } else {
            infoExtra.style.display = "block";       // Muestra el contenido
            btnToggle.textContent = "Ocultar habilidades";
        }
    });
}
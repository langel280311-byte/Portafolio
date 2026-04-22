// mensaje de bienvenida al cargar la página
window.addEventListener("load", function () {
    const mensaje = document.getElementById("mensaje-bienvenida");
    if (mensaje) {
        mensaje.style.display = "block"; // Muestra el mensaje
        mensaje.textContent = "Bienvenido a mi portafolio";
    }
});

// cargar texto dinámico al hacer clic en el botón
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

// mostrar/ocultar sección de habilidades al hacer clic en el botón
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
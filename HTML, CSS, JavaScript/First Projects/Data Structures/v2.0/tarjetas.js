/* Abre y cierra los paneles de cada estructura y anima los botones de imagen */
function cerrarPanelAbierto() {
    document.querySelectorAll(".panel-fondo.abierto").forEach((panel) => panel.classList.remove("abierto"));
    document.body.style.overflow = "";
}

document.addEventListener("click", (e) => {
    const tarjeta = e.target.closest(".tarjeta-estructura");
    if (tarjeta) {
        document.getElementById(tarjeta.dataset.panel).classList.add("abierto");
        document.body.style.overflow = "hidden";
        return;
    }
    if (e.target.closest(".boton-cerrar-panel") || e.target.classList.contains("panel-fondo")) cerrarPanelAbierto();

    const botonImagen = e.target.closest(".boton-imagen");
    if (botonImagen) {
        botonImagen.classList.remove("animacion-pulso");
        void botonImagen.offsetWidth; // reinicia la animación
        botonImagen.classList.add("animacion-pulso");
    }
});

document.addEventListener("keydown", (e) => { if (e.key === "Escape") cerrarPanelAbierto(); });
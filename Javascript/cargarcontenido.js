// Función para cargar contenido desde un archivo HTML
function cargarContenido(url, id) {
  fetch(url)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById(id).innerHTML = data;
    })
    .catch((error) => console.error("Error al cargar el contenido:", error));
}

// Cargar el header y footer
window.onload = function () {
  cargarContenido("header.html", "header");
  cargarContenido("footer.html", "footer");
};

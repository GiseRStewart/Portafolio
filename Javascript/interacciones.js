// Mostrar/ocultar análisis
document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.querySelector("#toggle-analisis");
  const parrafo = document.getElementById("anap");

  if (toggleBtn && parrafo) {
    toggleBtn.addEventListener("click", () => {
      // Cambiar el display del párrafo
      if (parrafo.style.display === "none") {
        parrafo.style.display = "block";
        toggleBtn.textContent = "Ocultar Análisis"; // Cambia el texto del botón
      } else {
        parrafo.style.display = "none";
        toggleBtn.textContent = "Mostrar Análisis"; // Cambia el texto del botón
      }
    });
  }
});
// Cambiar color del título al pasar el mouse
document.addEventListener("DOMContentLoaded", () => {
  const titulo = document.querySelector("h1");
  if (titulo) {
    titulo.addEventListener("mouseover", () => {
      titulo.style.color = "#800080";
    });

    titulo.addEventListener("mouseout", () => {
      titulo.style.color = "";
    });
  }

  // Animación al hacer clic en imágenes
  const imagenes = document.querySelectorAll(".campo-img");
  imagenes.forEach((img) => {
    img.addEventListener("click", () => {
      img.style.transform = "scale(1.1)";
      img.style.transition = "transform 0.3s";
      setTimeout(() => {
        img.style.transform = "scale(1)";
      }, 300);
    });
  });

  // Barra de progreso de scroll
  // Barra de progreso de scroll que desaparece al llegar al final
  window.addEventListener("scroll", () => {
    const barra = document.getElementById("barra-progreso");
    const container = document.getElementById("barra-progreso-container");
    const scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const porcentaje = (scrollTop / scrollHeight) * 100;

    barra.style.width = porcentaje + "%";

    if (porcentaje >= 99.5) {
      container.style.opacity = 0; // Ocultar suavemente
    } else {
      container.style.opacity = 1; // Mostrar si no está al final
    }
  });

  // Animaciones al cargar contenido
  const gridItems = document.querySelectorAll(".grid-item");
  gridItems.forEach((item, index) => {
    item.style.opacity = 0;
    item.style.transform = "translateY(30px)";
    item.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    setTimeout(() => {
      item.style.opacity = 1;
      item.style.transform = "translateY(0)";
    }, 200 * index);
  });
  //Menú hamburguesa
  document.addEventListener("DOMContentLoaded", function () {
    const checkBtn = document.querySelector(".checkbtn");
    const menu = document.querySelector(".menu ul");

    checkBtn.addEventListener("click", function () {
      if (menu.style.display === "block") {
        menu.style.display = "none";
      } else {
        menu.style.display = "block";
      }
    });

    // Opcional: cerrar menú al hacer clic en un enlace
    const menuLinks = document.querySelectorAll(".menu ul li a");
    menuLinks.forEach((link) => {
      link.addEventListener("click", () => {
        if (window.innerWidth <= 768) {
          menu.style.display = "none";
        }
      });
    });
  });
});

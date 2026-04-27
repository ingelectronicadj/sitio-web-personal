/* Funcionalidad Modo Oscuro */
function toggleContrast(classContrast) {
  // Refactor: Aplicar clase basándose en el estado explícito del checkbox para consistencia
  const isDark = document.getElementById("checkSwitch").checked;
  if (isDark) {
    document.body.classList.add(classContrast);
  } else {
    document.body.classList.remove(classContrast);
  }
}

function setContrast() {
  let status_btn_contrast = document.getElementById("checkSwitch").checked;
  localStorage.setItem("status_contrast", status_btn_contrast);
}

function getContrast() {
  let status_contrast_localStorage = localStorage.getItem("status_contrast");
  if (status_contrast_localStorage === "true") {
    document.getElementById("checkSwitch").checked = true;
    document.body.classList.add("dark");
  } else if (status_contrast_localStorage === "false") {
    document.getElementById("checkSwitch").checked = false;
    document.body.classList.remove("dark");
  } else {
    setContrast();
  }
}

/* Funcionalidad para dar foco a encabezados de sección 
    de acuerdo a elementos de navegación */
function handleClickFocus(event) {
  event.preventDefault(); // Evitar la acción predeterminada del enlace
  const targetId = this.getAttribute("href"); // Obtener el ID del destino
  const targetElement = document.querySelector(targetId); // Seleccionar el elemento destino
  if (targetElement) {
    targetElement.tabIndex = -1; // Establecer el índice de tabulación para permitir el enfoque
    targetElement.focus(); // Enfocar el elemento destino
    targetElement.removeAttribute("tabindex"); // Eliminar el índice de tabulación después del enfoque
  }
}

function ocultarIconosInaccesibles() {
  let iconos = document.querySelectorAll('.mb2mm-arrow, [class^="fab fa-"]'); //.iconel i, .static-icon i, ...
  // Verificar si se encontraron iconos antes de intentar ocultarlos
  if (iconos.length === 0) {
    console.warn("No se encontraron iconos para ocultar.");
    return;
  }
  iconos.forEach(function (icono) {
    icono.setAttribute("aria-hidden", "true");
  });
}

function agregarSpanEnlacesExternos() {
  let enlacesExternos = document.querySelectorAll(".link-new-window");
  if (enlacesExternos.length === 0) {
    console.warn('No se encontraron enlaces con la clase .link-new-window".');
    return;
  }
  enlacesExternos.forEach(function (enlace) {
    let span = document.createElement("span");
    span.textContent = "(Abre en una nueva ventana)";
    span.classList.add("sr-only");
    enlace.appendChild(span);
  });
}

function syncToggleWithBodyClass() {
  const checkSwitch = document.getElementById("checkSwitch");
  if (!checkSwitch) return;

  const observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
      if (mutation.attributeName === "class") {
        const isDark = document.body.classList.contains("dark");
        if (checkSwitch.checked !== isDark) {
          checkSwitch.checked = isDark;
          localStorage.setItem("status_contrast", isDark);
        }
      }
    });
  });

  observer.observe(document.body, { attributes: true });
}

// DOM Listo
document.addEventListener("DOMContentLoaded", () => {
  const status_btn_contrast = document.getElementById("checkSwitch");
  status_btn_contrast.addEventListener("click", setContrast);
  getContrast();
  syncToggleWithBodyClass();
  ocultarIconosInaccesibles();
  agregarSpanEnlacesExternos();

  const menuLinks = document.querySelectorAll(".navbar-nav .nav-link");
  menuLinks.forEach((link) => {
    link.addEventListener("click", handleClickFocus);
  });
});

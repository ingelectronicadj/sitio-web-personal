/**
 * pagination.js
 * Lógica de paginación para la sección de artículos (Blog)
 */
document.addEventListener('DOMContentLoaded', () => {
  const articles = document.querySelectorAll('#blog article.resume-item');
  const paginationContainer = document.querySelector('.blog-pagination-container');
  const prevBtn = document.getElementById('prevPageBtn');
  const nextBtn = document.getElementById('nextPageBtn');
  const paginationNumbers = document.getElementById('paginationNumbers');
  const itemsPerPageSelect = document.getElementById('itemsPerPage');

  // Si no hay artículos o no está el contenedor, no hacer nada
  if (!paginationContainer || articles.length === 0) {
    if (paginationContainer) paginationContainer.style.display = 'none';
    return;
  }

  let currentPage = 1;
  let itemsPerPage = parseInt(itemsPerPageSelect.value);
  const totalArticles = articles.length;

  /**
   * Muestra u oculta los artículos basándose en la página actual
   */
  function displayArticles() {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    articles.forEach((article, index) => {
      if (index >= startIndex && index < endIndex) {
        article.classList.remove('d-none');
        article.classList.add('d-flex');
      } else {
        article.classList.remove('d-flex');
        article.classList.add('d-none');
      }
    });

    updatePaginationState();
  }

  /**
   * Actualiza el estado visual de los controles de paginación
   */
  function updatePaginationState() {
    const totalPages = Math.ceil(totalArticles / itemsPerPage);

    // Actualizar botones de anterior/siguiente
    if (currentPage === 1) {
      prevBtn.setAttribute('disabled', 'true');
      prevBtn.setAttribute('aria-disabled', 'true');
    } else {
      prevBtn.removeAttribute('disabled');
      prevBtn.removeAttribute('aria-disabled');
    }

    if (currentPage === totalPages || totalPages === 0) {
      nextBtn.setAttribute('disabled', 'true');
      nextBtn.setAttribute('aria-disabled', 'true');
    } else {
      nextBtn.removeAttribute('disabled');
      nextBtn.removeAttribute('aria-disabled');
    }

    // Generar botones de números dinámicamente
    paginationNumbers.innerHTML = '';
    
    // Siempre mostrar el paginador
    paginationContainer.style.display = 'flex';

    for (let i = 1; i <= totalPages; i++) {
      const li = document.createElement('li');
      const button = document.createElement('button');
      button.classList.add('pagination-number-btn');
      button.textContent = i;
      button.setAttribute('aria-label', `Página ${i}`);
      
      if (i === currentPage) {
        button.classList.add('active');
        button.setAttribute('aria-current', 'page');
      }

      button.addEventListener('click', () => {
        currentPage = i;
        displayArticles();
      });

      li.appendChild(button);
      paginationNumbers.appendChild(li);
    }
  }

  // Event Listeners
  prevBtn.addEventListener('click', () => {
    if (currentPage > 1) {
      currentPage--;
      displayArticles();
    }
  });

  nextBtn.addEventListener('click', () => {
    const totalPages = Math.ceil(totalArticles / itemsPerPage);
    if (currentPage < totalPages) {
      currentPage++;
      displayArticles();
    }
  });

  itemsPerPageSelect.addEventListener('change', (e) => {
    itemsPerPage = parseInt(e.target.value);
    currentPage = 1; // Reiniciar a la primera página al cambiar cantidad
    displayArticles();
  });

  // Inicialización
  displayArticles();
});

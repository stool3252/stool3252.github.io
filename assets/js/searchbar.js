const searchInput = document.getElementById('searchbarInput');
const searchButton = document.getElementById('searchButton');

function performSearch() {
    const query = searchInput.value.toLowerCase().trim();

    // 1. Buscar y filtrar .group1__container (por ejemplo, en index.html)
    const groupContainers = document.querySelectorAll('.group1__container');
    if (groupContainers.length > 0) {
        groupContainers.forEach(container => {
            const text = container.textContent.toLowerCase();
            container.style.display = text.includes(query) ? 'block' : 'none';
        });
    }

    // 2. Buscar y filtrar filas de tabla de descargas (por ejemplo, en scripts.html)
    const downloadRows = document.querySelectorAll('.downloads__row');

    // Si hay al menos 2 filas (una cabecera y datos), aplica filtro
    if (downloadRows.length > 1) {
        downloadRows.forEach((row, index) => {
            // Ignorar la primera fila si es encabezado
            const isHeader = row.querySelectorAll('th').length > 0;
            if (isHeader) return;

            const rowText = row.textContent.toLowerCase();
            row.style.display = rowText.includes(query) ? '' : 'none';
        });
    }

    // 3. (Opcional) Añade más secciones aquí si en el futuro filtras otra cosa
}

// Eventos
searchButton?.addEventListener('click', (e) => {
    e.preventDefault();
    performSearch();
});

searchInput?.addEventListener('input', performSearch);

searchInput?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        performSearch();
    }
});

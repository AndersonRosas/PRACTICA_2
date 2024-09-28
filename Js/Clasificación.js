const categoryfilter = document.getElementById("categoryFilter");
const content = document.querySelectorAll(".content");

categoryfilter.addEventListener("change", filtarCategorias);

function filtarCategorias() {
  const categoriaSeleccionada = categoryfilter.value;
  content.forEach((movie) => {
    const categoria = movie.getAttribute("data-category");
    if (
      categoriaSeleccionada === "todo" ||
      categoria === categoriaSeleccionada
    ) {
      movie.style.display = "block";
    } else {
      movie.style.display = "none";
    }
  });
}

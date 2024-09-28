const movieCards = document.querySelectorAll(".movie-card");

movieCards.forEach((card) => {
  card.addEventListener("click", function (event) {
    if (!event.target.classList.contains("favorite-btn")) {
      const movieTittle = this.querySelector("h3").textContent;
      const movieDescription = this.querySelector("p").textContent;
      const movieImage = this.querySelector(".movie-img").src;

      document.getElementById("movieTittle").textContent = movieTittle;
      document.getElementById("movieDescription").textContent =
        movieDescription;
      document.getElementById("modalMovieImage").src = movieImage;

      document.getElementById("movieModal").style.display = "block";
    }
  });
});

function closeModal() {
  document.getElementById("movieModal").style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {
  const stars = document.querySelectorAll('.star');
  const ratingValue = document.getElementById('rating-value');

  stars.forEach(function (star) {
      star.addEventListener('click', function () {
          const value = this.dataset.value;
          updateRating(value);
      });
  });

  function updateRating(value) {
      ratingValue.innerText = 'Calificación: ' + value;
      stars.forEach(function (star) {
          star.classList.remove('active');
      });

      for (let i = 0; i < value; i++) {
          stars[i].classList.add('active');
      }
  }
});
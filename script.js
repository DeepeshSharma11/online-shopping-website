
  window.addEventListener("scroll", () => {
    const boxes = document.querySelectorAll(".feature-box");
    boxes.forEach(box => {
      const boxTop = box.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (boxTop < windowHeight - 50) {
        box.classList.add("show");
      } else {
        box.classList.remove("show"); // scroll upar jaoge to hide ho jaye
      }
    });
  });

  const stars = document.querySelectorAll('.star');
  const ratingText = document.querySelector('.rating-text');
  let selectedRating = 0;

  stars.forEach(star => {
    star.addEventListener('mouseover', () => {
      resetStars();
      highlightStars(star.dataset.value);
    });

    star.addEventListener('mouseout', () => {
      resetStars();
      highlightStars(selectedRating);
    });

    star.addEventListener('click', () => {
      selectedRating = star.dataset.value;
      ratingText.textContent = `You rated this ${selectedRating} star${selectedRating > 1 ? 's' : ''}!`;
    });
  });

  function resetStars() {
    stars.forEach(s => s.classList.remove('hover', 'selected'));
  }

  function highlightStars(count) {
    stars.forEach(s => {
      if (s.dataset.value <= count) {
        s.classList.add('hover');
      }
    });
  }


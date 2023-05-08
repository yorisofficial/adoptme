// navbar section
const navbar = document.getElementById('nav');

window.addEventListener('scroll', function () {
  navbar.classList.toggle('bg-white', window.scrollY > 10);
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});



// Ambil semua elemen dengan class "card-content"
const cards = document.querySelectorAll('#card');

cards.forEach(card => {
  const layerCard = card.querySelector('#layer-card');
  card.addEventListener('mouseover', () => {
    layerCard.classList.remove('hidden');
  });

  card.addEventListener('mouseout', () => {
    layerCard.classList.add('hidden');
  });
});


// content card scroll
const container = document.getElementById('O-content');
const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');

const scrollAmount = 200;

btnNext.addEventListener('click', () => {
  container.scrollLeft += scrollAmount;
});

btnPrev.addEventListener('click', () => {
  container.scrollLeft -= scrollAmount;
});

// FAQ section
const btnShowList = document.querySelectorAll("#btn-show");

btnShowList.forEach((btnShow) => {
  btnShow.addEventListener("click", () => {
    btnShow.classList.toggle("active");

    const btnIcon = btnShow.querySelector("#btn-icon");
    const deskContent = btnShow.nextElementSibling;

    if (btnShow.classList.contains("active")) {
      btnIcon.classList.remove("fa-chevron-down");
      btnIcon.classList.add("fa-chevron-up");

      deskContent.classList.remove("hidden");
    } else {
      btnIcon.classList.remove("fa-chevron-up");
      btnIcon.classList.add("fa-chevron-down");

      deskContent.classList.add("hidden");
    }

    btnShowList.forEach((otherBtnShow) => {
      if (otherBtnShow !== btnShow) {
        otherBtnShow.classList.remove("active");
        otherBtnShow.querySelector("#btn-icon").classList.remove("fa-chevron-up");
        otherBtnShow.querySelector("#btn-icon").classList.add("fa-chevron-down");
        otherBtnShow.nextElementSibling.classList.add("hidden");
      }
    });
  });
});











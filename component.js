// Menentukan jumlah perulangan
const numCards = 5;

// Memilih elemen dengan id "O-content"
const oContent = document.getElementById("O-content");

// Looping sebanyak numCards
for (let i = 0; i < numCards; i++) {
  // Membuat elemen div baru dengan class "card" dan "shrink-0"
  const card = document.createElement("div");
  card.classList.add("card", "shrink-0", "bg-gray-50", "rounded-xl", "hover:drop-shadow-2xl");
  card.id = "card"; // Menambahkan id untuk setiap elemen

  // Menambahkan isi dari elemen div
  card.innerHTML = `
    <div class="px-5">
      <div class="relative">
        <img src="http://source.unsplash.com/300x400/?animals" alt="gambar" class="mt-5 rounded-xl">
        <div id="layer-card" class="hidden absolute h-full w-full top-0 left-0 bg-gray-900 bg-opacity-50 rounded-xl">
          <a href="" class="absolute bg-primary text-gray-50 px-6 py-3 rounded-xl top-1/2 left-1/2 -translate-x-1/2">Adopt</a>
        </div>
      </div>
    </div>
    <div class="my-2 text-center">
      <h1>Lorem, ipsum dolor.</h1>
      <p>Lorem ipsum dolor sit amet.</p>
    </div>
  `;

  // Menambahkan elemen baru ke dalam elemen dengan id "O-content"
  oContent.appendChild(card);
}

// JavaScript count up
// Ambil elemen-elemen dengan id yang ingin dihitung
const count1 = document.getElementById("count-1");
const count2 = document.getElementById("count-2");
const count3 = document.getElementById("count-3");

// Fungsi untuk mengecek apakah elemen tersebut sudah terlihat di layar
function isElementInView(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Fungsi untuk memulai animasi count up
function startCountUp() {
  // Jika elemen count1 terlihat di layar, jalankan animasi count up
  if (isElementInView(count1)) {
    const target1 = Number(count1.getAttribute("data-target"));
    let countTo1 = 0;
    const countInterval1 = setInterval(() => {
      if (countTo1 < target1) {
        countTo1 += Math.ceil(target1 / 50);
        count1.innerText = countTo1.toLocaleString();
      } else {
        clearInterval(countInterval1);
      }
    }, 20);
  }

  // Lakukan hal yang sama untuk elemen count2 dan count3
  if (isElementInView(count2)) {
    const target2 = Number(count2.getAttribute("data-target"));
    let countTo2 = 0;
    const countInterval2 = setInterval(() => {
      if (countTo2 < target2) {
        countTo2 += Math.ceil(target2 / 50);
        count2.innerText = countTo2.toLocaleString();
      } else {
        clearInterval(countInterval2);
      }
    }, 20);
  }

  if (isElementInView(count3)) {
    const target3 = Number(count3.getAttribute("data-target"));
    let countTo3 = 0;
    const countInterval3 = setInterval(() => {
      if (countTo3 < target3) {
        countTo3 += Math.ceil(target3 / 50);
        count3.innerText = countTo3.toLocaleString();
      } else {
        clearInterval(countInterval3);
      }
    }, 20);
  }
}

// Jalankan fungsi startCountUp setiap kali halaman di-scroll
window.addEventListener("scroll", startCountUp);







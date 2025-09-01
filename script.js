document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".product-card");
  const modal = document.getElementById("productModal");
  const modalImg = document.getElementById("modalImg");
  const modalTitle = document.getElementById("modalTitle");
  const modalDesc = document.getElementById("modalDesc");
  const modalPacks = document.getElementById("modalPacks");
  const closeBtn = document.querySelector(".modal .close");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");

  let currentIndex = 0;
  let products = [];

  // Collect product data
  cards.forEach((card, index) => {
    products.push({
      title: card.dataset.title,
      desc: card.dataset.description,
      packs: card.dataset.packs,
      img: card.dataset.img
    });

    card.addEventListener("click", () => {
      currentIndex = index;
      openModal(products[currentIndex]);
    });
  });

  function openModal(product) {
    modal.style.display = "block";
    modalImg.src = product.img;
    modalTitle.textContent = product.title;
    modalDesc.textContent = product.desc;
    modalPacks.textContent = product.packs;
  }

  function closeModal() {
    modal.style.display = "none";
  }

  function showNext() {
    currentIndex = (currentIndex + 1) % products.length;
    openModal(products[currentIndex]);
  }

  function showPrev() {
    currentIndex = (currentIndex - 1 + products.length) % products.length;
    openModal(products[currentIndex]);
  }

  closeBtn.addEventListener("click", closeModal);
  nextBtn.addEventListener("click", showNext);
  prevBtn.addEventListener("click", showPrev);

  window.addEventListener("click", (e) => {
    if (e.target == modal) closeModal();
  });
});
// ===== Popup Advertisement control =====
document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById('adModal');
  const closeBtn = modal.querySelector('.ad-close');
  const backdrop = modal.querySelector('.ad-backdrop');

  // Show popup when page loads
  modal.classList.add('show');
  modal.setAttribute('aria-hidden','false');

  function close(){
    modal.classList.remove('show');
    modal.setAttribute('aria-hidden','true');
  }

  closeBtn.addEventListener('click', close);
  backdrop.addEventListener('click', close);
});



document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".slide");
  const slidesContainer = document.querySelector(".slides");
  const prev = document.querySelector(".prev");
  const next = document.querySelector(".next");
  const dotsContainer = document.querySelector(".dots");

  let index = 0;
  let timer;

  // Create dots dynamically
  slides.forEach((_, i) => {
    const dot = document.createElement("span");
    dot.addEventListener("click", () => {
      showSlide(i);
      restartAuto();
    });
    dotsContainer.appendChild(dot);
  });

  function showSlide(n) {
    index = (n + slides.length) % slides.length;
    slidesContainer.style.transform = `translateX(${-index * 100}%)`;
    document.querySelectorAll(".dots span").forEach((dot, i) => {
      dot.classList.toggle("active", i === index);
    });
  }

  function nextSlide() {
    showSlide(index + 1);
  }

  function prevSlide() {
    showSlide(index - 1);
  }

  function startAuto() {
    timer = setInterval(nextSlide, 4000); // 4s interval
  }

  function stopAuto() {
    clearInterval(timer);
  }

  function restartAuto() {
    stopAuto();
    startAuto();
  }

  prev.addEventListener("click", () => {
    prevSlide();
    restartAuto();
  });

  next.addEventListener("click", () => {
    nextSlide();
    restartAuto();
  });

  showSlide(index);
  startAuto();
});

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector("nav ul");

  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("show");
  });
});

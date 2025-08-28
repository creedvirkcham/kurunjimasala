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

// Mobile nav toggle
document.addEventListener("DOMContentLoaded", function () {
  const navToggle = document.getElementById("navToggle");
  const mobileNav = document.getElementById("mobileNav");

  if (navToggle && mobileNav) {
    navToggle.addEventListener("click", function () {
      const expanded = navToggle.getAttribute("aria-expanded") === "true";
      navToggle.setAttribute("aria-expanded", String(!expanded));
      if (mobileNav.style.display === "block") {
        mobileNav.style.display = "none";
        mobileNav.setAttribute("aria-hidden", "true");
      } else {
        mobileNav.style.display = "block";
        mobileNav.setAttribute("aria-hidden", "false");
      }
    });

    // Close mobile menu when clicking outside
    document.addEventListener("click", function (e) {
      if (!mobileNav.contains(e.target) && !navToggle.contains(e.target)) {
        mobileNav.style.display = "none";
        mobileNav.setAttribute("aria-hidden", "true");
        navToggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  // Close button for ad modal
  const adModal = document.getElementById("adModal");
  if (adModal) {
    const closeBtn = adModal.querySelector(".ad-close");
    if (closeBtn) {
      closeBtn.addEventListener("click", function () {
        adModal.classList.remove("show");
      });
      // show modal on load (if has image)
      setTimeout(function () {
        adModal.classList.add("show");
      }, 800);
    }
  }
});

const header = document.querySelector("[data-header]");
const toggle = document.querySelector("[data-menu-toggle]");
const nav = document.querySelector("[data-nav]");
const galleryImages = [...document.querySelectorAll(".hero-gallery img")];
const motionToggle = document.querySelector("[data-motion-toggle]");
let currentSlide = 0;
let galleryPaused = false;
let galleryTimer;

function updateHeader() {
  header?.classList.toggle("is-scrolled", window.scrollY > 18);
}

function openNav(open) {
  toggle?.setAttribute("aria-expanded", String(open));
  nav?.classList.toggle("is-open", open);
  header?.classList.toggle("is-open", open);
}

function showSlide(index) {
  galleryImages.forEach((image, imageIndex) => {
    image.classList.toggle("is-active", imageIndex === index);
  });
}

function startGallery() {
  clearInterval(galleryTimer);
  galleryTimer = setInterval(() => {
    if (galleryPaused || galleryImages.length < 2) return;
    currentSlide = (currentSlide + 1) % galleryImages.length;
    showSlide(currentSlide);
  }, 3600);
}

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();
startGallery();

toggle?.addEventListener("click", () => {
  openNav(toggle.getAttribute("aria-expanded") !== "true");
});

nav?.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement || event.target instanceof HTMLButtonElement) {
    openNav(false);
  }
});

motionToggle?.addEventListener("click", () => {
  galleryPaused = !galleryPaused;
  motionToggle.setAttribute("aria-pressed", String(galleryPaused));
  motionToggle.textContent = galleryPaused ? "Play gallery" : "Pause gallery";
});

document.querySelectorAll("[data-open-modal]").forEach((trigger) => {
  trigger.addEventListener("click", () => {
    const modalName = trigger.getAttribute("data-open-modal");
    const modal = document.querySelector(`[data-modal="${modalName}"]`);
    if (modal instanceof HTMLDialogElement) modal.showModal();
  });
});

document.querySelectorAll(".modal").forEach((modal) => {
  modal.addEventListener("click", (event) => {
    if (event.target === modal && modal instanceof HTMLDialogElement) modal.close();
  });
});

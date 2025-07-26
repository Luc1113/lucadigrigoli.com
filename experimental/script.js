const buttons = document.querySelectorAll('#top-bar button');
const wrapper = document.getElementById('sections-wrapper');

// Scroll to section on nav click
buttons.forEach((btn, idx) => {
  btn.addEventListener('click', () => {
    wrapper.scrollTo({
      left: idx * window.innerWidth,
      behavior: 'smooth'
    });
    setActive(idx);
  });
});

// Set active nav button
function setActive(idx) {
  buttons.forEach((b, i) => b.classList.toggle('active', i === idx));
}

// Update active nav on scroll
function updateActiveOnScroll() {
  const scrollLeft = wrapper.scrollLeft;
  const idx = Math.round(scrollLeft / window.innerWidth);
  setActive(idx);
}
wrapper.addEventListener('scroll', updateActiveOnScroll);

// Set initial active button
setActive(0);

// Touch and drag navigation for mobile
let startX = null;
let scrollStart = null;
wrapper.addEventListener('touchstart', function(e) {
  if (e.touches.length === 1) {
    startX = e.touches[0].clientX;
    scrollStart = wrapper.scrollLeft;
  }
});
wrapper.addEventListener('touchmove', function(e) {
  if (startX !== null) {
    const dx = startX - e.touches[0].clientX;
    wrapper.scrollLeft = scrollStart + dx;
  }
});
wrapper.addEventListener('touchend', function() {
  const idx = Math.round(wrapper.scrollLeft / window.innerWidth);
  wrapper.scrollTo({
    left: idx * window.innerWidth,
    behavior: 'smooth'
  });
  setActive(idx);
  startX = null;
  scrollStart = null;
});

// Optional: Keyboard navigation (left/right)
document.addEventListener('keydown', function(e) {
  let idx = [...buttons].findIndex(b => b.classList.contains('active'));
  if (e.key === 'ArrowRight' && idx < buttons.length - 1) {
    buttons[idx + 1].click();
  } else if (e.key === 'ArrowLeft' && idx > 0) {
    buttons[idx - 1].click();
  }
});

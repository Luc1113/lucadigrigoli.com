// Accessibility enhancement: focus on main content when skip nav is activated
document.querySelector('.skip-nav').addEventListener('click', function(e) {
  document.getElementById('main-content').focus();
});

// Simple interactive feedback for toolbar buttons
document.querySelectorAll('.toolbar button').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.classList.add('active');
    setTimeout(() => btn.classList.remove('active'), 200);
  });
});

// Example: search bar focus styling
const searchBar = document.querySelector('.search-bar');
if (searchBar) {
  searchBar.addEventListener('focus', () => {
    searchBar.style.background = 'rgba(220,235,255,0.98)';
  });
  searchBar.addEventListener('blur', () => {
    searchBar.style.background = 'rgba(240,245,255,0.9)';
  });
}

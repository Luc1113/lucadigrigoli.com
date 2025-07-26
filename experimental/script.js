document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").slice(1);
    const target = document.getElementById(targetId);
    target.scrollIntoView({ behavior: "smooth", inline: "start" });
  });
});

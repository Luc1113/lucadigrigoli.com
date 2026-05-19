const locations = [
  {
    title: "Downtown, CA",
    address: "101 Market Street, Downtown, CA 90000",
    hours: "Today: 11:00 AM - 9:00 PM",
    label: "AVCO Pizza Co."
  },
  {
    title: "Westside, CA",
    address: "22 Olive Avenue, Westside, CA 90001",
    hours: "Today: 11:30 AM - 10:00 PM",
    label: "AVCO Pizza Co."
  },
  {
    title: "North End, CA",
    address: "800 Hearth Lane, North End, CA 90002",
    hours: "Today: 12:00 PM - 9:00 PM",
    label: "AVCO Pizza Co."
  }
];

const navToggle = document.querySelector("[data-nav-toggle]");
const nav = document.querySelector("[data-nav]");

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    const open = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!open));
    nav.classList.toggle("is-open", !open);
    document.body.classList.toggle("nav-open", !open);
  });

  nav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      navToggle.setAttribute("aria-expanded", "false");
      nav.classList.remove("is-open");
      document.body.classList.remove("nav-open");
    }
  });
}

const tabs = document.querySelectorAll("[data-location-tab]");
const panel = document.querySelector("[data-location-panel]");

function setLocation(index) {
  const location = locations[index] || locations[0];
  tabs.forEach((tab, tabIndex) => {
    tab.setAttribute("aria-selected", String(tabIndex === index));
  });

  if (!panel) return;
  panel.querySelector("[data-location-label]").textContent = location.label;
  panel.querySelector("[data-location-title]").textContent = location.title;
  panel.querySelector("[data-location-address]").textContent = location.address;
  panel.querySelector("[data-location-hours]").textContent = location.hours;
}

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    setLocation(Number(tab.dataset.locationTab || 0));
  });
});

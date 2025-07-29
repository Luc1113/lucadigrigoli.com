// Navigation smooth scrolling
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").slice(1);
    const target = document.getElementById(targetId);
    target.scrollIntoView({ behavior: "smooth", inline: "start" });
  });
});

// Clock functionality
function updateClock() {
  const now = new Date();
  const hours = now.getHours() % 12;
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  
  // Calculate angles for each hand
  const hourAngle = (hours * 30) + (minutes * 0.5); // 30 degrees per hour + minute adjustment
  const minuteAngle = minutes * 6; // 6 degrees per minute
  const secondAngle = seconds * 6; // 6 degrees per second
  
  // Apply rotations to hands
  const hourHand = document.getElementById('hourHand');
  const minuteHand = document.getElementById('minuteHand');
  const secondHand = document.getElementById('secondHand');
  
  if (hourHand) hourHand.style.transform = `rotate(${hourAngle}deg)`;
  if (minuteHand) minuteHand.style.transform = `rotate(${minuteAngle}deg)`;
  if (secondHand) secondHand.style.transform = `rotate(${secondAngle}deg)`;
}

// Update clock every second
setInterval(updateClock, 1000);

// Initial call to set the time immediately
updateClock();
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

// Graph Theory Animation for Code Section
class GraphAnimation {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    
    this.ctx = this.canvas.getContext('2d');
    this.nodes = [];
    this.edges = [];
    this.animationId = null;
    
    this.setupCanvas();
    this.generateGraph();
    this.animate();
    
    // Handle resize
    window.addEventListener('resize', () => {
      this.setupCanvas();
      this.generateGraph();
    });
  }
  
  setupCanvas() {
    this.canvas.width = this.canvas.offsetWidth;
    this.canvas.height = this.canvas.offsetHeight;
  }
  
  generateGraph() {
    this.nodes = [];
    this.edges = [];
    
    const nodeCount = 12;
    const centerX = this.canvas.width / 2;
    const centerY = this.canvas.height / 2;
    const maxRadius = Math.min(this.canvas.width, this.canvas.height) * 0.35;
    
    // Create nodes
    for (let i = 0; i < nodeCount; i++) {
      const angle = (i / nodeCount) * Math.PI * 2;
      const radius = maxRadius * (0.6 + Math.random() * 0.4);
      
      this.nodes.push({
        x: centerX + Math.cos(angle) * radius,
        y: centerY + Math.sin(angle) * radius,
        originalX: centerX + Math.cos(angle) * radius,
        originalY: centerY + Math.sin(angle) * radius,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: 4 + Math.random() * 3,
        pulse: Math.random() * Math.PI * 2,
        id: i
      });
    }
    
    // Create edges (connect nodes with some probability)
    for (let i = 0; i < nodeCount; i++) {
      for (let j = i + 1; j < nodeCount; j++) {
        const distance = Math.sqrt(
          Math.pow(this.nodes[i].x - this.nodes[j].x, 2) + 
          Math.pow(this.nodes[i].y - this.nodes[j].y, 2)
        );
        
        // Connect nodes that are close enough or randomly
        if (distance < maxRadius * 0.8 && (Math.random() < 0.3 || distance < maxRadius * 0.5)) {
          this.edges.push({
            from: i,
            to: j,
            opacity: Math.random() * 0.5 + 0.2
          });
        }
      }
    }
  }
  
// Continuation of GraphAnimation class animate method
  animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    const time = Date.now() * 0.001;

    // Update and draw edges
    for (let edge of this.edges) {
      const from = this.nodes[edge.from];
      const to = this.nodes[edge.to];
      this.ctx.beginPath();
      this.ctx.moveTo(from.x, from.y);
      this.ctx.lineTo(to.x, to.y);
      this.ctx.strokeStyle = `rgba(135, 206, 235, ${edge.opacity})`;
      this.ctx.stroke();
    }

    // Update and draw nodes
    for (let node of this.nodes) {
      // Oscillate position slightly
      node.x += node.vx;
      node.y += node.vy;

      // Keep nodes near their original position
      const dx = node.originalX - node.x;
      const dy = node.originalY - node.y;
      node.vx += dx * 0.001;
      node.vy += dy * 0.001;

      // Dampen velocity
      node.vx *= 0.98;
      node.vy *= 0.98;

      // Pulse effect
      const pulse = Math.sin(time + node.pulse) * 2;

      this.ctx.beginPath();
      this.ctx.arc(node.x, node.y, node.radius + pulse, 0, Math.PI * 2);
      this.ctx.fillStyle = 'rgba(135, 206, 235, 0.8)';
      this.ctx.fill();
    }

    this.animationId = requestAnimationFrame(this.animate.bind(this));
  }
  }

  // Instantiate animation if canvas is present
  document.addEventListener('DOMContentLoaded', () => {
  new GraphAnimation('graphCanvas');
  });

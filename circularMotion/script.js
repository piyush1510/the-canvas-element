var canvas = /** @type {HTMLCanvasElement} */ (
  document.querySelector("#canvas")
);

var c = canvas.getContext("2d");
const w = window.innerWidth;
const h = window.innerHeight;
canvas.width = w;
canvas.height = h;
const colors = ["#e56a6b", "#ffd6de", "#ffccb0", "#49616d"];

var mouse = {
  x: w / 2,
  y: h / 2,
};
addEventListener("mousemove", (event) => {
  mouse.x = event.clientX;
  mouse.y = event.clientY;
});
addEventListener("mouseout", (event) => {
  mouse.x = w / 2;
  mouse.y = h / 2;
});
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function randomColor() {
  return colors[randomInt(0, colors.length - 1)];
}

class Particle {
  constructor() {
    this.y = h / 2;
    this.color = randomColor();
    this.radius = 5;
    this.x = w / 2;
    this.radians = Math.random() * Math.PI * 2;
    this.velocity = 0.01;
    this.ds = 100 * Math.random() + 100;
  }
  draw() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.fillStyle = this.color;
    c.fill();
    c.closePath();
  }
  update() {
    this.x = mouse.x + Math.cos(this.radians) * this.ds;
    this.y = mouse.y + Math.sin(this.radians) * this.ds;
    this.radians += this.velocity;
  }
}
var particles = [];
for (let i = 0; i < 200; i++) {
  particles.push(new Particle());
}
function animate() {
  requestAnimationFrame(animate);
  c.fillStyle='rgba(255,255,255,0.05)'
  c.fillRect(0, 0, w, h);
  particles.forEach((particle) => {
    particle.update();
    particle.draw();
  });
}
animate();
// this one was from a tutorial
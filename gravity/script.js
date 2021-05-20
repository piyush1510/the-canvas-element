var canvas = /** @type {HTMLCanvasElement} */ (
  document.querySelector("#myCanvas")
);
const h = window.innerHeight;
const w = window.innerWidth;
canvas.height = h;
canvas.width = w;

const c = canvas.getContext("2d");

c.moveTo(w / 2 - 200, h * 0.8);
c.lineTo(w / 2 + 200, h * 0.8);
c.strokeStyle = "cyan";
c.stroke();

var x = w / 2;
var y = h * 0.5;
var dy = 0.1;
var radius = 40;
const g = 0.3;

class Circle {
  constructor() {
    this.x = Math.random()*w*0.9+w*0.05
    this.y = Math.random()*h*0.5+50;
    this.dy = 0.1;
    this.radius = Math.random() * 30+10;
    this.running = true;
    this.color=`rgba(220,20,60,${Math.random()})`
  }7
  draw() {
    c.beginPath();
    
    c.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
    c.fillStyle = this.color;
    c.fill();
    if(!this.running) return
    if (this.dy) this.dy += g;
    this.y += this.dy;
    if (this.y + this.radius > h * 0.8 && this.dy>0) {
        console.log(this.dy)
      if (Math.abs(this.dy)< 1) {
        this.dy=0;
        this.running = false;
      }
      this.y=h * 0.8-this.radius
      this.dy *= -0.8;
    }
  }
}
const n=200;
const circlesArray=[]
for (let i = 0; i < n; i++) {
    circlesArray.push(new Circle())
    
}
const animate = () => {
  const cancel = requestAnimationFrame(animate);
  c.clearRect(0, 0, w, h);
  c.moveTo(0, h * 0.8);
  c.lineTo(w, h * 0.8);
  c.strokeStyle = "crimson";
  c.stroke();
  c.strokeStyle = "rgba(0,0,0,0)";
  for (let i = 0; i < circlesArray.length; i++) {
      circlesArray[i].draw();
      
  }
};

animate();

const refresh= ()=>{
    for (let i = 0; i < n; i++) {
        circlesArray[i].y=Math.random()*h*0.5+50;
        circlesArray[i].dy=0.1
        circlesArray[i].running=true
    }
}
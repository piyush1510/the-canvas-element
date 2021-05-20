var canvas = /** @type {HTMLCanvasElement} */ (
  document.querySelector("#myCanvas")
);
var mouse={
    x:undefined,
    y:undefined,
}
window.addEventListener('mousemove',(event)=>{
    mouse.x=event.x
    mouse.y=event.y
})
window.addEventListener('mouseout',(event)=>{
    mouse.x=mouse.y=undefined
    console.log('leave');
})
const w = window.innerWidth;
const h = window.innerHeight;
canvas.width = w;
canvas.height = h;
var c = canvas.getContext("2d");
const colors=["#000000","pink","purple"]
radius = 20;
class Circle {
  constructor() {
    this.x = Math.random() * w;
    this.y = Math.random() * h;
    this.dx = (Math.random()-0.5)*3;
    this.dy = (Math.random()-0.5)*3;
    this.radius = Math.random()*10+1;
    this.defaultRadius=this.radius
    // this.color=`rgba(255,255,255,${Math.random()})`
    this.color=colors[parseInt(Math.random()*colors.length)]
  }
  draw() {
    c.fillRect = "white";
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
    c.strokeStyle = this.color;
    this.x += this.dx;
    this.y += this.dy;
    c.stroke();
    c.fillStyle=this.color
    c.fill()
    if (this.x + this.radius > w || this.x - this.radius < 0)
      this.dx *= -1;
    if (this.y + this.radius > h || this.y - this.radius < 0)
      this.dy *= -1;
      if(this.x-mouse.x<100&&this.x-mouse.x>-100&&this.y-mouse.y<100&&this.y-mouse.y>-100 && this.radius<60) this.radius+=1
      else if(this.radius>this.defaultRadius) this.radius-=1
  }
}
const circlesArray=[];
const n=500
for(let i=0;i<n;i++) circlesArray.push(new Circle())
function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0,0,w,h)
  for(let i=0;i<circlesArray.length;i++) circlesArray[i].draw()
}
animate();

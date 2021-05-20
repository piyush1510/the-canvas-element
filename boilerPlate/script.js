var canvas = /** @type {HTMLCanvasElement} */ (document.querySelector('#canvas'))

var c=canvas.getContext('2d')
const w=window.innerWidth;
const h=window.innerHeight;
canvas.width=w;
canvas.height=h
const colors=['#e56a6b',"#ffd6de","#ffccb0","#49616d"]


var mouse={
    x:0,
    y:0
}
addEventListener('mousemove',event=>{
    mouse.x=event.clientX;
    mouse.y=event.clientY
})

function randomInt(min,max){
    return Math.floor(Math.random()*(max-min+1)+min)
}
function randomColor(){
    return colors[randomInt(0,colors.length-1)]
}

class object{
    constructor(){
        this.x=100;
        this.y=100;
        this.color=randomColor();
        this.radius=20;
    }
    draw(){
        c.beginPath();
        c.arc(this.x,this.y,0,Math.PI*2,false)
        c.fillStyle=this.color;
        c.closePath();
    }
}

function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0,0,w,h);
    c.fillText("html canvas",mouse.x,mouse.y)
}
animate();
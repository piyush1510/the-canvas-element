var canvas = /** @type {HTMLCanvasElement} */ (document.querySelector('#myCanvas'))
canvas.width=window.innerWidth
canvas.height=window.innerHeight
var c=canvas.getContext('2d')
c.fillStyle="gray";
c.fillRect(100,100,100,100)
c.fillRect(200,200,200,200)
c.beginPath();
c.moveTo(50,300);
c.lineTo(100,100);
c.lineTo(500,500);
c.strokeStyle="crimson"
c.stroke();
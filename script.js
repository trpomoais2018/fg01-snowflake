var canvas = document.createElement('canvas');
document.body.insertBefore(canvas, document.body.firstChild);
canvas.style.position = 'fixed';
canvas.style.top = '0px';
canvas.style.left = '0px';
canvas.width = document.body.offsetWidth;
canvas.height = window.innerHeight;
var sky = canvas.getContext('2d');
var deg = Math.PI / 180;

function edge(n, len) {
  sky.save();
  if (n == 0) {      
    sky.lineTo(len, 0);
  } else {
    sky.scale(1 / 3, 1 / 3);   
    edge(n - 1, len);
    sky.rotate(60 * deg);
    edge(n - 1, len);
    sky.rotate(-120 * deg);
    edge(n - 1, len);
    sky.rotate(60 * deg);
    edge(n - 1, len);
  }
  sky.restore();      
  sky.translate(len, 0); 
}

function drawFlake(x, y, len, n, stroke) {
  sky.save();
  sky.strokeStyle = stroke;
  sky.translate(x, y);
  sky.moveTo(0, 0);
  edge(n, len);
  sky.rotate(-120 * deg);
  edge(n, len);
  sky.rotate(-120 * deg);
  edge(n, len);
  sky.stroke();
  sky.restore();
}
drawFlake(400, 400, 200, 4, "#FF0000");
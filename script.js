var canvas = document.createElement('canvas');
document.body.insertBefore(canvas, document.body.firstChild);
canvas.style.position = 'fixed';
canvas.style.top = '0px';
canvas.style.left = '0px';
canvas.width = document.body.offsetWidth;
canvas.height = window.innerHeight;
var sky = canvas.getContext('2d');
var radiansPerDegrees = Math.PI / 180;

function edge(n, length) {
  sky.save();
  if (n === 0) {      
    sky.lineTo(length, 0);
  } else {
    sky.scale(1 / 3, 1 / 3);   
    edge(n - 1, length);
    sky.rotate(60 * radiansPerDegrees);
    edge(n - 1, length);
    sky.rotate(-120 * radiansPerDegrees);
    edge(n - 1, length);
    sky.rotate(60 * radiansPerDegrees);
    edge(n - 1, length);
  }
  sky.restore();      
  sky.translate(length, 0); 
}

function drawFlake(x, y, length, n, stroke) {
  sky.save();
  sky.strokeStyle = stroke;
  sky.translate(x, y);
  sky.moveTo(0, 0);
  edge(n, length);
  sky.rotate(-120 * radiansPerDegrees);
  edge(n, length);
  sky.rotate(-120 * radiansPerDegrees);
  edge(n, length);
  sky.stroke();
  sky.restore();
}
drawFlake(400, 400, 200, 4, "#FF0000");
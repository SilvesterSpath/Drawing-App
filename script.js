const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const colorEl = document.getElementById('color');
const increase = document.getElementById('increase');
const decrease = document.getElementById('decrease');
const sizeEl = document.getElementById('size');
const clear = document.getElementById('clear');

console.log(colorEl.value);

let size = 10;
let isPressed = false;
let color = 'black';
let x;
let y;

clear.addEventListener('click', () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

decrease.addEventListener('click', () => {
  size--;
  sizeEl.innerText = size;
});

colorEl.addEventListener('change', (e) => {
  color = colorEl.value;
});

canvas.addEventListener('mousedown', (e) => {
  isPressed = true;

  x = e.offsetX;
  y = e.offsetY;
});

canvas.addEventListener('mouseup', (e) => {
  isPressed = false;

  x = null;
  y = null;
});

canvas.addEventListener('mousemove', (e) => {
  if (isPressed) {
    const x2 = e.offsetX;
    const y2 = e.offsetY;
    drawCircle(x2, y2);
    drawLine(x, y, x2, y2);

    x = x2;
    y = y2;
  }
});

function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2, true);
  ctx.fillStyle = color;
  ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = size * 2;
  ctx.stroke();
}

/*
const canvas = document.getElementById('stars');
const ctx = canvas.getContext('2d');

let stars = [];
const STAR_COUNT = 100;
const SPEED = 0.5;

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();

function createStars() {
    stars = [];
    for (let i = 0; i < STAR_COUNT; i++) {
        stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 1.5 + 0.5,
            speed: Math.random() * SPEED + 0.1
        });
    }
}

function drawStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'white';
    for (let star of stars) {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();
    }
}

function updateStars() {
    for (let star of stars) {
        star.y += star.speed;
        if (star.y > canvas.height) {
            star.y = 0;
            star.x = Math.random() * canvas.width;
        }
    }
}

function animate() {
    drawStars();
    updateStars();
    requestAnimationFrame(animate);
}

createStars();
animate();
*/

const canvas = document.getElementById('stars');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const stars = [];
const numStars = 100;
const symbols = ['+', 'x', '*'];

for (let i = 0; i < numStars; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    speed: 0.5 + Math.random(),
    symbol: symbols[Math.floor(Math.random() * symbols.length)]
    /*symbol: Math.random() > 0.5 ? '+' : 'x' : '*' // Alterna entre "+" y "x"*/
  });
}

function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.font = '12px monospace';
  ctx.fillStyle = '#f0f0f0'; // Verde fosforescente estilo retro

  for (let star of stars) {
    ctx.fillText(star.symbol, star.x, star.y);
    star.y += star.speed;
    if (star.y > canvas.height) {
      star.y = 0;
      star.x = Math.random() * canvas.width;
      star.symbol = symbols[Math.floor(Math.random() * symbols.length)];
    }
  }

  requestAnimationFrame(drawStars);
}

drawStars();
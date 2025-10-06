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
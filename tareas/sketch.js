var img;
var x, y;
var speedX, speedY;
var stars = [];

function preload() {
  img = loadImage("Caza estelar.png");
}

function setup() {
  createCanvas(400, 500);
  x = width / 2 - img.width * 0.15;
  y = height / 2 - img.height * 0.15;
  speedX = 2;
  speedY = 2;

  // Crear estrellas en posiciones aleatorias
  for (let i = 0; i < 100; i++) {
    stars.push({ x: random(width), y: random(height) });
  }
}

function draw() {
  // Mueve las estrellas
  for (let i = 0; i < stars.length; i++) {
    stars[i].y += 2; // Velocidad de movimiento hacia abajo
    if (stars[i].y > height) {
      stars[i].y = 0;
      stars[i].x = random(width);
    }
  }

  // Dibuja el fondo de estrellas
  background(0);
  for (let i = 0; i < stars.length; i++) {
    fill(255);
    noStroke();
    ellipse(stars[i].x, stars[i].y, 2, 2);
  }

  // Dibuja la imagen del "Caza estelar" en la posición actual
  image(img, x, y, img.width * 0.3, img.height * 0.3);
}

function mousePressed() {
  // Cambia la posición de la nave al hacer clic
  x = mouseX - img.width * 0.15;
  y = mouseY - img.height * 0.15;
}



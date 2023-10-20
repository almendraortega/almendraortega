let stars = [];
let orionStars = [];
let drawOrion = true; // Variable para controlar si se dibuja la constelación
let speedSlider;
let movingBackground = false; // Variable para controlar si las estrellas de fondo se mueven

function setup() {
  createCanvas(400, 400);
  background(0);

  // Crear un slider para controlar la velocidad de movimiento de las estrellas de fondo
  speedSlider = createSlider(0, 10, 5, 0.1);
  speedSlider.position(10, height + 10);

  // Crear estrellas aleatorias de fondo
  for (let i = 0; i < 200; i++) {
    stars.push(createVector(random(width), random(height)));
  }

  // Definir las coordenadas de las estrellas de Orión
  orionStars.push(createVector(100, 200));
  orionStars.push(createVector(200, 100));
  orionStars.push(createVector(300, 200));
  orionStars.push(createVector(200, 200));

  // Crear un botón de control para la constelación
  const drawOrionButton = createButton('Dibujar Orión');
  drawOrionButton.position(100, height + 10);
  drawOrionButton.mousePressed(toggleOrion);

  // Crear un botón de control para el movimiento de las estrellas de fondo
  const moveBackgroundButton = createButton('Mover Estrellas de Fondo');
  moveBackgroundButton.position(220, height + 10);
  moveBackgroundButton.mousePressed(toggleBackgroundMovement);
}

function toggleOrion() {
  drawOrion = !drawOrion;
}

function toggleBackgroundMovement() {
  movingBackground = !movingBackground;
}

function draw() {
  background(0);

  // Obtener el valor del slider de velocidad
  let speed = speedSlider.value();

  // Mover las estrellas de fondo solo si movingBackground es verdadero
  if (movingBackground) {
    for (let i = 0; i < stars.length; i++) {
      stars[i].x += random(-speed, speed);
      stars[i].y += random(-speed, speed);

      // Asegurarse de que las estrellas vuelvan a aparecer en el lienzo
      stars[i].x = (stars[i].x + width) % width;
      stars[i].y = (stars[i].y + height) % height;
    }
  }

  // Dibujar las estrellas de fondo
  fill(255);
  noStroke();
  for (let i = 0; i < stars.length; i++) {
    ellipse(stars[i].x, stars[i].y, 2, 2);
  }

  // Dibujar la constelación de Orión si drawOrion es verdadero
  if (drawOrion) {
    stroke(255);
    for (let i = 0; i < orionStars.length; i++) {
      point(orionStars[i].x, orionStars[i].y);
    }
  }
}

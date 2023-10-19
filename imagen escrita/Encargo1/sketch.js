let estrellas = [];

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(147, 112, 219);

  for (let estrella of estrellas) {
    estrella.mostrar();
  }
}

function mouseClicked() {
  let x = mouseX;
  let y = mouseY;
  let estrella = new Estrella(x, y);
  estrellas.push(estrella);
}

class Estrella {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = random(10, 20);
  }

  mostrar() {
    fill(255); // Color blanco para la estrella
    noStroke();

    // Dibuja una estrella de cinco puntas
    beginShape();
    for (let i = 0; i < 5; i++) {
      let angle = TWO_PI * i / 5 - HALF_PI;
      let x = this.x + cos(angle) * this.size;
      let y = this.y + sin(angle) * this.size;
      vertex(x, y);
      let spikeSize = this.size * 0.6;
      x = this.x + cos(angle + PI / 5) * spikeSize;
      y = this.y + sin(angle + PI / 5) * spikeSize;
      vertex(x, y);
    }
    endShape(CLOSE);
  }
}



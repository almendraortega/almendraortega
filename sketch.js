let particulas = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  let cantidad = 1500;

  for (let i = 0; i < cantidad; i++) {
    let x = random(width);
    let y = random(height);
    let colorfinal = color(random(255), random(255), random(255));
    particulas.push(new Particula(x, y, colorfinal, random(4)));
  }
}

function draw() {
  for (let i = 0; i < particulas.length; i++) {
    particulas[i].display();
  }
}

function mousePressed() {
  
  for (let i = 0; i < particulas.length; i++) {
    particulas[i].cambiarColor();
  }
}

class Particula {
  constructor(_x, _y, _color, _s) {
    this.x = _x;
    this.y = _y;
    this.speedx = random(-1, 1);
    this.speedy = random(-1, 1);
    this.col = _color;
    this.size = _s;
  }

  display() {
    this.x += this.speedx;
    this.y += this.speedy;
    noStroke();
    fill(red(this.col), green(this.col), blue(this.col), 255);
    circle(this.x, this.y, this.size);

    if (this.x > width) {
      this.x = 0;
    }

    if (this.x < 0) {
      this.x = width;
    }

    if (this.y > height) {
      this.y = 0;
    }

    if (this.y < 0) {
      this.y = height;
    }
  }

  cambiarColor() {
   
    this.col = color(random(255), random(255), random(255));
  }
}


let particles = [];

function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < 100; i++) {
    particles.push(new Particle());
  }
}

function draw() {
  background(75,0,130)

  for (let particle of particles) {
    particle.update();
    particle.display();
  }
}

class Particle {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.size = random(10, 30);
    this.age = 0;
    this.maxAge = random(100, 500);
    this.opacity = 255;
    this.angle = random(TWO_PI);
    this.rotationSpeed = random(5,5);
    this.xOff = random(1000);
    this.yOff = random(2000);
  }

  update() {
    this.age++;
    this.opacity = map(this.age, 0, this.maxAge, 255, 0);
    this.angle += this.rotationSpeed;

    const noiseX = noise(this.xOff);
    const noiseY = noise(this.yOff);
    const vx = map(noiseX, 0, 1, -2, 2);
    const vy = map(noiseY, 0, 1, -2, 2);

    this.x += vx;
    this.y += vy;

    this.x = constrain(this.x, 0, width);
    this.y = constrain(this.y, 0, height);

    this.xOff += 0.01;
    this.yOff += 0.01;
  }

  display() {
    fill(255, this.opacity); // Aplicar color brillant
    noStroke();
    push();
    translate(this.x, this.y);
    rotate(this.angle);
    ellipse(0, 0, this.size, this.size);
    pop();
  }
}

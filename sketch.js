let particles = [];
let bgColor;

function setup() {
  createCanvas(400, 400);
  bgColor = color(75, 0, 130); 

  for (let i = 0; i < 100; i++) {
    particles.push(new Particle());
  }
}

function draw() {
  background(bgColor);

  for (let i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].display();
    for (let j = 0; j < particles.length; j++) {
      if (i !== j) {
        particles[i].checkCollision(particles[j]);
      }
    }
  }
}

function mousePressed() {
  
  bgColor = color(random(255), random(255), random(255));
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
    this.rotationSpeed = random(5, 5);
    this.xOff = random(1000);
    this.yOff = random(2000);
    this.color = color(255); 
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
    fill(this.color, this.opacity); 
    noStroke();
    push();
    translate(this.x, this.y);
    rotate(this.angle);
    ellipse(0, 0, this.size, this.size);
    pop();
  }

  checkCollision(other) {
    let d = dist(this.x, this.y, other.x, other.y);
    if (d < this.size / 2 + other.size / 2) {
      // Cambiar el color al chocar
      this.color = color(random(255), random(255), random(255));
    }
  }
}

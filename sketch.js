let estado = 1;
let lastChangeTime = 0;
const changeDelay = 500;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  if (estado === 1) {
  background(46, 78, 211 );
  
  fill(1,0,1)
  rect(140,40,20)
  rect(160,40,20)
  rect(180,40,20)
  rect(200,60,20)
  rect(220,60,20)
  rect(240,80,20)
  rect(240,100,20)
  rect(260,120,20)
  rect(260,140,20)
  rect(260,160,20)
  rect(260,180,20)
  rect(260,200,20)
  rect(260,220,20)
  rect(260,240,20)
  rect(260,260,20)
  rect(260,280,20)
  rect(260,300,20)
  rect(260,320,20)

  //mochila//
  rect(280,120,20)
  rect(300,120,20)
  rect(320,140,20)
  rect(320,160,20)
  rect(320,180,20)
  rect(320,200,20)
  rect(320,220,20)
  rect(320,240,20)
  rect(300,260,20)
  rect(280,260,20)
  
  //patas//
  rect(220,320,20)
  rect(240,320,20)
  rect(200,300,20)
  rect(160,280,20)
  rect(180,280,20)
  rect(140,280,20)
  rect(120,280,20)
  rect(120,300,20)
  rect(100,320,20)
  rect(80,320,20)
  rect(60,300,20)
  //cara//
  rect(60,300,20)
  rect(60,280,20)
  rect(60,260,20)
  rect(60,240,20)
  
  
  
  rect(60,220,20)
  rect(60,200,20)
  rect(60,180,20)
  rect(40,160,20)
  rect(40,140,20)
  rect(60,120,20)
  rect(60,100,20)
  rect(80,80,20)
  rect(120,60,20)
  rect(100,60,20)
  
//casco//
   rect(160,100,20)
   rect(140,100,20)
   rect(120,100,20)
   rect(100,100,20)
   rect(80,100,20)
   rect(180,120,20)
   rect(200,140,20)
   rect(200,160,20)
   rect(180,180,20)
   rect(160,200,20)
   rect(140,200,20)
   rect(120,200,20)
   rect(100,200,20)
   rect(80,200,20)
  
  //relleno//
  fill(200,2,2)
  rect(300,200,20)
  rect(300,180,20)
  rect(300,160,20)
  rect(300,140,20)
  rect(280,140,20)
  rect(280,160,20)
  rect(280,180,20)
  rect(280,200,20)
  
  fill(165,28,2)
  
  rect(280,220,20)
  rect(280,240,20)
  rect(300,240,20)
  rect(300,220,20)
  rect(240,200,20)
  rect(240,220,20)
  rect(240,240,20)
  rect(240,260,20)
  rect(240,280,20)
  rect(240,300,20)
  rect(220,220,20)
  rect(220,240,20)
  rect(220,260,20)
  rect(220,280,20)
  rect(220,300,20)
  rect(220,300,20)
  rect(200,240,20)
  rect(200,260,20)
  rect(200,280,20)
  rect(180,260,20)
  rect(160,260,20)
  rect(140,260,20)
  rect(120,260,20)
  rect(100,260,20)
  rect(80,260,20)
  rect(80,240,20)
  rect(80,280,20)
  rect(80,300,20)
  rect(100,300,20)
  rect(100,280,20)
  
  fill(200,2,2)
  rect(240,120,20)
  rect(240,140,20)
  rect(240,160,20)
  rect(240,180,20)
  rect(80,220,20)
  rect(100,220,20)
  rect(120,220,20)
  rect(140,220,20)
  rect(160,220,20)
  rect(180,220,20)
  rect(200,220,20)
  rect(100,240,20)
  rect(120,240,20)
  rect(140,240,20)
  rect(160,240,20)
  rect(180,240,20)
  rect(220,120,20)
  rect(220,140,20)
  rect(220,160,20)
  rect(220,180,20)
  rect(220,200,20)
  rect(200,200,20)
  rect(200,180,20)
  rect(180,200,20)
  rect(200,120,20)
  rect(180,100,20)
  rect(200,100,20)
  rect(220,100,20)
  rect(220,80,20)
  rect(200,80,20)
  rect(180,80,20)
  rect(160,80,20)
  rect(140,80,20)
  rect(120,80,20)
  rect(100,80,20)
  rect(180,60,20)
  rect(160,60,20)
  rect(140,60,20)
  
  
  fill(136,200,235)
  rect(160,120,20)
  rect(140,120,20)
  rect(80,120,20)
  rect(60,140,20)
  rect(60,160,20)
  rect(80,160,20)
  rect(100,160,20)
  rect(120,160,20)
  rect(140,160,20)
  rect(160,140,20)
  rect(140,140,20)
  
  
  
  fill(183,183,183)
  
  rect(180,160,20)
  rect(180,140,20)
  rect(160,160,20)
  rect(160,180,20)
  rect(140,180,20)
  rect(120,180,20)
  rect(100,180,20)
  rect(80,180,20)
  
  fill(239,239,239)
  rect(120,120,20)
  rect(100,120,20)
  rect(120,140,20)
  rect(100,140,20)
  rect(80,140,20)
 }
  
  else if (estado === 2) {
  
  background(46, 78, 211)
  fill(1,0,1)
  rect(140,40,20)
  rect(160,40,20)
  rect(180,40,20)
  rect(200,60,20)
  rect(220,60,20)
  rect(240,80,20)
  rect(240,100,20)
  rect(260,120,20)
  rect(260,140,20)
  rect(260,160,20)
  rect(260,180,20)
  rect(260,200,20)
  rect(260,220,20)
  rect(260,240,20)
  rect(260,260,20)
  rect(260,280,20)
  rect(260,300,20)
  rect(260,320,20)

  //mochila//
  rect(280,120,20)
  rect(300,120,20)
  rect(320,140,20)
  rect(320,160,20)
  rect(320,180,20)
  rect(320,200,20)
  rect(320,220,20)
  rect(320,240,20)
  rect(300,260,20)
  rect(280,260,20)
  
  
  rect(40,320,20)
  rect(20,340,20)
  rect(60,360,20)
  rect(80,360,20)
  rect(20,360,20)
  rect(40,360,20)
  
  rect(120,360,20)
  rect(140,360,20)
  rect(160,360,20)
  rect(180,360,20)
  rect(200,360,20)
  rect(220,360,20)
  rect(240,360,20)
  rect(260,360,20)
  rect(260,340,20)
  
  
  //cara//
  rect(60,300,20)
  rect(60,280,20)
  
  rect(40,240,20)
  rect(20,260,20)
  rect(20,280,20)
  rect(40,280,20)
  rect(100,360,20)
  rect(60,220,20)
  rect(60,200,20)
  rect(60,180,20)
  rect(40,160,20)
  rect(40,140,20)
  rect(60,120,20)
  rect(60,100,20)
  rect(80,80,20)
  rect(120,60,20)
  rect(100,60,20)
  
//casco//
   rect(160,100,20)
   rect(140,100,20)
   rect(120,100,20)
   rect(100,100,20)
   rect(80,100,20)
   rect(180,120,20)
   rect(200,140,20)
   rect(200,160,20)
   rect(180,180,20)
   rect(160,200,20)
   rect(140,200,20)
   rect(120,200,20)
   rect(100,200,20)
   rect(80,200,20)
  
  //relleno//
  fill(200,2,2)
  rect(300,200,20)
  rect(300,180,20)
  rect(300,160,20)
  rect(300,140,20)
  rect(280,140,20)
  rect(280,160,20)
  rect(280,180,20)
  rect(280,200,20)
  rect(80,240,20)
  rect(60,240,20)
 
 fill(165,28,2)
  
  rect(40,340,20)
  rect(40,260,20)
  rect(60,260,20)
  rect(280,220,20)
  rect(280,240,20)
  rect(300,240,20)
  rect(300,220,20)
  rect(240,200,20)
  rect(240,220,20)
  rect(240,240,20)
  rect(240,260,20)
  rect(240,280,20)
  rect(240,300,20)
  rect(220,220,20)
  rect(220,240,20)
  rect(220,260,20)
  rect(220,280,20)
  rect(220,300,20)
  rect(220,300,20)
  rect(200,240,20)
  rect(200,260,20)
  rect(200,280,20)
  rect(180,260,20)
  rect(160,260,20)
  rect(140,260,20)
  rect(120,260,20)
  rect(100,260,20)
  rect(80,260,20)
  
  rect(80,280,20)
  rect(80,300,20)
  rect(100,300,20)
  rect(100,280,20)
  rect(80,320,20)
  rect(100,320,20)
  rect(120,300,20)
  
  rect(220,320,20)
  rect(240,320,20)
  rect(200,300,20)
  rect(160,280,20)
  rect(180,280,20)
  rect(140,280,20)
  rect(120,280,20)
  rect(140,300,20)
  rect(140,320,20)
  rect(140,340,20)
  rect(120,340,20)
  rect(120,320,20)
  rect(100,340,20)
  rect(80,340,20)
  rect(60,340,20)
  rect(60,320,20)
  rect(200,320,20)
  rect(180,320,20)
  rect(160,320,20)
  rect(160,300,20)
  rect(180,300,20)
  rect(180,340,20)
  rect(160,340,20)
  rect(200,340,20)
  rect(220,340,20)
  rect(240,340,20)
  
  
  fill(200,2,2)
  rect(240,120,20)
  rect(240,140,20)
  rect(240,160,20)
  rect(240,180,20)
  rect(80,220,20)
  rect(100,220,20)
  rect(120,220,20)
  rect(140,220,20)
  rect(160,220,20)
  rect(180,220,20)
  rect(200,220,20)
  rect(100,240,20)
  rect(120,240,20)
  rect(140,240,20)
  rect(160,240,20)
  rect(180,240,20)
  rect(220,120,20)
  rect(220,140,20)
  rect(220,160,20)
  rect(220,180,20)
  rect(220,200,20)
  rect(200,200,20)
  rect(200,180,20)
  rect(180,200,20)
  rect(200,120,20)
  rect(180,100,20)
  rect(200,100,20)
  rect(220,100,20)
  rect(220,80,20)
  rect(200,80,20)
  rect(180,80,20)
  rect(160,80,20)
  rect(140,80,20)
  rect(120,80,20)
  rect(100,80,20)
  rect(180,60,20)
  rect(160,60,20)
  rect(140,60,20)
  
  
  fill(136,200,235)
  rect(160,120,20)
  rect(140,120,20)
  rect(80,120,20)
  rect(60,140,20)
  rect(60,160,20)
  rect(80,160,20)
  rect(100,160,20)
  rect(120,160,20)
  rect(140,160,20)
  rect(160,140,20)
  rect(140,140,20)
  
  
  fill(183,183,183)
  
  rect(180,160,20)
  rect(180,140,20)
  rect(160,160,20)
  rect(160,180,20)
  rect(140,180,20)
  rect(120,180,20)
  rect(100,180,20)
  rect(80,180,20)
  
  fill(239,239,239)
  rect(120,120,20)
  rect(100,120,20)
  rect(120,140,20)
  rect(100,140,20)
  rect(80,140,20)
  }
  
}

function mousePressed() {
  if (millis() - lastChangeTime > changeDelay) {
    estado++;
    if (estado > 2) {
      estado = 1;
    }
    lastChangeTime = millis();
  }
}


let particulas = []; 
let foto;
function setup() {
  createCanvas(windowWidth, windowHeight);

    
  let cantidad = 1500; 
  foto = loadImage("imagen2.png");
  
  
  for(let i=0; i<cantidad; i++){
    
    let x = width/2;
    let y = height/2;
    
    let colorfinal = foto.get(floor(x),floor(y));
    
    
    particulas.push(new Particula(x,
                            y,
                             colorfinal,
                             random(4)));
  }
  
  
}

function draw() {
 // background(220);
  
  //image(foto,0,0,width,height);
  
  for(let i=0; i<particulas.length; i++){
    particulas[i].display();
  }
  
  
}



class Particula {
  
  constructor(_x,_y,_color,_s){
    
    
    this.x = _x; //posicion en x
    this.y = _y; //posicion en y
    this.speedx = random(-1,1);
    
    
    this.speedy = random(-1,1);
    this.col = _color; 
    this.size = _s; 
  }  
  
  display(){
    this.x+=this.speedx;
    this.y+=this.speedy;
    noStroke();
    
    let colorfoto = color(foto.get(floor(this.x),floor(this.y)));
    let color2 = color(0);
    let d = dist(width/2,height/2,this.x,this.y);
    d = map(d,0,width/2,0,1);
    let colorfinal = lerpColor(colorfoto,color2,d);
    fill(colorfinal);
    circle(this.x,this.y,this.size);
    
    
    if(this.x > width){
      this.x = 0;
    }
    
    if(this.x < 0){
      this.x = width;
    }
    if(this.y < 0){
      this.y = height;
    }
    if(this.y < 0){
      this.y = width;
    }
  }
  
  

}
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(249, 230, 224);
  angleMode(DEGREES);
  let numeroGlifi = 105; 
  let numeroColonne = ceil(sqrt(numeroGlifi * windowWidth / windowHeight));
  let numeroRighe = ceil(numeroGlifi / numeroColonne);
  let dimColonna = windowWidth / numeroColonne;
  let dimRiga = windowHeight / numeroRighe;

  let xCorrente = 0; 
  let yCorrente = 0; 

  for (let g = 0; g < numeroGlifi; g++) {
    
    mioGlifo(xCorrente + 0.5*dimColonna, yCorrente + 0.5*dimRiga, dimRiga*0.7); 
    xCorrente = xCorrente + dimColonna; 
    if (xCorrente  >= windowWidth) {
      yCorrente = yCorrente + dimRiga;
      xCorrente =  0; 
    }
  }
}

//funzioni per scegliere la combo colori
function coloreChiaro(n) {
  if (n == 1) return color(249, 140, 21);
  else if (n == 2) return color(254, 199, 205);
  else if (n == 3) return color(254, 82, 118);
  else if (n == 4) return color(249, 63, 10);
  else return color(252, 201, 0);
}
function coloreScuro(n) {
  if (n == 1) return color(238, 87, 11);
  else if (n == 2) return color(244, 150, 165);
  else if (n == 3) return color(229, 44, 73);
  else if (n == 4) return color(183, 4, 9);
  else return color(250, 173, 7);
}

function mioGlifo(_x, _y, _size) {
  push();
  translate(_x, _y);
  rotate(random(-40, 40));
  scale(random(_size / 175, _size / 110));
  noStroke();

  //scelta colori 
  let scelta = ceil(random(5));
  let chiaro = coloreChiaro(scelta);
  let scuro = coloreScuro(scelta);
  
  //contorno orsetto
  push();
  stroke(scuro);
  strokeWeight(4);
  noFill; 

  // testa e orecchie
  ellipse(0, -25, 50+2, 50+2);
  ellipse(- 15, -45, 20+2, 20+2);
  ellipse(15, -45, 20+2, 20+2);

  // corpo
  ellipse(0, 15, 50+2, 55+2);

  // gambe
  ellipse(- 17, 40, 25+2, 27+2);
  ellipse(17, 40, 25+2, 27+2);

  // braccia
  ellipse(- 20, 5, 21+2, 21+2);
  ellipse(20, 5, 21+2, 21+2);
  pop();


  //riempimento orsetto
  push();
  noStroke();
  fill(chiaro);

  // testa e orecchie
  ellipse(0, -25, 50, 50);
  ellipse(- 15, -45, 20, 20);
  ellipse(15, -45, 20, 20);

  // corpo
  ellipse(0, 15, 50, 55);

  // gambe
  ellipse(- 17, 40, 25, 27);
  ellipse(17, 40, 25, 27);

  // braccia
  ellipse(- 20, 5, 21, 21);
  ellipse(20, 5, 21, 21);
  pop();

  //archetti interni braccia e gambe
  push();
  noFill();
  stroke(scuro);
  strokeWeight(2);

  // braccia
  arc(- 20, 5, 21, 21, -40, 80);
  arc(+ 20, 5, 21, 21, 100, 220);

  // gambe
  arc(- 17, 40, 26, 28, 270, 350);
  arc(17, 40, 26, 28, 190, 270);

  pop();

  //riflessi
  push();
  noFill();
  stroke(255, 255, 255, 180);
  strokeWeight(2);

  // gamba sinistra
  arc(- 17, 40, 17, 19, 190, 260);

  // gamba destra
  arc(17, 40, 17, 19, 280, 350);

   // braccio sinistro
  arc(- 20, 5, 13, 13, 190, 260);

  // braccio destro
  arc(20, 5, 13, 13, 280, 350);

  //orecchie
  // orecchio sinistro
  arc(- 15, -45, 14, 14, 200, 290);

  // orecchio destro
  arc(15, -45, 14, 14, 250, 340);
  pop();

  
  //occhi e naso
  push();
  fill(scuro);
  circle(-9, -30, 6.5);
  circle(9, -30, 6.5);
  ellipse(0, -22, 8, 6);
  fill(255); 
  circle(-8, -31, 2);
  circle(10, -31, 2);
  pop();

  //bocca
  push();
  noFill();
  stroke(scuro);
  strokeWeight(1.5);
  arc(- 4, -18, 7, 6, 0, 180);
  arc(4, -18, 7, 6, 0, 180);
  pop();

  pop();
  
}


var GDiam = 10;

function setup() {
  
    createCanvas(500,500);
     background("#B22222"); 
}

function draw() {
  
   
    
    ellipse(50,100,GDiam,GDiam);
    fill("#ffff00");
    stroke("#00ffff");
    strokeWeight(5);
    
    ellipse(random(width),random(height),20,20);
    fill("#00ff40");
    stroke("#0040ff");
    strokeWeight(5);
    
    
    
    line(50,300,50,400);
   textSize(40);
    textFont("georgia");
    textStyle(ITALIC);
    text('do a barrel roll',10,30);
   
    
}
function mousePressed(){
    if(GDiam >30){
        GDiam =10;}
else{GDiam = GreenDiam+5;}
}
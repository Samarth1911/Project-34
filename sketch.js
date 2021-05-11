const Engine  = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Constriant = Matter.Constriant

var engine,world
var sky 
var Superman
var monster
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16,block17,
 block18,block19,block20,block21,block22,block23,block24,block25,block26
var rope


function preload() {
//preload the images here
BackgroundImage = loadImage("")
}



function setup(){
  createCanvas(3000, 800);
  // create sprites here
  engine = Engine.create();
  world = engine.world;

  sky = new Ground(00,50,3000,20);
  ground = new Ground(00,550,1500,50)
  Superman = new Hero(300,400,75,75)
  monster = new Monster(1000,400,75,75)
  // first row
  block1 = new Block(500,750,50.50)
  block2 = new Block(500,700,50,50)
  block3 = new Block(500,650,50,50)
  block4 = new Block(500,600,50,50)
  block5 = new Block(500,550,50,50)
  block6 = new Block(500,500,50,50)
  block7 = new Block(500,450,50,50)
  //second row
  block8 = new Block(600,750,50,50)
  block9 = new Block(600,700,50,50)
  block10 = new Block(600,650,50,50)
  block11 = new Block(600,600,50,50)
  block12 = new Block(600,550,50,50)
  block13 = new Block(600,500,50,50)
  //third row
  block14 = new Block(700,750,50,50)
  block15 = new Block(700,700,50,50)
  block16 = new Block(700,650,50,50)
  block17 = new Block(700,600,50,50)
  block18 = new Block(700,550,50,50)
  block19 = new Block(700,500,50,50)
  block20 = new Block(700,450,50,50)
  block21 = new Block(700,400,50,50)
  //fourth row 
  block22 = new Block(800,750,50,50)
  block23 = new Block(800,700,50,50)
  block24 = new Block(800,650,50,50)
  block25 = new Block(800,600,50,50)
  block26 = new Block(800,550,50,50)

  rope = new Fly(Superman.body,sky.body)
  


  


  

}
  


function draw() {
  background(0);
  sky.display()
  ground.display()
  Superman.display()
  monster.display()
  block1.display()
  block2.display()
  block3.display()
  block4.display()
  block5.display()
  block6.display()
  block7.display()
  block8.display()
  block9.display()
  block10.display()
  block11.display()
  block12.display()
  block13.display()
  block14.display()
  block15.display()
  block16.display()
  block17.display()
  block18.display()
  block19.display()
  block20.display()
  block21.display()
  block22.display()
  block23.display()
  block24.display()
  block25.display()
  block26.display()
  rope.display()

  




}
function mousePressed(){
  Matter.body.setPosition(Superman.body,{x:mouseX,y:mouseY})

    
}





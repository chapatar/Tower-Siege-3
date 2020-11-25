const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, Slingshot;
var Score = 0;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    player=Bodies.circle(50, 200, 20);
    World.add(world,player);

    //Platforms
    ground1 = new Ground(500, 390, 200, 20)
    ground2 = new Ground(1000, 190, 200, 20)
    hexagon = new Hexagon(100, 200, 50, 50)
    Slingshot = new SlingShot(hexagon.body, {x:150, y:200})

    //Boxes on first stand
    box1 = new Box1(575, 360, 10, 10)
    box2 = new Box1(525, 360, 10, 10)
    box3 = new Box1(475, 360, 10, 10)
    box4 = new Box1(425, 360, 10, 10)

    box5 = new Box1(550, 310, 10, 10)
    box6 = new Box1(500, 310, 10, 10)
    box7 = new Box1(450, 310, 10, 10)

    box8 = new Box1(525, 260, 10, 10)
    box9 = new Box1(475, 260, 10, 10)

    box10 = new Box1(500, 210, 10, 10)

    //Boxes on second stand
    box11 = new Box1(1050, 160, 10, 10)
    box12 = new Box1(1000, 160, 10, 10)
    box13 = new Box1(950, 160, 10, 10)

    box14 = new Box1(1025, 110, 10, 10)
    box15 = new Box1(975, 110, 10, 10)

    box16 = new Box1(1000, 60, 10, 10)
}

function draw(){
    background(150);

    noStroke();
    textSize(35)
    fill("white")
    text("Score: " + Score, width-400, 50)

    Engine.update(engine);

    ground1.display();
    ground2.display();
    hexagon.display();
    Slingshot.display();

    box1.display();
    box1.score();
    box2.display();
    box2.score();
    box3.display();
    box3.score();
    box4.display(); 
    box4.score();
    
    box5.display();
    box5.score();
    box6.display();
    box6.score();
    box7.display();
    box7.score();

    box8.display();
    box8.score();
    box9.display();
    box9.score();

    box10.display();
    box10.score();

    box11.display();
    box11.score();
    box12.display();
    box12.score();
    box13.display();
    box13.score();

    box14.display();
    box14.score();
    box15.display();
    box15.score();

    box16.display();
    box16.score();
      
    drawSprites();
}

function mouseDragged(){
    Matter.Body.setPosition(hexagon.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    Slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        Slingshot.attach(hexagon.body)
    }
}
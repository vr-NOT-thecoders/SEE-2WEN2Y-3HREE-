const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var Grot;
var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,100,50,50);
    Grot = new Groot(0,390,420,2);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    Grot.display();
}
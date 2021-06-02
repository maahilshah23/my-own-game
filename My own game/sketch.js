var canvas, backgroundImage;
var form, player, game;
var gameState = 0;
var distance = 0;
var car, dryGarbage, dryGarbage2;
var track, car_img, dryGarbage_img, dryGarbage2_img;

function preload(){
track = loadImage("../images/track.jpg");
car = loadImage("../images/car.png");
}

function setup(){
canvas = createCanvas(displayWidth + 20, displayHeight + 20);
game = new Game();
game.start();
game.start();
}

function draw(){
if(gameState === 1){
    clear();
    game.play();
}
if(gameState === 2){
    game.end();
}
track.display();
car.display();
}
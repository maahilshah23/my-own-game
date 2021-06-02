class Game {
    constructor(){

    }
async start(){
    car = createSprite(100,200);
    car.addImage("car",car);
   }

   play(){
    form.hide();

    backgroundImage(rgb(198,135,103));
    image(track, 0,-displayHeight*4,displayWidth, displayHeight*5);
    }
}
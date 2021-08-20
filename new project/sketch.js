 //creating certain variables to store images and other things
var tile, tileImage;
var sheep, sheepImage;
var tileGroup, invisibleTileGroup;
var back, backImage;
var tink, tinkImage;
var monster, monsterImage;
   
 //to load the images into the variables created earlier
function preload(){
  sheepImage = loadImage("image.png");
  tileImage = loadImage("tile2.png")
  backImage = loadImage("back.jpg")
  jumpSound = loadSound("jumpSound.wav")
  tinkImage = loadAnimation("coin2.png", "coin3.png", "coin4.png", "coin5.png",
  "coin6.png", "coin7.png", "coin8.png", "coin9.png", "coin10.png", "coin11.png");
   monsterImage = loadImage("monster_prev_ui.png");
}

 //creating the objects for the game
function setup(){

 //canvas for the game
  createCanvas(500, 600);
 
 //creating background as an object to add image
  back = createSprite(250, 300)
  back.addImage(backImage)
  back.velocityY = 2;

  sheep = createSprite(250, 300, 20, 50);
  sheep.addImage(sheepImage);
  sheep.scale = 0.4;

  tileGroup = new Group();
  invisibleTileGroup = new Group();
}

 //to run the code multiple times
function draw(){
  background("skyBlue");
  if(back.y > 500){
    back.y = 300;
  }

 //calling the spawn functions
  spawnTiles();
  spawnCoins();
  spawnMonsters();

 //to move the sheep according to the keys
  if(keyDown("SPACE")){
    sheep.velocityY = -5;
  }

  sheep.velocityY = sheep.velocityY+0.5
  if(keyCode === RIGHT_ARROW){
   sheep.x = sheep.x + 3;
}

if(keyCode === LEFT_ARROW){
   sheep.x = sheep.x - 3;
}

 //when the invisible tile group is touching the sheep, it should bounce
 //it should bounce with a sound
if(invisibleTileGroup.isTouching(sheep)){
   tileGroup.bounce(sheep);
   jumpSound.play();
}
 
//to display the sprites/objects
  drawSprites();
}

 //to spawn the tiles and to make it appear randomly
function spawnTiles(){
  if(frameCount%50 === 0){
	  tile = createSprite(250, 0, 70, 15);
    tile.velocityY = 3;
	  tile.x = Math.round(random(40, 460));
	  tile.lifetime = 200;
    tile.addImage(tileImage);
    tile.scale = 0.1;
    tileGroup.add(tile);

 //creating a bunch of invisible tiles
 //to make the sheep look like standing on a tile
   invisibleTile = createSprite(250, -5, 70, 5);
   invisibleTile.velocityY = 3;
   invisibleTile.x = tile.x;
   invisibleTile.lifetime = 200;
   invisibleTileGroup.add(invisibleTile);
  }
}

 //to spawn the coins and to make it appear randomly
function spawnCoins(){
  if(frameCount%70 === 0){
    tink = createSprite(250, 0, 70, 15);
    tink.velocityY = 3;
    tink.x = Math.round(random(40, 460));
    tink.lifetime = 200;
    tink.addAnimation("shiningCoin", tinkImage);
    tink.scale = 0.07;
  }
}

 //to spawn the monsters and to make it appear randomly
function spawnMonsters(){
  if(frameCount%100 === 0){
    monster = createSprite(250, 0, 80, 15);
    monster.velocityY = 3;
    monster.x = Math.round(random(40, 460));
    monster.lifetime = 200;
    monster.addImage(monsterImage);
    monster.scale = 0.07;
  }
}